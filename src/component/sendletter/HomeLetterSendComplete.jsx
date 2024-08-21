import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import houseimage from "../img/house.png";

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
   font-size: 19px;
   font-weigth: 260;
   text-align: center;
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
  margin-left: 90px;
`;

const HomeLetterComplete = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home-letter-story');
  };


  return (
    <PageContainer>
      <MessageContainer>
        <HouseImage src={houseimage} alt="House"/>
        <SignupTitle>똑똑한 자취를 위한, 자취레터</SignupTitle>
        <Description>
소중한 의견을 보내주셔서 감사해요.
        <br />더 나은 자취레터를 위해 노력할게요 ! </Description>
      </MessageContainer>

      <Button onClick={handleButtonClick}>자취레터 보러가기</Button>
    </PageContainer>
  );
};

export default HomeLetterComplete;
