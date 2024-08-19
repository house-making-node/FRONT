import React, { useEffect } from 'react';
import styled from 'styled-components';
import kakaoLoginImage from '../img/kakaoLogin1.png';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

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
      // 프론트 -> 백엔드로 GET 요청 전송
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/kakao?code=${code}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.accessToken) {
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

  // 카카오 로그인 버튼 클릭 시 실행
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
