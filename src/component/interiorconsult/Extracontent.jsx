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

const ExtraContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExtraContentItem = styled.div`
  flex: 1 1 200px;
  margin: 0.5em;
  text-align: center;
`;

const ExtraContentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ExtraContentText = styled.p`
  margin-top: 0.5em;
  font-size: 1em;
  color: #333;
`;

const ExtraContent = () => {
  return (
    <ExtraContentSection>
      <h2>스타일별 인테리어</h2>
      <ExtraContentContainer>
        <ExtraContentItem>
          <ExtraContentImage src={extra1} alt="extra1" />
          <ExtraContentText>심플한 화이트 인테리어</ExtraContentText>
        </ExtraContentItem>
        <ExtraContentItem>
          <ExtraContentImage src={extra2} alt="extra2" />
          <ExtraContentText>모던한 그레이 인테리어</ExtraContentText>
        </ExtraContentItem>
        <ExtraContentItem>
          <ExtraContentImage src={extra3} alt="extra3" />
          <ExtraContentText>아늑한 베이지 인테리어</ExtraContentText>
        </ExtraContentItem>
        {/* <ExtraContentItem>
          <ExtraContentImage src={extra4} alt="extra4" />
          <ExtraContentText>클래식한 브라운 인테리어</ExtraContentText>
        </ExtraContentItem> */}
      </ExtraContentContainer>
    </ExtraContentSection>
  );
};

export default ExtraContent;
