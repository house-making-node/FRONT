import React, {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import houseimage from '../img/house.png';
import axios from 'axios';
import shareletter1 from '../img/shareletter1.png';
import shareletter2 from '../img/shareletter2.png';

const PageContainer = styled.div`
  background: linear-gradient(180deg, rgba(239, 214, 187, 0.25) 20.82%, rgba(255, 255, 255, 0.2) 40.77%);
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 379px;
  height: 68px;
  padding: 10px;
  background-color: #ca904b69;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 121px;
  font-size: 18px;
  font-weight: 400;
  margin-left: -18px;

  &:hover {
    background-color: #ca904b72;
  }
`;

const Button2 = styled.button`
  width: 379px;
  height: 68px;
  padding: 10px;
  background-color: #ca904b69;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 121px;
  font-size: 18px;
  font-weight: 400;
  margin-left: -18px;

  &:hover {
    background-color: #ca904b72;
  }
`;

const SignupTitle = styled.h1`
  color: #7d5959;
  font-size: 20px;
  margin-top: 50px;
  font-weight: 400;
  color: black;
  margin-bottom: 49px;
`;

const Description = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
`;

const Story = styled.div`
  color: black;
  font-size: 18px;
  text-align: center;
  margin-top: 132px;
  width: 812px;
  text-align: left;
  margin-left: 30px;
  line-height: 1.8;

  & p {
    margin-bottom: 30px;
    line-height: 3
    display: block;
    content: '';
  }
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


const ShareLetter1 = styled.img`
  width: 332px;
  height: 293px;
  margin-top: 60px;
  margin-bottom: 16px;
  margin-right: 152px;
`;

const ShareLetter2 = styled.img`
  width: 332px;
  height: 293px;
  margin-top: 60px;
  margin-bottom: 0px;
`;

const HorizontalLine = styled.hr`
  width: 818px;
  border: 0;
  height: 2px;
  background: #b3b3b3;
  margin-top: 150px;
`;

const ImageWrapper = styled.div`
  text-align: left;
  font-size: 20px;
  margin-left: -50px;
`;

const ImageDescription = styled.div`
  margin-top: 16px;
  font-size: 20px;
  color: black;
  width: 298px;
`;

const ImageDay = styled.div`
  margin-top: 18px;
  font-size: 16px;
  color: black;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 95px;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

const HomeLetterStory = () => {
  const { letter_id } = useParams(); // URL에서 letter_id를 가져옴
  const navigate = useNavigate();
  const [letter, setLetter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await axios.get(`http://3.36.240.5:3000/home_letters/${letter_id}`);
        setLetter(response.data.result);
        console.log(response.data);
        console.log("아이디:",letter_id);
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchLetter();
  }, [letter_id]);

  if (loading) {
    return <PageContainer>로딩 중...</PageContainer>;
  }

  if (error) {
    return <PageContainer>{error}</PageContainer>;
  }

  const handleButtonClick1 = () => {
    navigate('/home-letter-send');
  };

  const handleButtonClick2 = () => {
    navigate('/consulting');
  };

  return (
    <PageContainer>
      <HouseImage src={houseimage} alt="House" />
      <MessageContainer>
        <SignupTitle>{letter.title}</SignupTitle>
        <Description>{formatDate(letter.created_at)}</Description>
        <Story>
        {letter.contents.split('\n').map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </Story>
      </MessageContainer>
      <HorizontalLine />
      <ImageContainer>
        <ImageWrapper>
          <ShareLetter1 src={shareletter1} alt="Share Letter 1" />
          <ImageDescription>자취생을 위한 돈 관리 방법</ImageDescription>
          <ImageDay>2024년 05월 22일</ImageDay>
          <Button onClick={handleButtonClick1}>의견 보내기</Button>
        </ImageWrapper>
        <ImageWrapper>
          <ShareLetter2 src={shareletter2} alt="Share Letter 2" />
          <ImageDescription>이미 구매한 물건을 또 구매하고 있다면 !</ImageDescription>
          <ImageDay>2024년 05월 22일</ImageDay>
          <Button2 onClick={handleButtonClick2}>인테리어 컨설팅 신청하기</Button2>
        </ImageWrapper>
      </ImageContainer>
    </PageContainer>
  );
}

export default HomeLetterStory;