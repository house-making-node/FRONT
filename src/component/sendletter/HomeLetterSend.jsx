import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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

const HouseImage = styled.img`
  width: 81px;
  height: 66px;
  margin-top: 167px;
`;

const FormTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: 50px;
`;

const Label = styled.label`
  font-size: 18px;
  color: black;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const RadioButton = styled.label`
  font-size: 18px;
  color: black;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  &:focus {
    outline: none;
    border-color: #ca904b;
  }
`;

const Button = styled.button`
  width: 217px;
  height: 69px;
  background-color: #ca904b69;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 140px;

  &:hover {
    background-color: #ca904b72;
  }
`;

const ShareLetterSend = () => {
  const [formData, setFormData] = useState({
    satisfaction: '',
    liked: '',
    disliked: '',
    goodPoints: '',
    improvementPoints: '',
    otherFeedback: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    const opinionData = {
      user_id: 1, // 사용자 ID를 적절하게 설정하세요
      is_satisfy: formData.satisfaction === 'yes',
      satisfy_detail_1: formData.liked === 'content',
      satisfy_detail_2: formData.liked === 'layout',
      satisfy_detail_3: formData.liked === 'other',
      unsatisfy_detail_1: formData.disliked === 'content',
      unsatisfy_detail_2: formData.disliked === 'layout',
      unsatisfy_detail_3: formData.disliked === 'other',
      opinion_good: formData.goodPoints,
      opinion_bad: formData.improvementPoints,
      comment: formData.otherFeedback
    };

    try {
      const response = await axios.post('http://3.36.240.5:3000/home_letters/1/opinions', opinionData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.isSuccess) {
        console.log("Opinion submitted successfully:", response.data);
        setIsSubmitted(true);
        handleButtonClick();
      } else {
        console.error("Failed to submit opinion:", response.data);
      }
    } catch (error) {
      console.error("Error submitting opinion:", error);
    }
  };

  const handleButtonClick = () => {
    navigate('/home-letter-send-complete');
  };

  return (
    <PageContainer>
      <HouseImage src={houseimage}></HouseImage>
      <FormTitle>행복한 자취를 위한, 공유레터</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>1. 오늘의 공유레터, 만족스러우셨나요?</Label>
          <RadioGroup>
            <RadioButton>
              <input
                type="radio"
                name="satisfaction"
                value="yes"
                checked={formData.satisfaction === 'yes'}
                onChange={handleChange}
              />
              예
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                name="satisfaction"
                value="no"
                checked={formData.satisfaction === 'no'}
                onChange={handleChange}
              />
              아니오
            </RadioButton>
          </RadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>2. 만족스러웠던 항목에 모두 체크해주세요.</Label>
          <RadioGroup>
            <RadioButton>
              <input
                type="radio"
                name="liked"
                value="content"
                checked={formData.liked === 'content'}
                onChange={handleChange}
              />
              유용한 정보가 있었어요.
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                name="liked"
                value="layout"
                checked={formData.liked === 'layout'}
                onChange={handleChange}
              />
              주제가 흥미로웠어요.
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                name="liked"
                value="other"
                checked={formData.liked === 'other'}
                onChange={handleChange}
              />
              전반적으로 만족스러웠어요.
            </RadioButton>
          </RadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>3. 불만족스러웠던 항목에 모두 체크해주세요.</Label>
          <RadioGroup>
            <RadioButton>
              <input
                type="radio"
                name="disliked"
                value="content"
                checked={formData.disliked === 'content'}
                onChange={handleChange}
              />
              내용이 아쉬웠어요.
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                name="disliked"
                value="layout"
                checked={formData.disliked === 'layout'}
                onChange={handleChange}
              />
              분량이 아쉬웠어요.
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                name="disliked"
                value="other"
                checked={formData.disliked === 'other'}
                onChange={handleChange}
              />
              내용이 부정확했어요.
            </RadioButton>
          </RadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>4. 어떤 점이 좋았는지 자세히 알 수 있을까요?</Label>
          <TextArea
            name="goodPoints"
            value={formData.goodPoints}
            onChange={handleChange}
            placeholder="여기를 클릭해주세요"
          />
        </FormGroup>

        <FormGroup>
          <Label>5. 어떤 점이 아쉬웠는지 자세히 알 수 있을까요?</Label>
          <TextArea
            name="improvementPoints"
            value={formData.improvementPoints}
            onChange={handleChange}
            placeholder="여기를 클릭해주세요"
          />
        </FormGroup>

        <FormGroup>
          <Label>6. 자취레터에서 다루었으면 하는 주제, 내용, 기타 의견이 있다면 자유롭게 적어주세요!</Label>
          <TextArea
            name="otherFeedback"
            value={formData.otherFeedback}
            onChange={handleChange}
            placeholder="여기를 클릭해주세요"
          />
        </FormGroup>

        <Button type="submit">제출하기</Button>
      </Form>
    </PageContainer>
  );
};

export default ShareLetterSend;
