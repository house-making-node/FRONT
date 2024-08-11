import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import houseimage from "../img/house.png";

const PageContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(239, 214, 187, 0.25) 20.82%,
    rgba(255, 255, 255, 0.2) 40.77%
  );
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
    color: #d9d9d9b0; /* 회색으로 placeholder 텍스트 색상 설정 */
  }
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
    color: #d9d9d9b0; /* 회색으로 placeholder 텍스트 색상 설정 */
  }
`;

const Button = styled.button`
  width: 217px;
  height: 68px;
  padding: 10px;
  background-color: #ca904b69;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #ca904b72;
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
  margin-left: 90px;
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

const FileLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 260;
  color: black;
  font-size: 20px;
  text-align: left; /* 텍스트 왼쪽 정렬 */
  align-self: flex-start; /* Flex 컨테이너 내에서 왼쪽으로 정렬 */
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

const HomeLetterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsSubmitted(true);
    console.log(data);
    navigate("/home-letter-complete");
  };

  return (
    <PageContainer>
      {!isSubmitted ? (
        <>
          <MessageContainer>
            <HouseImage src={houseimage} alt="House" />
            <SignupTitle>똑똑한 자취를 위한, 자취레터</SignupTitle>
            <Description>
              자취를 하며 생긴 고민이 있으신가요 ?
              <br />
              사연을 선정해 솔루션을 드릴게요 !
            </Description>
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
                  isNumber: (value) =>
                    !isNaN(value) || "나이는 숫자로 입력해주세요!",
                },
              })}
              type="number"
            />
            {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}

            <Label htmlFor="experience">
              독자님의 고민을 상세히 적어주세요.
            </Label>
            <TextArea
              placeholder="여기를 클릭해주세요"
              {...register("experience", {
                required: "경험을 상세히 적어주세요.",
              })}
              rows="4"
            />
            {errors.experience && (
              <ErrorMessage>{errors.experience.message}</ErrorMessage>
            )}

            <Label htmlFor="thumbnail">
              썸네일로 사용될 사진을 첨부해주세요. (고민을 나타내는 사진, 그냥
              좋아하는 사진 무엇이든 좋습니다.)
            </Label>
            <FileInput
              {...register("thumbnail", { required: "파일을 첨부해주세요." })}
              type="file"
              accept="image/*"
            />
            {errors.thumbnail && (
              <ErrorMessage>{errors.thumbnail.message}</ErrorMessage>
            )}

            <Label htmlFor="wishes">레터의 제목을 작성해주세요.</Label>
            <TextArea
              placeholder="여기를 클릭해주세요"
              {...register("wishes", { required: "말씀을 적어주세요." })}
              rows="4"
            />
            {errors.wishes && (
              <ErrorMessage>{errors.wishes.message}</ErrorMessage>
            )}

            <Label htmlFor="wishes">고민 외에 집꾸 팀에게 하고싶은 말</Label>
            <TextArea
              placeholder="여기를 클릭해주세요"
              {...register("wishes", { required: "말씀을 적어주세요." })}
              rows="4"
            />
            {errors.wishes && (
              <ErrorMessage>{errors.wishes.message}</ErrorMessage>
            )}

            <Button type="submit">제출하기</Button>
          </Form>
        </>
      ) : (
        <CompletionContainer>
          <CompletionTitle>행복한 자취를 위한, 공유레터</CompletionTitle>
          <CompletionText>
            제출이 완료 되었어요.
            <br />
            보내주신 고민에 명확한 솔루션을 드리도록
            <br />
            집꾸 팀이 노력할게요 !
          </CompletionText>
        </CompletionContainer>
      )}
    </PageContainer>
  );
};

export default HomeLetterPage;
