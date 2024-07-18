import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px;
  width: 100vw;
  z-index: 1000;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 138px;
  height: 94px;
`;

const NavItem = styled.span`
  margin: 0 2rem;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => (props.selected ? "#CA904B" : "black")};
`;

const SubNav = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
  list-style-type: none;
  padding: 0;
  margin: 5px 0;
  min-width: 300px;
  justify-content: center;
  font-weight: 400;
  font-size: 10px;
  ${NavItem}:hover & {
    display: flex;
    flex-direction: row;
  }
  right: ${(props) => (props.rightAligned ? "0" : "auto")};
  left: ${(props) => (props.rightAligned ? "auto" : "0")};
`;

const SubItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 20px;
  align-items: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function Navbar() {
  const navigate = useNavigate();
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (path, item) => {
    setSelectedNavItem(item);
    navigate(path);
  };

  return (
    <NavbarContainer>
      <Logo
        src={logo}
        alt="Logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <NavItemsContainer>
        <NavItem
          selected={selectedNavItem === "매거진"}
          onClick={() => setSelectedNavItem("매거진")}
        >
          매거진
          <SubNav>
            <SubItem
              onClick={() => handleNavItemClick("/homeletter", "자취레터")}
            >
              자취레터
            </SubItem>
            <SubItem
              onClick={() => handleNavItemClick("/shareletter", "공유레터")}
            >
              공유레터
            </SubItem>
          </SubNav>
        </NavItem>
        <NavItem
          selected={selectedNavItem === "인테리어 컨설팅"}
          onClick={() => handleNavItemClick("/consulting", "인테리어 컨설팅")}
        >
          인테리어 컨설팅
        </NavItem>
      </NavItemsContainer>
      <NavItemsContainer>
        <NavItem
          selected={selectedNavItem === "로그인"}
          onClick={() => handleNavItemClick("/login", "로그인")}
        >
          로그인
        </NavItem>
        <NavItem
          selected={selectedNavItem === "문의"}
          onClick={() => setSelectedNavItem("문의")}
        >
          문의
          <SubNav rightAligned>
            <SubItem onClick={() => handleNavItemClick("/faq", "문의")}>
              FAQ 게시판
            </SubItem>
            <SubItem onClick={() => handleNavItemClick("/question", "문의")}>
              1대1 문의하기
            </SubItem>
          </SubNav>
        </NavItem>
      </NavItemsContainer>
    </NavbarContainer>
  );
}

export default Navbar;
