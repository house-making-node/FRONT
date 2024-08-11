import React, { useEffect } from 'react';
import styled from 'styled-components';
import kakaoLoginImage from '../img/kakaoLogin1.png';

const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=a2a708f9ef61aa50055f852bf8e7bc16&redirect_uri=http://3.36.240.5:3000/auth/kakao/callback";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const KakaoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoImage = styled.img`
  width: 712px; /* provided image size */
  height: auto;
`;

const KakaoLogin = () => {

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      // 2. 프론트 -> 백, 인가코드 넘김
      fetch('/api/auth/kakao/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.accessToken) {
            // 4. 백 -> 프론트, 토큰 넘김
            // 토큰을 받아서 원하는 로직을 처리
            console.log('Access Token:', data.accessToken);
            // 로그인 후 환영페이지로 이동
            window.location.href = '/welcome';
          } else {
            // 토큰 발급 실패 처리
            console.error('Failed to retrieve access token');
          }
        })
        .catch((error) => {
          console.error('Error during Kakao login:', error);
        });
    }
  }, []);

  // 1. 프론트 <-> 카카오, 인가코드 발급
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginContainer>
      <KakaoButton onClick={handleKakaoLogin}>
        <KakaoImage src={kakaoLoginImage} alt="Kakao Login Button" />
      </KakaoButton>
    </LoginContainer>
  );
};

export default KakaoLogin;
