import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import houseimage from '../component/img/house.png';
import shareletter1 from '../component/img/shareletter1.png';
import shareletter2 from '../component/img/shareletter2.png';
import axios from 'axios';

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
    line-height: 1.8;
  }
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HouseImage = styled.img`
  width: 81px;
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
  margin-bottom: 46px;
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
  // API에서 받은 날짜 형식: "2024년 8월 18일"
  // 이를 "2024-08-18" 형식으로 변환
  const [year, month, day] = dateString.split('년 ')[0].split('-');
  const monthAndDay = dateString.split('년 ')[1].split('일')[0].split('월');
  
  const formattedDate = `${year}-${monthAndDay[0].padStart(2, '0')}-${monthAndDay[1].padStart(2, '0')}`;
  const date = new Date(formattedDate);

  const formattedYear = date.getFullYear();
  const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
  const formattedDay = String(date.getDate()).padStart(2, '0');

  return `${formattedYear}년 ${formattedMonth}월 ${formattedDay}일`;
};

const ShareLetterStory = ({ addScrap }) => {
  const { letter_id } = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await axios.get(`http://3.36.240.5:3000/share_letters/${letter_id}`);
        if (response.data.isSuccess) {
          setLetter(response.data.result);
        } else {
          setError('데이터를 가져오는 중 오류가 발생했습니다.');
        }
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

  if (!letter || !letter.content) {
    return <PageContainer>내용이 없습니다.</PageContainer>;
  }

  const handleButtonClick1 = () => {
    navigate('/share-letter-send');
  };

  const handleButtonClick2 = () => {
    const scrap = {
      id: new Date().getTime(),
      title: letter.title || '제목 없음',
      date: formatDate(letter.created_at),
    };
    if (typeof addScrap === 'function') {
      addScrap(scrap);
    } else {
      console.error('addScrap is not a function');
    }
    navigate('/myscrap/shareletter');
  };

  return (
    <PageContainer>
      <HouseImage src={houseimage} alt="House" />
      <MessageContainer>
        <SignupTitle>{letter.title}</SignupTitle>
        <Description>{formatDate(letter.created_at)}</Description>
        <Story>
          {letter.content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Story>
      </MessageContainer>
      <HorizontalLine />
      <ImageContainer>
        <ImageWrapper>
          <ShareLetter1 src={shareletter1} alt="Share Letter 1" />
          <ImageDescription>일주일에 두 번 0원 쓰기, 지출 감소에 효과가 있을까 ?</ImageDescription>
          <ImageDay>2024년 05월 22일</ImageDay>
          <Button onClick={handleButtonClick1}>의견 보내기</Button>
        </ImageWrapper>
        <ImageWrapper>
          <ShareLetter2 src={shareletter2} alt="Share Letter 2" />
          <ImageDescription>식물 덕후가 알려주는 키우기 좋은 식물들 🪴</ImageDescription>
          <ImageDay>2024년 05월 22일</ImageDay>
          <Button onClick={handleButtonClick2}>공유레터 저장하기</Button>
        </ImageWrapper>
      </ImageContainer>
    </PageContainer>
  );
};

export default ShareLetterStory;
