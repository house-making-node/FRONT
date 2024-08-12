import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import houseimage from "../component/img/house.png";
import axios from 'axios';

const PageContainer = styled.div`
  background: linear-gradient(180deg, rgba(239, 214, 187, 0.25) 20.82%, rgba(255, 255, 255, 0.2) 40.77%);
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 656px;
    margin: auto;
    text-align: left;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: 260;
    color: black;
    font-size: 20px;
    text-align: left; /* 텍스트 왼쪽 정렬 */
    align-self: flex-start; /* Flex 컨테이너 내에서 왼쪽으로 정렬 */
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 30px;
    border: 1px solid #b3b3b3;
    box-sizing: border-box;
    font-size: 18px;
    padding-left: 17px;
    &::placeholder {
      color: #D9D9D9B0; /* 회색으로 placeholder 텍스트 색상 설정 */
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 30px;
    border: 1px solid #b3b3b3;
    box-sizing: border-box;
    font-size: 25px;
    padding-left: 17px;
    resize: none;
    &::placeholder {
      color: #D9D9D9B0 /* 회색으로 placeholder 텍스트 색상 설정 */
    }
`;

const Button = styled.button`
    width: 217px;
    height: 68px;
    padding: 10px;
    background-color: #CA904B69;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 30px;

    &:hover {
        background-color: #CA904B72;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: -8px 0 16px;
`;

const SignupTitle = styled.h1`
   color: #7d5959;
   font-size: 20px; 
   margin-top: 20px;
   font-weight: 400;
   color: black;
`;

const Description = styled.div`
   color: black;
   font-size: 18px;
   text-align: center;
   margin-top: 18px;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HouseImage = styled.img`
  width: 81px; /* Adjust the size as needed */
  height: 65px;
  margin-top: 40px;
  margin-left: 180px;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 30px;
  border: 1px solid #b3b3b3; /* 테두리 색상 변경 */
  box-sizing: border-box;
  &::file-selector-button {
    padding: 8px 16px;
    border: 1px solid #b3b3b3; /* 버튼 테두리 색상 변경 */
    border-radius: 4px;
    background-color: #f1f1f1;
    cursor: pointer;
    color: #333;
  }
`;

const CompletionContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const CompletionTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

const CompletionText = styled.p`
  font-size: 20px;
  color: black;
`;

const ShareLetterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsSubmitted(true);
    console.log(data);
    navigate('/share-letter-complete');
  };


  return (
    <PageContainer>
      {!isSubmitted ? (
        <>
          <MessageContainer>
            <HouseImage src={houseimage} alt="House"/>
            <SignupTitle>똑똑한 정보 공유를 위한, 공유레터</SignupTitle>
            <Description>도시재생 관련 생활 정보를 공유해주세요.
            <br />나만 아는 특이한 장소, 편리한 꿀팁, 기타 기억에 남는 경험 등을 적어 주세요.</Description>
          </MessageContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name">닉네임</Label>
            <Input 
              placeholder="여기를 클릭해주세요"
              {...register("name", { required: "닉네임을 입력해주세요!" })} 
              type="text"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <Label htmlFor="age">나이</Label>
            <Input 
              placeholder="여기를 클릭해주세요"
              {...register("age", {
                required: "나이를 입력해주세요.",
                validate: {
                  isNumber: value => !isNaN(value) || "나이는 숫자로 입력해주세요!",
                }
              })} 
              type="number"
            />
            {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}

            <Label htmlFor="experience">독자님이 공유하고 싶은 경험을 상세히 적어주세요.</Label>
            <TextArea 
              placeholder="여기를 클릭해주세요"
              {...register("experience", { required: "경험을 상세히 적어주세요." })} 
              rows="4"
            />
            {errors.experience && <ErrorMessage>{errors.experience.message}</ErrorMessage>}

            <Label htmlFor="thumbnail">썸네일로 사용될 사진을 첨부해주세요. (경험을 나타내는 사진, 그냥 좋아하는 사진 무엇이든 좋습니다.)</Label>
            <FileInput 
              {...register("thumbnail", { required: "파일을 첨부해주세요." })} 
              type="file"
              accept="image/*"
            />
            {errors.thumbnail && <ErrorMessage>{errors.thumbnail.message}</ErrorMessage>}

            <Label htmlFor="wishes">그 외 집꾸 팀에게 하고 싶은 말</Label>
            <TextArea 
              placeholder="여기를 클릭해주세요"
              {...register("wishes", { required: "말씀을 적어주세요." })} 
              rows="4"
            />
            {errors.wishes && <ErrorMessage>{errors.wishes.message}</ErrorMessage>}

            <Button type="submit">제출하기</Button>
          </Form>
        </>
      ) : (
        <CompletionContainer>
          <CompletionTitle>행복한 자취를 위한, 공유레터</CompletionTitle>
          <CompletionText>00님의 자취 생활 공유하기가 완료 되었어요.<br />공유 해주셔서 감사해요!</CompletionText>
        </CompletionContainer>
      )}
    </PageContainer>
  );
}

export default ShareLetterPage;
