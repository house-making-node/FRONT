import React from 'react';
import styled from 'styled-components';
import background from '../img/interior.jpg';
import TestimonialList from './TestimonialList';
import ExtraContent from './Extracontent';
import LastSection from './LastSection';

const HomeContainer = styled.div`
  overflow: auto;
`;

const MainContent = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
`;

const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <Overlay>
          <Title>인테리어 컨설팅</Title>
          <Subtitle>인스타에서 봤던 예쁜 집,<br /> 더 이상 부러워 하지 마세요.<br />집꾸가 공간 활용 방법과 취향을 찾아드릴게요.</Subtitle>
        </Overlay>
      </MainContent>
      <TestimonialList />
      <ExtraContent />
      <LastSection />
    </HomeContainer>
  );
};

export default Home;
