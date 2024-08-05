// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #ffffff;
//   padding: 20px;
// `;

// const WelcomeBox = styled.div`
//   width: 100%;
//   max-width: 800px;
//   padding: 2rem;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background-color: #ffffff;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
//   text-align: center;
// `;

// const Message = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
//   margin-bottom: 1rem;
//   color: #333333;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end; /* 오른쪽 정렬을 위해 flex-end 사용 */
// `;

// const Button = styled.button`
//   background-color: #d39850;
//   color: #FFFFFF;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #d39850;
//   }
// `;

// const KakaoWelcome = () => {
//   const handleConfirm = () => {
//     // 확인 버튼 클릭 시 처리할 로직
//   };

//   return (
//     <Container>
//       <WelcomeBox>
//         <Message>000님 반가워요! 로그인이 완료 되었어요.</Message>
//         <Message>이제 인테리어 전문가에게 받는 컨설팅 서비스를 이용할 수 있어요.</Message>
//         <ButtonContainer>
//           <Button onClick={handleConfirm}>확인</Button>
//         </ButtonContainer>
//       </WelcomeBox>
//     </Container>
//   );
// };

// export default KakaoWelcome;


//------------------------------------------


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f8f9fa;
// `;

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 1200px;
//   padding: 40px;
//   background-color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
// `;

// const Message = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const SubMessage = styled.div`
//   font-size: 18px;
//   text-align: center;
//   margin-bottom: 40px;
// `;

// const Button = styled.button`
//   background-color: #ca904b;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #b0783f;
//   }
// `;



// const KakaoWelcome = () => {
//   const navigate = useNavigate();

//   const handleConfirm = () => {
//     navigate('/consulting/step1Page');
//   };

//   return (
//     <Container>
//       <Box>
//         <Message>000님 반가워요! 로그인이 완료 되었어요.</Message>
//         <SubMessage>
//           이제 인테리어 전문가에게 받는 컨설팅 서비스를 이용할 수 있어요.
//         </SubMessage>
//         <Button onClick={handleConfirm}>확인</Button>
//       </Box>
//     </Container>
//   );
// };

// export default KakaoWelcome;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative; /* Add this line */
`;

const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubMessage = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  background-color: #ca904b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #b0783f;
  }
`;

const KakaoWelcome = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/consulting/step1Page');
  };

  return (
    <Container>
      <Box>
        <Message>000님 반가워요! 로그인이 완료 되었어요.</Message>
        <SubMessage>
          이제 인테리어 전문가에게 받는 컨설팅 서비스를 이용할 수 있어요.
        </SubMessage>
        <ButtonContainer>
          <Button onClick={handleConfirm}>확인</Button>
        </ButtonContainer>
      </Box>
    </Container>
  );
};

export default KakaoWelcome;
