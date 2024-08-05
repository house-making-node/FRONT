// import React from 'react';
// import styled from 'styled-components';
// import lastSectionImage from '../img/extra4.jpg';

// const LastSectionContainer = styled.div`
//   background-image: url(${lastSectionImage});
//   background-size: cover;
//   background-position: center;
//   color: white;
//   text-align: center;
//   padding: 5em 2em;
// `;

// const LastSectionContent = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   display: inline-block;
//   padding: 2em;
//   border-radius: 10px;
// `;

// const LastSectionTitle = styled.h2`
//   font-size: 2.5em;
//   margin: 0.5em 0;
// `;

// const LastSectionText = styled.p`
//   font-size: 1.2em;
//   margin: 0.5em 0 1em 0;
// `;

// const LastSectionButton = styled.button`
//   background-color: #d59f6d;
//   color: white;
//   border: none;
//   padding: 0.5em 1em;
//   font-size: 1em;
//   cursor: pointer;
//   border-radius: 5px;

//   &:hover {
//     background-color: #c48454;
//   }
// `;

// const LastSection = () => {
//   return (
//     <LastSectionContainer>
//       <LastSectionContent>
//         <LastSectionTitle>집꾸</LastSectionTitle>
//         <LastSectionText>집꾸는 자취생들을 위한 맞춤형 인테리어 디자인을 위해 노력합니다.</LastSectionText>
//         <LastSectionButton>인테리어 컨설팅 신청하기</LastSectionButton>
//       </LastSectionContent>
//     </LastSectionContainer>
//   );
// };

// export default LastSection;

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import lastSectionImage from '../img/extra4.jpg';

const LastSectionContainer = styled.div`
  background-image: url(${lastSectionImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5em 2em;
`;

const LastSectionContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 2em;
  border-radius: 10px;
`;

const LastSectionTitle = styled.h2`
  font-size: 2.5em;
  margin: 0.5em 0;
`;

const LastSectionText = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0 1em 0;
`;

const LastSectionButton = styled.button`
  background-color: #d59f6d;
  color: white;
  border: none;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #c48454;
  }
`;

const LastSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <LastSectionContainer>
      <LastSectionContent>
        <LastSectionTitle>집꾸</LastSectionTitle>
        <LastSectionText>
          집꾸는 자취생들을 위한 맞춤형 인테리어 디자인을 위해 노력합니다.
        </LastSectionText>
        <LastSectionButton onClick={handleButtonClick}>
          인테리어 컨설팅 신청하기
        </LastSectionButton>
      </LastSectionContent>
    </LastSectionContainer>
  );
};

export default LastSection;
