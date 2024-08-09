import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 120px 10px 10px;
  padding: 10px;
  font-family: Freesentation;
`;
const Profile = styled.div`
  width: 300px;
  height: 600px;
  background-color: rgba(239, 214, 187, 0.1);
  padding: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  justify-content: space-evenly;
`;
const Sort = styled.div`
  font-family: Freesentation;
  font-size: 18px;
  font-weight: 500;
  line-height: 23.38px;
  text-align: left;
  width: 300px;
  padding-top: 0px;
`;
const Item = styled.div`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 20px;
  ${(props) =>
    props.selected &&
    css`
      border-left: 4px solid rgba(202, 144, 75, 0.8);
    `};
`;

const Board = styled.div`
  width: 1000px;
  height: 600px;
  background: rgba(239, 214, 187, 0.1);
  padding: 40px;
  margin-left: -10px;
`;

export default function Outline({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({
    user_id: 1,
    user_name: "",
    email: "",
    created_at: "",
  });

  useEffect(() => {
    if (location.pathname === "/mypage") {
      setSelected("내 프로젝트");
    } else if (location.pathname === "/myscrap/homeletter") {
      setSelected("스크랩");
    } else if (location.pathname === "/myscrap/shareletter") {
      setSelected("스크랩");
    }
  }, [location.pathname]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(
          `https://2e11c037-d78e-48a6-af32-ce12efc7101e.mock.pstmn.io/user/profile/{user_id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProfile();
  }, []);

  const handleClick = (path, item) => {
    setSelected(item);
    navigate(path);
  };
  return (
    <Wrapper>
      <Profile>
        <ProfileBox>
          <div className="text-xl">My Profile</div>
          <div className="w-48 h-40 rounded-full bg-white"></div>
          <div className="text-lg">{formData.user_name}</div>
          <div className="text-lg">{formData.email}</div>
          <div className="border-t-2 border-gray-200 w-72"></div>
        </ProfileBox>
        <Sort>
          <Item
            onClick={() => handleClick("/mypage", "내 프로젝트")}
            selected={selected === "내 프로젝트"}
          >
            내 프로젝트
          </Item>
          <Item
            onClick={() => handleClick("/myscrap/homeletter", "스크랩")}
            selected={selected === "스크랩"}
          >
            스크랩
          </Item>
        </Sort>
      </Profile>
      <Board>{children}</Board>
    </Wrapper>
  );
}
