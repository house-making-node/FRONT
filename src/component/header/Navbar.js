import styled from "styled-components";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 120px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  width: 100vw;
  z-index: 1000;
  //font-family: Freesentation;
`;
const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 50px 0px 20px;
`;
const Logo = styled.img`
  cursor: pointer;
  width: 138px;
  height: 94px;
`;
const NavItem = styled.div`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#ca904b" : "black")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ca904b;
  }
`;
const DropDownContainer = styled.div`
  position: absolute;
  top: 65%;
  left: ${(props) => (props.alignRight ? "auto" : "25%")};
  right: ${(props) => (props.alignRight ? "0" : "auto")};
  width: auto;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  border-radius: 8px;
`;

const DropDownItem = styled.span`
  padding: 10px 20px;
  margin: 0 10px;
  color: black;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;

  &:hover {
    background-color: #f0f0f0;
    color: #ca904b;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const handleMouseEnter = (item) => {
    setSelected(item);
    setDropDownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropDownVisible(false);
  };

  const handleClick = (path, item) => {
    setSelected(item);
    setDropDownVisible(false);
    navigate(path);
  };

  return (
    <Nav>
      <NavItemContainer>
        <Logo
          src={logo}
          alt="Logo"
          onClick={() => {
            setSelected("");
            navigate("/");
          }}
        />
        <NavItem
          selected={selected === "자취레터" || selected === "공유레터"}
          onMouseEnter={() => handleMouseEnter("매거진")}
          onMouseLeave={handleMouseLeave}
        >
          매거진
        </NavItem>
        <NavItem
          selected={selected === "인테리어 컨설팅"}
          onClick={() => handleClick("/consulting", "인테리어 컨설팅")}
        >
          인테리어 컨설팅
        </NavItem>
        <NavItem
          selected={selected === "로그인"}
          onClick={() => handleClick("/login", "로그인")}
        >
          로그인
        </NavItem>
        <NavItem
          selected={
            selected === "FAQ 게시판" ||
            selected === "1대1 문의하기" ||
            selected === "마이페이지"
          }
          onMouseEnter={() => handleMouseEnter("문의")}
          onMouseLeave={handleMouseLeave}
        >
          문의
        </NavItem>
      </NavItemContainer>

      <DropDownContainer
        visible={selected === "매거진" && dropDownVisible}
        onMouseEnter={() => setDropDownVisible(true)}
        onMouseLeave={handleMouseLeave}
        alignRight={false}
      >
        <DropDownItem onClick={() => handleClick("/homeletter", "자취레터")}>
          자취레터
        </DropDownItem>
        <DropDownItem onClick={() => handleClick("/shareletter", "공유레터")}>
          공유레터
        </DropDownItem>
      </DropDownContainer>
      <DropDownContainer
        visible={selected === "문의" && dropDownVisible}
        onMouseEnter={() => setDropDownVisible(true)}
        onMouseLeave={handleMouseLeave}
        alignRight={true}
      >
        <DropDownItem onClick={() => handleClick("/faq", "FAQ 게시판")}>
          FAQ 게시판
        </DropDownItem>
        <DropDownItem onClick={() => handleClick("/question", "1대1 문의하기")}>
          1대1 문의하기
        </DropDownItem>
        <DropDownItem onClick={() => handleClick("/mypage", "마이페이지")}>
          마이페이지
        </DropDownItem>
      </DropDownContainer>
    </Nav>
  );
}
