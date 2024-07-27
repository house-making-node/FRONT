import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import houseimage from "../component/img/house.png";

const PageContainer = styled.div`
  background: linear-gradient(180deg, rgba(239, 214, 187, 0.25) 20.82%, rgba(255, 255, 255, 0.2) 40.77%);
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
    width: 379px;
    height: 68px;
    padding: 10px;
    background-color: #CA904B69;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 121px;
    font-size: 18px;
    font-weight: 400;

    &:hover {
        background-color: #CA904B72;
    }
`;

const SignupTitle = styled.h1`
   color: #7d5959;
   font-size: 20px; 
   margin-top: 20px;
   font-weight: 400;
   color: black;
   margin-bottom: 138px;
`;

const Description = styled.div`
   color: black;
   font-size: 20px;
   text-align: center;
   font-weight: 260;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HouseImage = styled.img`
  width: 81px; /* Adjust the size as needed */
  height: 65px;
  margin-top: 150px;
  margin-bottom: 16px;
`;

const ShareLetterComplete = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/share-letter-story');
  };

  return (
    <PageContainer>
      <MessageContainer>
        <HouseImage src={houseimage} alt="House"/>
        <SignupTitle>행복한 자취를 위한, 공유레터</SignupTitle>
        <Description>00님의 자취 생활 공유하기가 완료되었어요.
        <br />공유해주셔서 감사해요!</Description>
      </MessageContainer>

      <Button onClick={handleButtonClick}>자취레터 보러가기</Button>
    </PageContainer>
  );
};

export default ShareLetterComplete;
