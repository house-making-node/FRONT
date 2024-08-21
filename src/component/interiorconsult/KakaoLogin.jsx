import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import styled from 'styled-components';
import Cookies from 'js-cookie';
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
  const navigate = useNavigate();  

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      // 프론트 -> 백엔드로 GET 요청 전송
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/kakao?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {  
          Cookies.set('userId', data.userId);
          console.log('userId stored in cookie:', Cookies.get('userId'));
          navigate('/KakaoAgreement');  
        } else {
          alert('로그인에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('로그인 중 오류가 발생했습니다.');
      });
    }
  }, [navigate]);

  return (
    <LoginContainer>
      <KakaoButton onClick={() => window.location.href = KAKAO_AUTH_URL}>
        <KakaoImage src={kakaoLoginImage} alt="카카오 로그인" />
      </KakaoButton>
    </LoginContainer>
  );
};

export default KakaoLogin;
