import React, { useState } from 'react';
import styled from 'styled-components';
import before1 from '../img/before.jpg';
import after1 from '../img/after.jpg';
import before2 from '../img/before2.jpg';
import after2 from '../img/after2.jpg';
import before3 from '../img/before3.jpg';
import after3 from '../img/after3.jpg';

const testimonials = [
  {
    before: before1,
    after: after1,
    username: "다나",
    text: '"\n오직 자취생을 위한 인테리어 컨설팅을 해주신다는 점에\n끌려서 선택했어요.\n\n컨설턴트 분이 제 취향과 니즈를 반영해서 제품 추천, 공\n간 활용 방법을 알려주셔서 좋았어요.\n\n앞으로도 잘 채워 나가볼게요!\n"',
  },
  {
    before: before2,
    after: after2,
    username: "모나",
    text: '"\n꿈만 꾸던 자취방이\n집꾸의 컨설팅 덕분에 \n현실이 되었어요.\n\n빠르고 꼼꼼한 의견을 주신 덕분에 제 취향을 발견할 수\n도 있었어요!\n\n"',
  },
  {
    before: before3,
    after: after3,
    username: "조영",
    text: '"\n좁고 낡은 자취방이라\n 솔루션을 받을 수 있을까 망설였어요. \n\n 그러나 결과는 정반대였죠.\n 저희 집이 가진 분위기를 살려서 인테리어를 할 수 있도\n록 도와주셨어요.\n\n 정말 감사합니다!\n"',
  }
];

const TestimonialSection = styled.div`
  background-color: #f7f0e7;
  padding: 2em 0;
  text-align: center;
  margin-top: 2em;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1600px;
`;

const TestimonialItem = styled.div`
  flex: 1;
  margin: 0 1em;
  text-align: center;
  position: relative;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const ImageLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TestimonialContent = styled.div`
  flex: 1;
  margin: 0 1em;
  text-align: center;
`;

const TestimonialTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const TestimonialText = styled.p`
  font-size: 18px;
  font-family: 'Freesentation';
  line-height: 21.04px;
  font-weight: 260;
  margin: 1.5em 0;
  white-space: pre-line;
`;

const TestimonialText1 = styled.p`
  font-size: 18px;
  font-family: 'Freesentation';
  line-height: 21.04px;
  font-weight: 260;
  margin: 3em 0 0 0;
  white-space: pre-line;
  color: hsla(33, 54%, 54%, 0.5);

`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
`;

const CurrentSlide = styled.span`
  font-size: 1.2em;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 1em;
`;

const Indicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background: #333;
  }
`;

const WhiteSpace = styled.div`
  background-color: white;
  height: 150px; /* 하단 공백의 높이를 150px로 설정 */
`;

const TestimonialList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <TestimonialSection>
        <h2>Before & After</h2>
        <Controls>
          <ControlButton onClick={prevSlide}>{"<"}</ControlButton>
          <CurrentSlide>{currentSlide + 1}/{testimonials.length}</CurrentSlide>
          <ControlButton onClick={nextSlide}>{">"}</ControlButton>
        </Controls>
        <TestimonialContainer>
          <TestimonialItem>
            <ImageLabel>Before</ImageLabel>
            <TestimonialImage src={testimonials[currentSlide].before} alt="Before" />
          </TestimonialItem>
          <TestimonialContent>
            <TestimonialTitle>{testimonials[currentSlide].username}</TestimonialTitle>
            <TestimonialText>{testimonials[currentSlide].text}</TestimonialText>
            <TestimonialText1>컨설팅 서비스 이용 고객</TestimonialText1>
          </TestimonialContent>
          <TestimonialItem>
            <ImageLabel>After</ImageLabel>
            <TestimonialImage src={testimonials[currentSlide].after} alt="After" />
          </TestimonialItem>
        </TestimonialContainer>
        <Indicators>
          {testimonials.map((_, index) => (
            <Indicator
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
            ></Indicator>
          ))}
        </Indicators>
      </TestimonialSection>
      <WhiteSpace /> {/* 하단에 하얀색 공백 추가 */}
    </>
  );
};

export default TestimonialList;
