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
    </Outline>
  );
}
