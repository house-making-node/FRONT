import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";
import profile from "../component/img/profile.jpeg";
import { useUser } from "../component/api/UserContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 120px 10px 10px;
  padding: 10px;
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
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 10px;
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
  padding: 30px;
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
  const [userInfo, setUserInfo] = useUser();
  const [profileImg, setProfileImg] = useState(profile);

  useEffect(() => {
    const pathMap = {
      "/mypage": "내 프로젝트",
      "/myscrap/homeletter": "스크랩",
      "/myscrap/shareletter": "스크랩",
      "/term-of-service": "서비스 약관",
      "/privacy-notice": "개인정보 처리 방침",
    };
    setSelected(pathMap[location.pathname]);
  }, [location.pathname]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        console.log("Requesting profile for user_id:", formData.user_id);
        const response = await axios.get(
          `http://3.36.240.5:3000/user/profile/${formData.user_id}`
        );
        console.log("Response data:", response.data);
        setFormData(response.data.data);
        setUserInfo(response.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const getProfileImg = async () => {
      try {
        const imgResponse = await axios.get(
          `http://3.36.240.5:3000/user/profile/image/${formData.user_id}`
        );
        if (
          imgResponse.data.isSuccess &&
          imgResponse.data.data.profile_image_url
        ) {
          setProfileImg(imgResponse.data.data.profile_image_url);
        }
      } catch (error) {
        console.error("사진에러", error);
      }
    };
    getProfile();
    getProfileImg();
  }, [formData.user_id, setUserInfo]);

  const handleClick = (path, item) => {
    setSelected(item);
    navigate(path);
  };

  return (
    <Wrapper>
      <Profile>
        <ProfileBox>
          <div className="text-xl">My Profile</div>
          <img
            src={profileImg}
            className="w-48 h-40 rounded-full bg-white"
            alt="Profile"
          />
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
          <Item
            onClick={() => handleClick("/term-of-service", "서비스 약관")}
            selected={selected === "서비스 약관"}
          >
            서비스 약관
          </Item>
          <Item
            onClick={() => handleClick("/privacy-notice", "개인정보 처리 방침")}
            selected={selected === "개인정보 처리 방침"}
          >
            개인정보 처리 방침
          </Item>
        </Sort>
      </Profile>
      <Board>{children}</Board>
    </Wrapper>
  );
}
