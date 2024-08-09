import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.div`
  background-color: #f7f0e7;
  padding: 2em 0;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 0.1px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 2200px; /* 최대 너비를 2200px로 설정 */
  padding: 0 100px; /* 양쪽에 100px의 패딩을 추가 */
`;

const TestimonialItem = styled.div`
  flex: 1;
  margin: 0 1em;
  text-align: center;
  position: relative; /* 텍스트를 이미지 상단에 배치하기 위해 상대 위치 지정 */
  max-width: 600px; /* 각 이미지의 최대 너비를 설정 */
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%; /* 이미지 높이를 100%로 설정하여 컨테이너에 맞추도록 함 */
  object-fit: cover; /* 이미지 비율을 유지하면서 컨테이너에 맞춤 */
`;

const ImageLabel = styled.div`
  position: absolute;
  top: 10px; /* 이미지 상단에서 10px 아래에 배치 */
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2em;
  font-weight: bold;
`;

const TestimonialContent = styled.div`
  flex: 1;
  margin: 0 1em;
  text-align: center;
`;

const TestimonialTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 100px;
  font-weight: 260;
  line-height: 21.04px;
`;

const TestimonialText = styled.p`
  font-size: 14px;
  font-family: 'Freesentation';
  line-height: 21.04px;
  font-weight: 260;
  margin: 2em 0;
  white-space: pre-line;
`;

const WhiteSpace = styled.div`
  background-color: white;
  height: 150px;
`;

const Testimonial = ({ before, after, username, text }) => {
  return (
    <TestimonialSection>
      <h2>Before & After</h2>
      <TestimonialContainer>
        <TestimonialItem>
          <ImageLabel>Before</ImageLabel>
          <TestimonialImage src={before} alt="Before" />
        </TestimonialItem>
        <TestimonialContent>
          <TestimonialTitle>{username}</TestimonialTitle>
          <TestimonialText>{text}</TestimonialText>
          <TestimonialText>컨설팅 서비스 이용 고객</TestimonialText>
        </TestimonialContent>
        <TestimonialItem>
          <ImageLabel>After</ImageLabel>
          <TestimonialImage src={after} alt="After" />
        </TestimonialItem>
      </TestimonialContainer>
      
    </TestimonialSection>
  );
};

export default Testimonial;
