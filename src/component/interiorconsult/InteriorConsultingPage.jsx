// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import background from '../img/interior.jpg';
// import TestimonialList from './TestimonialList';
// import ExtraContent from './Extracontent';
// import LastSection from './LastSection';

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Freesentation';  // 글로벌 폰트 설정
//     margin: 0;
//     padding: 0;
//     height:183px;
//     top:801px;
//     box-sizing: border-box;
//   }
// `;

// const InteriorConsultingContainer = styled.div`
//   overflow: auto;
//   background-color: #f8f1eb;
// `;

// const MainContent = styled.div`
//   position: relative;
//   height: 900px;
//   background-image: url(${background});
//   background-size: cover;
//   background-position: top center;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   text-align: center;
// `;

// const TitleContainer = styled.div`
//   position: absolute;
//   top: 200px;
//   left: 200px;
//   color: hsla(0, 0%, 100%, 1);
// `;

// const Title = styled.h1`
//   font-size: 30px;
//   line-height:35.07px;
//   font-family: 'Freesentation';  // 폰트 설정
//   top:500px;
//   margin: 0;
//   font-weight: 400;
//   color: hsla(0, 0%, 100%, 1);

// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   font-family: 'Freesentation';  // 폰트 설정
//   font-weight: 260;
//   line-height: 21.04px;
//   color: hsla(0, 0%, 100%, 1);
// `;

// const Section = styled.div`
//   padding: 50px 0;
//   background-color: #f8f1eb;  // 분홍색 배경
//   text-align: center;
// `;

// const SectionTitle = styled.h2`
//   font-size: 18px;
//   font-weight: 260;
//   color: hsla(0, 0%, 0%, 1);
// ;
//   margin-bottom: 10px;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 15px;
//   font-weight: 260;
//   line-height: 23.38px;
//   color: hsla(33, 54%, 54%, 0.5);
// ;
// `;

// const WhiteSpace = styled.div`
//   background-color: white;
//   height: 150px;
// `;

// const InteriorConsultingPage = () => {
//   return (
//     <InteriorConsultingContainer>
//       <GlobalStyle />
//       <MainContent>
//         <TitleContainer>
//           <Title>인테리어 컨설팅</Title>
//         </TitleContainer>
//         <Overlay>
//           <Subtitle>인스타에서 봤던 예쁜 집,<br/> 더 이상 부러워 하지 마세요.<br />집꾸가 공간 활용 방법과 취향을 찾아드릴게요.</Subtitle>
//         </Overlay>
//       </MainContent>
//       <Section>
//         <SectionTitle>온라인 인테리어 컨설팅</SectionTitle>
//         <SectionSubtitle>꿈꾸던 공간을, 나만의 공간으로 디자인해보세요.</SectionSubtitle>
//       </Section>
//       <WhiteSpace />
//       <TestimonialList />
//       <ExtraContent />
//       <LastSection />
//     </InteriorConsultingContainer>
//   );
// };

// export default InteriorConsultingPage;

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import background from '../img/interior.jpg'; // 배경 이미지 경로
import TestimonialList from './TestimonialList';
import ExtraContent from './Extracontent';
import LastSection from './LastSection';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Freesentation';  // 글로벌 폰트 설정
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const InteriorConsultingContainer = styled.div`
  overflow: auto;
  background-color: #f8f1eb;
`;

const MainContent = styled.div`
  position: relative;
  height: 700px; // 높이 조정
  background-image: url(${background});
  background-size: 100% auto; // 너비를 100%로 설정하고, 높이를 자동 조정
  background-position: center top; // 이미지의 아랫부분이 잘리도록 설정
`;

const Overlay = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 250px;
  color: white;
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 35.07px;
  font-family: 'Freesentation';  // 폰트 설정
  margin: 0;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 1);
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-family: 'Freesentation';  // 폰트 설정
  font-weight: 260;
  line-height: 21.04px;
  color: hsla(0, 0%, 100%, 1);
`;

const Section = styled.div`
  padding: 50px 0;
  background-color: #f8f1eb;  // 분홍색 배경
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 260;
  color: hsla(0, 0%, 0%, 1);
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 15px;
  font-weight: 260;
  line-height: 23.38px;
  color: hsla(33, 54%, 54%, 0.5);
`;

const WhiteSpace = styled.div`
  background-color: white;
  height: 150px;
`;

const InteriorConsultingPage = () => {
  return (
    <InteriorConsultingContainer>
      <GlobalStyle />
      <MainContent>
        <TitleContainer>
          <Title>인테리어 컨설팅</Title>
        </TitleContainer>
        <Overlay>
          <Subtitle>인스타에서 봤던 예쁜 집,<br/> 더 이상 부러워 하지 마세요.<br />집꾸가 공간 활용 방법과 취향을 찾아드릴게요.</Subtitle>
        </Overlay>
      </MainContent>
      <Section>
        <SectionTitle>온라인 인테리어 컨설팅</SectionTitle>
        <SectionSubtitle>꿈꾸던 공간을, 나만의 공간으로 디자인해보세요.</SectionSubtitle>
      </Section>
      <WhiteSpace />
      <TestimonialList />
      <ExtraContent />
      <LastSection />
    </InteriorConsultingContainer>
  );
};

export default InteriorConsultingPage;
