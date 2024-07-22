import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 120px;
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

const NavItemWithDropdown = styled(NavItem)`
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 105%;
    background-color: #ca904b;
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: scaleX(
      ${(props) => (props.selected || props.isHovered ? 1 : 0)}
    );
    transition: transform 0.3s ease;
  }
`;

const SubNav = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  min-width: 300px;
  flex-direction: row;
  justify-content: center;
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
  const [visibleSubNav, setVisibleSubNav] = useState(null);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleNavItemClick = (path, item) => {
    setSelectedNavItem(item);
    navigate(path);
  };

  const handleMouseEnter = (item) => {
    setVisibleSubNav(item);
    setHoveredNavItem(item);
  };

  const handleMouseLeave = () => {
    setVisibleSubNav(null);
    setHoveredNavItem(null);
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
        <NavItemWithDropdown
          selected={
            selectedNavItem === "자취레터" || selectedNavItem === "공유레터"
          }
          onMouseEnter={() => handleMouseEnter("매거진")}
          onMouseLeave={handleMouseLeave}
          isHovered={hoveredNavItem === "매거진"}
        >
          매거진
          <SubNav isVisible={visibleSubNav === "매거진"}>
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
        </NavItemWithDropdown>
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
        <NavItemWithDropdown
          selected={
            selectedNavItem === "FAQ 게시판" ||
            selectedNavItem === "1대1 문의하기"
          }
          onMouseEnter={() => handleMouseEnter("문의")}
          onMouseLeave={handleMouseLeave}
          isHovered={hoveredNavItem === "문의"}
        >
          문의
          <SubNav rightAligned isVisible={visibleSubNav === "문의"}>
            <SubItem onClick={() => handleNavItemClick("/faq", "FAQ 게시판")}>
              FAQ 게시판
            </SubItem>
            <SubItem
              onClick={() => handleNavItemClick("/question", "1대1 문의하기")}
            >
              1대1 문의하기
            </SubItem>
          </SubNav>
        </NavItemWithDropdown>
      </NavItemsContainer>
    </NavbarContainer>
  );
}

export default Navbar;
