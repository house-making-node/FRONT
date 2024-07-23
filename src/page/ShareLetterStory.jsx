import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import houseimage from "../component/img/house.png";
import shareletter1 from "../component/img/shareletter1.png";
import shareletter2 from "../component/img/shareletter2.png";

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
;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 121px;
    font-size: 20px;
    font-weight: 400;
    margin-left: -18px;

    &:hover {
        background-color: #CA904B72;
    }
`;

const SignupTitle = styled.h1`
   color: #7d5959;
   font-size: 30px; 
   margin-top: 150px;
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
   line-height: 1.8; /* 줄 간격을 조정하여 텍스트의 가독성을 높임 */

   & br {
       margin-bottom: 30px; /* br 태그 사이에 30px 간격을 추가 */
       display: block; /* br 태그가 블록 요소로 처리되도록 설정 */
       content: ""; /* br 태그 사이에 공간을 추가 */
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
  width: 332px; /* Adjust the size as needed */
  height: 293px;
  margin-top: 60px;
  margin-bottom: 16px;
  margin-right: 152px;
`;

const ShareLetter2 = styled.img`
  width: 332px; /* Adjust the size as needed */
  height: 293px;
  margin-top: 60px;
  margin-bottom: 16px;
`;


const HorizontalLine = styled.hr`
  width: 818px;
  border: 0;
  height: 2px;
  background: #b3b3b3;
  margin-top: 150px; /* 줄과 Story 컴포넌트 사이의 간격 조정 */
`;

const ImageWrapper = styled.div`
  text-align: left; /* Adjust the margin between images */
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
 /* Adjust the margin to reduce space between text and images */
`;

const ShareLetterStory = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate('/share-letter-send');
  };

  const handleButtonClick2 = () => {
    navigate('/share-letter-save');
  };

  return (
    <PageContainer>
      <MessageContainer>
        <SignupTitle>자취 시작하고 생긴 폭식증을 이겨낸 00의 이야기</SignupTitle>
        <Description>2024년 05월 19일</Description>

        <Story> 안녕하세요, 공유레터 독자 여러분.<br />

오늘은 00님의 자취 생활을 시작한 후 겪었던 이야기를 공유하려고 합니다. 특히, 자취하면서 폭식증이 생긴 경험에 대해 이야기해보려 합니다.<br />

자취를 시작한 것은 대학교에 입학하면서부터였어요. 부모님과 떨어져 처음으로 혼자만의 공간을 가지게 되니 자유롭고 신났습니다. 원하는 시간에 일어나고, 내가 먹고 싶은 음식을 언제든지 먹을 수 있다는 사실이 너무 좋았어요. 그런데 이 자유로움이 오히려 저에게는 큰 문제로 다가왔습니다. 처음에는 간단하게 시작했어요. 수업이 끝나고 집에 와서 간단한 요리를 해 먹거나, 배달 음식을 시켜 먹는 것이 일상이 되었죠. 하지만 어느 순간부터 저녁 늦게까지 공부하거나, 스트레스를 받을 때마다 음식을 찾게 되더라고요. 배달 어플로 간단하게 음식을 주문할 수 있으니, 점점 더 자주 음식을 시켜 먹게 되었고, 특히 야식을 많이 먹게 되었습니다.<br />

처음에는 그냥 한두 번의 야식이었어요. 하지만 점점 그 빈도가 늘어나면서 폭식으로 이어졌습니다. 밤늦게 피자 한 판을 혼자 다 먹고도 부족해서 라면을 끓여 먹고, 디저트까지 챙겨 먹는 날이 많아졌습니다. 그렇게 먹고 나면 너무 배가 불러서 잠도 잘 못 자고, 다음 날 아침에는 속이 더부룩해서 하루 종일 컨디션이 좋지 않았어요.<br />

폭식의 악순환은 쉽게 끊어지지 않았습니다. 스트레스를 받으면 폭식을 하고, 폭식을 한 후에는 자책감에 시달리며 또다시 스트레스를 받는 일이 반복되었죠. 살이 찌는 것도 문제였지만, 더 큰 문제는 제 마음이었어요. 자존감이 낮아지고, 아무리 많은 음식을 먹어도 공허한 느낌이 들었습니다.<br />

그러던 어느 날, 스스로 이렇게 살면 안 되겠다는 생각이 들었습니다. 건강을 되찾고 싶었고, 더 이상 음식에 휘둘리지 않고 싶었어요. 그래서 작은 변화부터 시작했습니다. 우선 집에 있는 모든 배달 어플을 삭제하고, 냉장고를 정리했어요. 대신 신선한 채소와 과일, 건강한 식재료로 냉장고를 채웠습니다. 그리고 정해진 시간에만 식사를 하고, 간식도 건강한 선택을 하려고 노력했어요.<br />

물론, 처음에는 많이 힘들었습니다. 예전처럼 폭식을 하고 싶은 충동이 생길 때마다 스스로를 다독이며 참아야 했어요. 하지만 조금씩 나아지는 제 모습을 보면서 자신감이 생기기 시작했습니다. 운동도 꾸준히 하면서 몸과 마음이 함께 건강해지는 것을 느꼈습니다. 이제는 폭식의 악순환에서 벗어나 건강한 생활을 유지하고 있습니다. 자취 생활이 여전히 쉽지는 않지만, 건강한 식습관을 유지하는 것이 얼마나 중요한지 깨달았어요. 여러분도 혹시 비슷한 고민을 하고 있다면, 작은 변화부터 시작해보세요. 혼자가 아니라는 것을 기억하시고, 스스로를 사랑하는 마음을 잊지 마세요.<br />
감사합니다.
</Story>
        <HorizontalLine />
        <ImageContainer>
        <ImageWrapper>
        <ShareLetter1 src={shareletter1} alt="ShareLetter1"/>
        <ImageDescription>일주일에 두 번 0원 쓰기, 지출 감소에 효과가 있을까 ?</ImageDescription>
        <ImageDay>2024년 05월 21일</ImageDay>
        <Button onClick={handleButtonClick1}>의견 보내기</Button>
        </ImageWrapper>
        <ImageWrapper>
        <ShareLetter2 src={shareletter2} alt="ShareLetter2"/>
        <ImageDescription>식물 덕후가 알려주는 키우기 좋은 식물들 🪴
        <ImageDay>2024년 05월 22일</ImageDay>
        </ImageDescription>
        <Button onClick={handleButtonClick2}>공유레터 저장하기</Button>
        </ImageWrapper>
        </ImageContainer>
      </MessageContainer>
    </PageContainer>
  );
};

export default ShareLetterStory;
