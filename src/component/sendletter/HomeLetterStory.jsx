import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import houseimage from '../img/house.png';
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

  & br {
    margin-bottom: 30px;
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

const HomeLetterStory = ({ addScrap }) => {
  const navigate = useNavigate();

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
        <SignupTitle>독자님의 가장 큰 인테리어 고민은 무엇인가요?</SignupTitle>
        <Description>2024년 05월 19일</Description>

        <Story>
          안녕하세요, 자취레터 구독자 여러분!
          <br />
          오늘도 찾아와 주셔서 감사합니다. 이번 주 레터의 주제는 바로 여러분의 인테리어 고민입니다. "독자님의 인테리어 고민은 무엇인가요?"라는 질문을 던지며 시작해볼게요.
          <br />
          좁은 공간, 어떻게 활용하면 좋을까요?
          <br />
          많은 자취생 분들이 가장 먼저 고민하는 부분이죠. 작은 방을 어떻게 넓고 효율적으로 쓸 수 있을까요? 답은 바로 수납과 배치에 있습니다. 벽을 활용한 선반 설치나 다용도 가구 사용으로 공간을 절약해보세요. 예를 들어, 침대 밑에 수납 박스를 놓거나 벽걸이 선반을 설치하면 방이 훨씬 깔끔해집니다.
          <br />
          단조로운 방, 어떻게 꾸밀까요?
          <br />
          흰 벽만 있는 방, 너무 심심하지 않나요? 작은 변화로 큰 효과를 볼 수 있는 팁을 드릴게요. 벽지 스티커나 포스터를 활용해보세요. 또한, 쿠션이나 러그 같은 소품으로 색감을 추가하면 방이 훨씬 생기 있어 보여요. 저렴한 가격으로도 큰 변화를 줄 수 있답니다.
          <br />
          개인 취향 반영, 어떻게 할까요?
          <br />
          내 취향을 듬뿍 담은 방, 생각만 해도 기분이 좋죠? 좋아하는 색상이나 테마를 정해보세요. 예를 들어, 빈티지 스타일을 좋아한다면 앤티크 소품이나 원목 가구를, 미니멀리스트 스타일을 좋아한다면 심플한 디자인의 가구와 소품을 선택하면 됩니다. 자신의 취향을 반영한 공간은 더 편안하고 만족스러운 생활을 가능하게 합니다.
          <br />
          그럼에도 어려운 인테리어, 어떻게 할까요 ?
          <br />
          지금까지 레터를 읽으며 ‘말이 쉽지..’라고 생각하진 않으셨나요? 그런 분들을 위해 인테리어 컨설팅 서비스를 제공해드려요. 아래 인테리어 컨설팅 신청하기를 눌러서 전문가의 조언을 참고해보세요. 내 취향을 담은 공간 만들기에 한 걸음 더 가까워질 거에요.
          <br />
          여러분의 인테리어 고민이 조금이나마 해결되었길 바랍니다. 자취 생활이 더 즐거워질 수 있도록, 저희 자취레터가 항상 함께할게요. 다음 주에도 더 유용한 정보로 찾아오겠습니다!
          <br />
          여러분의 자취 생활에 작은 행복이 가득하길 바라며, 자취레터 드림.
          <br />
P.S. 인테리어에 대한 궁금증이나 고민이 있으시면 언제든지 저희에게 알려주세요. 다음 레터에서 다뤄드릴게요!
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
