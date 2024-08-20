import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import styled from 'styled-components';
import kakaoLoginImage from '../img/kakaoLogin1.png';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, rgba(239, 214, 187, 0.25) 20.82%, rgba(255, 255, 255, 0.5) 80.77%);

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
  const navigate = useNavigate();  

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      // 프론트 -> 백엔드로 GET 요청 전송
      fetch(`${process.env.REACT_APP_BACKEND_URL}/kakao/callback?code=${code}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // 로그인 성공 시 KakaoAgreement 페이지로 이동
            navigate('/KakaoAgreement');
          } else {
            alert('로그인에 실패하였습니다.');
          }
        })
        .catch(error => {
          console.error('Error during Kakao login:', error);
          alert('로그인 중 오류가 발생했습니다.');
        });
    }
  }, [navigate]);

  const handleLoginClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginContainer>
      <KakaoButton onClick={handleLoginClick}>
        <KakaoImage src={kakaoLoginImage} alt="카카오 로그인" />
      </KakaoButton>
    </LoginContainer>
  );
};

export default KakaoLogin;
