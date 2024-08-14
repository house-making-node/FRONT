import React, { useState } from "react";
import Navbar from "../header/Navbar";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import smallLogo from "../img/logo.png";

const Container = styled.div`
    padding-top: 140px; /* Navbar 높이 + 여백 */
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
`;

const Background = styled.div`
    height: 518px;
    background: linear-gradient(180deg, rgba(239, 214, 187, 0.25) 20.82%, rgba(255, 255, 255, 0.5) 80.77%);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`;

const CentralBox = styled.div`
    width: 1098px;
    height: 700px;
    background-color: #F7F7F7;
    border-radius: 15px;
    border: 1px solid #B0B0B0;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const MessageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const LogoCircle = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-color: #E9D1B5;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 15px;
`;

const LogoImage = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
`;

const MessageContent = styled.div`
    flex: 1;
    background-color: ##F7F7F7;
    border-radius: 10px;
    padding: 15px;
`;

const GptResponseArea = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    background-color: #F7F7F7;
    border-radius: 10px;
`;

const StyledButton = styled.button`
    width: 379px;
    height: 68px;
    border-radius: 6px;
    background-color: #CA904B69;
    color: #333;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    font-size: 20px;
    font-weight: 300;
    line-height: 21.04px;
    text-align: left;
    color: #FFFFFF;

`;

function Message({ content }) {
    return (
        <MessageContainer>
            <LogoCircle>
                <LogoImage src={smallLogo} alt="Logo" />
            </LogoCircle>
            <MessageContent>{content}</MessageContent>
        </MessageContainer>
    );
}

function GptAnswer() {
    const [gptResponses, setGptResponses] = useState([]);
    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/");
    };

    // ChatGPT 응답을 가져오는 함수 (예시)
    const fetchGptResponse = async () => {
        // API 호출 로직
        const newResponse = "새로운 ChatGPT 응답입니다.";
        setGptResponses(prevResponses => [...prevResponses, newResponse]);
    };

    return (
        <div>
            <Navbar />
            <Background />
            <Container>
                <CentralBox>
                    <GptResponseArea>
                        {gptResponses.length > 0 ? (
                            gptResponses.map((response, index) => (
                                <Message key={index} content={response} />
                            ))
                        ) : (
                            <Message content="ChatGPT 응답이 여기에 표시됩니다." />
                        )}
                    </GptResponseArea>
                </CentralBox>
                <StyledButton onClick={handleExit}>인테리어 컨설팅 메인 페이지로 이동하기</StyledButton>
            </Container>
        </div>
    );
}

export default GptAnswer;