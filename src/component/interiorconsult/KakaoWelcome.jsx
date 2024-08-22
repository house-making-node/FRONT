import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';

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
  const [userName, setUserName] = useState(); 

  useEffect(() => {
    
    const userId = Cookies.get('userId');  
    if (userId) {
      setUserName(userId);    
    }
  }, []);

  const handleConfirm = () => {
    navigate('/consulting/step1Page');
  };

  return (
    <Container>
      <Box>
        <Message>박시현님 반가워요! 로그인이 완료 되었어요.</Message>
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
