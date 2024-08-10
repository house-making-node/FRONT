import React from "react";
import styled from "styled-components";
import extra1 from "../img/extra1.jpg";
import extra2 from "../img/extra2.jpg";
import extra3 from "../img/extra3.jpg";

const ExtraContentSection = styled.div`
  background-color: #f7f0e7;
  padding: 2em 0;
  text-align: center;
  margin-top: 2em;
`;

const TitleContainer = styled.div`
  margin-bottom: 1em;
`;

const MainTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 1em;
  color: #999;
`;

const ExtraContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExtraContentItem = styled.div`
  position: relative;
  flex: 1;
  margin: 0.5em;
  text-align: center;
  overflow: hidden;
  max-width: 400px; /* 최대 너비를 400px로 설정 */
`;

const ExtraContentImage = styled.img`
  width: 100%;
  height: 250px; /* 모든 이미지의 높이를 동일하게 설정 */
  border-radius: 10px;
  object-fit: cover;
`;

const ExtraContentText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  font-size: 1em;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  border-radius: 5px;
`;

const ExtraContent = () => {
  return (
    <ExtraContentSection>
      <TitleContainer>
        <SubTitle>Homestyling</SubTitle>
        <MainTitle>스타일별 인테리어</MainTitle>
      </TitleContainer>
      <ExtraContentContainer>
        <ExtraContentItem>
          <ExtraContentImage src={extra1} alt="extra1" />
          <ExtraContentText>심플하고 깔끔한 화이트톤</ExtraContentText>
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
  );
};

export default ExtraContent;
