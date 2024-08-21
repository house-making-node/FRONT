import React, {useState,useEffect} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import houseimage from '../img/house.png';
import axios from 'axios';
import shareletter1 from '../img/room.png';
import shareletter2 from '../img/running.png';

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

const ImageWrapper = styled.button`
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
  const location = useLocation(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { letters = [], currentIndex = 0 } = location.state || {};
  const [nextLetter, setNextLetter] = useState(null);
  const [prevLetter, setPrevLetter] = useState(null);



  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await axios.get(`http://3.36.240.5:3000/home_letters/${letter_id}`);
        setLetter(response.data.result);
        console.log(response.data);
        console.log("아이디:",letter_id);

        const fetchNextPrevLetter = async (id, fallbackId) => {
          try {
            const res = await axios.get(`http://3.36.240.5:3000/home_letters/${id}`);
            if (res.data.result === -1) throw new Error('Invalid letter data');
            return res.data.result;
          } catch (err) {
            const fallbackRes = await axios.get(`http://3.36.240.5:3000/home_letters/${fallbackId}`);
            return fallbackRes.data.result;
          }
        };

        const nextLetterData = await fetchNextPrevLetter(parseInt(letter_id) + 1, 40);
        const prevLetterData = await fetchNextPrevLetter(parseInt(letter_id) - 1, 40);

        setNextLetter(nextLetterData);
        setPrevLetter(prevLetterData);

      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
        // navigate('http://3.36.240.5:3000/home_letters/40');
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

const handleNavigateToNext = () => {
  if (nextLetter) {
    const nextId = nextLetter.letter_id !== -1 ? nextLetter.letter_id : 40;
    navigate(`/home-letter-story/${nextId}`);
  }
};
console.log(nextLetter.id);

const handleNavigateToPrev = () => {
  if (prevLetter) {
    const prevId = prevLetter.letter_id !== -1 ? prevLetter.letter_id : 40;
    navigate(`/home-letter-story/${prevId}`);
  }
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
        <ImageWrapper onClick={handleNavigateToNext}>
          <ShareLetter1 src={shareletter1} alt="Share Letter 1" />
          <ImageDescription>{nextLetter.title}</ImageDescription>
          <ImageDay>{formatDate(nextLetter.created_at)}</ImageDay>
          <Button onClick={handleButtonClick1}>의견 보내기</Button>
        </ImageWrapper>
        <ImageWrapper onClick={handleNavigateToPrev}>
          <ShareLetter2 src={shareletter2} alt="Share Letter 2" />
          <ImageDescription>{prevLetter.title}</ImageDescription>
          <ImageDay>{formatDate(prevLetter.created_at)}</ImageDay>
          <Button2 onClick={handleButtonClick2}>인테리어 컨설팅 신청하기</Button2>
        </ImageWrapper>
      </ImageContainer>
    </PageContainer>
  );
}

export default HomeLetterStory;