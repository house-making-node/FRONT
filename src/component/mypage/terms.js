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
    </Outline>
  );
}
