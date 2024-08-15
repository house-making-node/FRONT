import styled, { css } from "styled-components";
import Outline from "../../page/myoutline";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Type = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -2px;
  cursor: pointer;
`;
const TypeOption = styled.div`
  padding: 10px 20px;
  margin-left: 50px;
  position: relative;
  z-index: 1;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid rgba(202, 144, 75, 0.41);
    `}
`;
const Content = styled.div`
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 260;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 2px 0px;
`;
export default function Terms() {
  const location = useLocation();
  const [selected, setSelected] = useState("서비스 약관");

  useEffect(() => {
    if (location.pathname.includes("term-of-service")) {
      setSelected("서비스 약관");
    }
  }, [location.pathname]);

  return (
    <Outline>
      <Type>
        <TypeOption selected={selected === "서비스 약관"}>
          서비스 약관
        </TypeOption>
      </Type>
      <div className="border-t-2 border-gray-200"></div>
      <Content>
        <Title>‘집꾸’ 서비스 약관</Title>
        <Title>제1조 (목적)</Title>
        <div className="px-1">
          이 약관은 ‘집꾸’ 서비스(이하 ‘서비스’)를 제공하는 회사(이하 ‘회사’)와
          서비스를 이용하는 고객(이하 ‘이용자’)간의 권리, 의무 및 책임사항, 기타
          필요한 사항을 규정함을 목적으로 합니다.
        </div>
        <Title>제2조 (정의)</Title>
        <div className="px-1">
          1. 서비스 : 회사가 제공하는 자취레터, 공유레터, AI 인테리어 컨설팅 등
          일체의 서비스를 의미합니다.
          <br /> 2. 이용자 : 서비스에 접속하여 이 약관에 따라 서비스를 이용하는
          회원을 의미합니다. <br />
          3. 회원 : 회사와 서비스 이용 계약을 체결하고, 카카오톡 로그인을 통해
          서비스를 이용하는 자를 의미합니다. 
        </div>
        <Title>제3조 (서비스의 제공 및 변경)</Title>
        <div className="px-1">
          1. 회사는 다음과 같은 서비스를 제공합니다 :
          <br />
          자취레터 및 공유레터 발송 서비스, AI 인테리어 컨설팅 서비스, 기타
          회사가 정하는 서비스 
        </div>
        <div className="px-1">
          2. 회사는 서비스의 품질 향상 및 기타 필요하다고 판단되는 경우,
          서비스의 내용을 변경할 수 있습니다. 이 경우, 변경된 내용과 사유를
          명시하여 서비스 이용자에게 통지합니다. 
        </div>
        <Title>제4조 (개인정보의 보호)</Title>
        <div className="px-1">
          1. 회사는 이용자의 개인정보를 보호하기 위해 관련 법령 및 회사의
          개인정보 처리방침을 준수합니다. <br />
          2. 회사는 서비스 제공을 위해 필요한 최소한의 개인정보만을 수집하며,
          수집된 개인정보는 목적 외의 용도로 사용되지 않습니다.
          <br />
          3. 이용자는 언제든지 개인정보 열람 및 수정, 삭제를 요청할 수 있으며,
          회사는 이에 따라 필요한 조치를 취합니다.
        </div>
        <Title>제5조 (서비스 이용)</Title>
        <div className="px-1">
          1. 서비스는 연중무휴, 24시간 제공함을 원칙으로 합니다. 다만, 회사는
          정기 점검, 긴급 상황 등 불가피한 경우 서비스의 전부 또는 일부를 일시
          중지할 수 있습니다. <br />
          2. 서비스 이용에 필요한 최소한의 기술 사양 및 인터넷 접속 환경은
          이용자가 사전에 확인해야 합니다.
        </div>
      </Content>
    </Outline>
  );
}
