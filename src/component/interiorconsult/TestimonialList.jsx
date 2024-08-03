import React, { useState } from 'react';
import styled from 'styled-components';
import Testimonial from './Testimonial';
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
    text: "오직 자취생을 위한 인테리어 컨설팅을 해주신다는 점에 끌려서 선택했어요. 컨설턴트 분이 제 취향과 니즈를 반영해서 제품 추천, 공간 활용 방법을 알려주셔서 좋았어요. 앞으로도 잘 채워 나가볼게요!",
  },
  {
    before: before2,
    after: after2,
    username: "모나",
    text: "집꾸가 저희 자취방에 정말 큰 변화를 줬어요. 빠르게 리모델링할 수 있어서 좋았어요. 취향을 잘 반영해줘서 기뻐요!",
  },
  {
    before: before3,
    after: after3,
    username: "조영",
    text: "좁고 높은 자취방이라 휴식을 방해할 수 있겠다고 생각했어요. 그런데 집꾸는 집에 변화를 주기 위해 저희 요구를 귀기울여 듣고, 놀라운 변화를 만들어 주셨어요.",
  }
];

const TestimonialListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em;
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
    <TestimonialListContainer>
      <Testimonial key={currentSlide} {...testimonials[currentSlide]} />
      <Controls>
        <ControlButton onClick={prevSlide}>{"<"}</ControlButton>
        <CurrentSlide>{currentSlide + 1}/{testimonials.length}</CurrentSlide>
        <ControlButton onClick={nextSlide}>{">"}</ControlButton>
      </Controls>
      <Indicators>
        {testimonials.map((_, index) => (
          <Indicator
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></Indicator>
        ))}
      </Indicators>
    </TestimonialListContainer>
  );
};

export default TestimonialList;
