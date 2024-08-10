import React from 'react';
import styled from 'styled-components';
import extra1 from '../img/extra1.jpg';
import extra2 from '../img/extra2.jpg';
import extra3 from '../img/extra3.jpg';

const ExtraContentSection = styled.div`
  background-color: #f7f0e7;
  padding: 2em 0;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 200px;
`;

const TitleContainer = styled.div`
  margin-bottom: 1em;
`;

const MainTitle = styled.h2`
  margin: 0;
  font-family:'Freesentation';
  font-size: 20px;
  font-weight:400;
  color: hsla(0, 0%, 0%, 1);
`;

const SubTitle = styled.h3`
  margin: 0;
  font-family:'Freesentation';
  font-size: 18px;
  font-weight:260;
  color:hsla(33, 54%, 54%, 0.5);
`;

const ExtraContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7em; 
  flex-wrap: wrap;
  max-width: 3000px;
  margin: 0 auto;
`;

const ExtraContentItem = styled.div`
  position: relative;
  flex: 1;
  margin: 0.5em;
  text-align: center;
  overflow: hidden;
  max-width: 450px; /* 최대 너비를 450px로 설정하여 크기 증가 */
`;

const ExtraContentImage = styled.img`
  width: 100%;
  height: 300px; /* 이미지 높이를 300px로 설정하여 크기 증가 */
  object-fit: cover;
`;

const ExtraContentText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  font-size: 18px;
  color: hsla(0, 0%, 100%, 1);
  font-weight: 260;
  padding: 0.5em;
  border-radius: 5px;
`;

const ExtraContentText1 = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  font-size: 18px;
  color: hsla(0, 0%, 0%, 1);
  font-weight: 260;
  padding: 0.5em;
  border-radius: 5px;
`;

const WhiteSpace = styled.div`
  background-color: white;
  height: 150px; /* 하단 공백의 높이를 150px로 설정 */
`;

const ExtraContent = () => {
  return (
    <>
      <ExtraContentSection>
        <TitleContainer>
          <SubTitle>Homestyling</SubTitle>
          <MainTitle>스타일별 인테리어</MainTitle>
        </TitleContainer>
        <ExtraContentContainer>
          <ExtraContentItem>
            <ExtraContentImage src={extra1} alt="extra1" />
            <ExtraContentText1>심플하고 깔끔한 화이트톤</ExtraContentText1>
          </ExtraContentItem>
          <ExtraContentItem>
            <ExtraContentImage src={extra2} alt="extra2" />
            <ExtraContentText>따듯하고 아늑한 우드톤</ExtraContentText>
          </ExtraContentItem>
          <ExtraContentItem>
            <ExtraContentImage src={extra3} alt="extra3" />
            <ExtraContentText>모던하고 시크한 블랙&그레이톤</ExtraContentText>
          </ExtraContentItem>
        </ExtraContentContainer>
      </ExtraContentSection>
      <WhiteSpace /> {/* 하단에 하얀색 공백 추가 */}
    </>
  );
};

export default ExtraContent;
