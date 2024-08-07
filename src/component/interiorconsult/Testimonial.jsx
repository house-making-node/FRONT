import React from "react";
import styled from "styled-components";

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
  max-width: 1200px;
`;

const TestimonialItem = styled.div`
  flex: 1;
  margin: 0 1em;
  text-align: center;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const TestimonialContent = styled.div`
  flex: 1.5;
  margin: 0 1em;
  text-align: center;
`;

const TestimonialTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const TestimonialText = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  margin: 0.5em 0;
`;

const Testimonial = ({ before, after, username, text }) => {
  return (
    <TestimonialSection>
      <h2>Before & After</h2>
      <TestimonialContainer>
        <TestimonialItem>
          <TestimonialImage src={before} alt="Before" />
          <TestimonialText>Before</TestimonialText>
        </TestimonialItem>
        <TestimonialContent>
          <TestimonialTitle>{username} (사용자 닉네임)</TestimonialTitle>
          <TestimonialText>{text}</TestimonialText>
          <TestimonialText>컨설팅 서비스 이용 고객</TestimonialText>
        </TestimonialContent>
        <TestimonialItem>
          <TestimonialImage src={after} alt="After" />
          <TestimonialText>After</TestimonialText>
        </TestimonialItem>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
