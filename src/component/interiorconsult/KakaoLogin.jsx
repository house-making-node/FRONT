import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import kakaoLoginImage from "../img/kakaoLogin1.png";

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_ID;
const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

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
  width: 712px;
  height: auto;
`;

const KakaoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Kakao } = window;

  useEffect(() => {
    const initKakao = async () => {
      if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_API_KEY);
      }
    };

    initKakao();
  }, [Kakao]);

  useEffect(() => {
    const handleKakaoCallback = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get("code");
      console.log("Extracted code:", code); // 콘솔에 코드 출력 확인

      if (code) {
        try {
          console.log("Sending request to server...");
          const response = await axios.get(
            `${API_BASE_URL}/auth/kakao?code=${code}`
          );
          console.log("Server response:", response); // 서버 응답 확인

          if (response.status === 200) {
            const data = response.data;
            console.log("Response Data:", data);

            if (data.isSuccess) {
              const { access_token } = data.result;
              localStorage.setItem("access_token", access_token);
              navigate("/home");
            } else {
              console.error("Login failed:", data.message);
            }
          } else {
            console.error("Failed to authenticate:", response.status);
          }
        } catch (error) {
          console.error("Error during Kakao login:", error);
        }
      } else {
        console.error("No code found in URL");
      }
    };

    if (location.search.includes("code=")) {
      handleKakaoCallback();
    }
  }, [location.search, navigate]);

  const handleKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
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
