import styled, { css } from "styled-components";
import Outline from "../../page/myoutline";
import { useLocation } from "react-router-dom";
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
export default function Privacy() {
  const location = useLocation();
  const [selected, setSelected] = useState("개인정보 처리 방침");

  useEffect(() => {
    if (location.pathname.includes("privacy-notice")) {
      setSelected("개인정보 처리 방침");
    }
  }, [location.pathname]);

  return (
    <Outline>
      <Type>
        <TypeOption selected={selected === "개인정보 처리 방침"}>
          개인정보 처리 방침
        </TypeOption>
      </Type>
      <div className="border-t-2 border-gray-200"></div>
      <Content>
        <Title>‘집꾸’ 서비스 개인정보처리방침</Title>
        <div className="px-1">
          ‘집꾸’ 서비스(이하 ‘회사’)는 이용자의 개인정보를 중요시하며, “개인정보
          보호법” 등 관련 법령을 준수하고 있습니다. 본 개인정보처리방침은
          이용자가 제공한 개인정보가 어떻게 수집, 이용, 보호되는지에 대해
          설명합니다.
        </div>
        <Title>제1조 (개인정보의 수집 항목 및 방법)</Title>
        <div className="px-1">
          수집하는 개인정보 항목
          <br /> 필수항목: 로그인, 서비스 제공을 위해 필요한 정보(예: 이름,
          이메일 주소) <br />
          선택항목 : 맞춤형 서비스 제공을 위한 추가 정보(예: 선호 인테리어
          스타일, 자취 관련 고민.경험) <br />
          자동 수집 정보 : 서비스 이용 과정에서 자동으로 생성되어 수집되는 정보
          (예: IP 주소, 방문 기록, 이용 로그)
        </div>
        <Title>제2조 (개인정보의 수집 및 이용 목적)</Title>
        <div className="px-1">
          회사는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다:
        </div>
        <div className="px-2">
          1. 서비스 제공: 자취레터, 공유레터, AI 인테리어 컨설팅 등의 서비스
          제공 및 관리 <br />
          2. 서비스 개선: 서비스 품질 향상, 통계 분석 및 맞춤형 서비스 제공
        </div>
        <Title>제3조 (개인정보의 보유 및 이용 기간)</Title>
        <div className="px-1">1. 보유 기간</div>
        <div className="px-2">
          원칙적으로, 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
          지체 없이 파기합니다. 단, 법령에 따라 일정 기간 보관해야 하는 경우에는
          그에 따릅니다.
        </div>
        <Title>제4조 (이용자 및 법정대리인의 권리와 그 행사 방법)</Title>
        <div className="px-1">
          1. 이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리
          정지를 요청할 수 있습니다. <br />
          2. 이용자는 회원 가입 시 동의한 개인정보의 수집 및 이용, 제공에 대한
          동의를 철회할 수 있습니다.
          <br /> 3. 이용자의 권리 행사는 개인정보 보호법에 따라 서면, 이메일
          등을 통해 요청할 수 있으며, 회사는 이에 대해 지체 없이
          조치하겠습니다. 
        </div>
      </Content>
    </Outline>
  );
}
