import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import checkmarkIcon from '../img/checkmark.png';
import jipgguLogo from '../img/logo.png';

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 100px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  font-size: 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;

const AgreementBox = styled.div`
  width: 30%;
  padding: 2rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: ${(props) => (props.checked ? '#000000' : '#999999')};
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const CheckBoxImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #ffeb00;
  color: #3b1e1e;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f9e000;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const KakaoAgreement = () => {
  const navigate = useNavigate();
  const [allChecked, setAllChecked] = useState(false);
  const [personalInfoChecked, setPersonalInfoChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const handleAllChecked = () => {
    const newState = !allChecked;
    setAllChecked(newState);
    setPersonalInfoChecked(newState);
    setTermsChecked(newState);
    setMarketingChecked(newState);
  };

  const handleCheckboxClick = (setAgree) => {
    setAgree((prev) => !prev);
  };

  const handleAgreement = () => {
    if (personalInfoChecked && termsChecked) {
      navigate('/welcome');
    } else {
      alert('필수 항목에 동의해주세요.');
    }
  };

  return (
    <AgreementContainer>
      <Header>
        <Logo src={jipgguLogo} alt="집꾸 로고" />
        <Nav>
          <NavItem href="#">매거진</NavItem>
          <NavItem href="#">인테리어 컨설팅</NavItem>
          <NavItem href="#">로그인</NavItem>
          <NavItem href="#">문의</NavItem>
        </Nav>
      </Header>
      <Title>KaKao</Title>
      <AgreementBox>
        <Section>
        <Logo src={jipgguLogo} alt="집꾸 로고" />
          <CheckBoxContainer onClick={handleAllChecked}>
            <CheckBoxImage
              src={checkmarkIcon}
              alt="checkmark"
              style={{ opacity: allChecked ? 1 : 0.3 }}
            />
            <Text checked={allChecked}>전체 동의하기</Text>
          </CheckBoxContainer>
          <Text>전체동의는 카카오 및 집꾸 서비스 동의를 포함하고 있습니다...</Text>
        </Section>
        <Section>
          <SectionTitle>사용자 계정</SectionTitle>
          <Text>집꾸 서비스 제공을 위해 회원정보와 함께 개인정보가 제공됩니다. 보다 자세한 개인정보 제공 항목은 동의 내용에서 확인하실 수 있습니다. 해당 정보는 동의 철회 또는 서비스 탈퇴 시 지체없이 파기됩니다.</Text>
        </Section>
        <Section>
          <SectionTitle>카카오 동의 항목</SectionTitle>
          <CheckBoxContainer onClick={() => handleCheckboxClick(setPersonalInfoChecked)}>
            <CheckBoxImage
              src={checkmarkIcon}
              alt="checkmark"
              style={{ opacity: personalInfoChecked ? 1 : 0.3 }}
            />
            <Text checked={personalInfoChecked}>[필수] 카카오 개인정보 제3자 제공 동의</Text>
          </CheckBoxContainer>
          <Text>카카오계정(이메일), 프로필 정보(닉네임/프로필 사진)</Text>
        </Section>
        <Section>
          <SectionTitle>집꾸 동의 항목</SectionTitle>
          <CheckBoxContainer onClick={() => handleCheckboxClick(setTermsChecked)}>
            <CheckBoxImage
              src={checkmarkIcon}
              alt="checkmark"
              style={{ opacity: termsChecked ? 1 : 0.3 }}
            />
            <Text checked={termsChecked}>[필수] 서비스 이용 약관</Text>
          </CheckBoxContainer>
          <CheckBoxContainer onClick={() => handleCheckboxClick(setMarketingChecked)}>
            <CheckBoxImage
              src={checkmarkIcon}
              alt="checkmark"
              style={{ opacity: marketingChecked ? 1 : 0.3 }}
            />
            <Text checked={marketingChecked}>[선택] 집꾸의 광고와 마케팅 메시지를 카카오톡으로 받습니다.</Text>
          </CheckBoxContainer>
        </Section>
        <Button onClick={handleAgreement} disabled={!personalInfoChecked || !termsChecked}>
          동의하고 계속하기
        </Button>
      </AgreementBox>
    </AgreementContainer>
  );
};

export default KakaoAgreement;
