import styled, { css } from "styled-components";
import Outline from "../../page/myoutline";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../api/UserContext";

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

const ProjectCount = styled.div`
  color: rgba(202, 144, 75, 0.56);
  font-size: 14px;
  margin-left: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: center;
  width: 220px;
  height: 30px;
  border-radius: 10px;
  bottom: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const TitleText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`;

export default function Myscrap() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("자취레터");
  const [scraps, setScraps] = useState([]);
  const [userInfo] = useUser();

  useEffect(() => {
    if (location.pathname.includes("shareletter")) {
      setSelected("공유레터");
    } else {
      setSelected("자취레터");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (userInfo && userInfo.user_id) {
      fetchScrapData(userInfo.user_id, selected);
    }
  }, [userInfo, selected]);

  const fetchScrapData = async (user_id, type) => {
    try {
      let response;
      let scrapsData = [];

      if (type === "공유레터") {
        response = await axios.get(
          `http://3.36.240.5:3000/user/${user_id}/share_letters/scraps`
        );
        scrapsData = response.data.result["Scrap Letters "]; // 공유레터 구조에 맞게 처리
      } else {
        response = await axios.get(
          `http://3.36.240.5:3000/user/home_letters/scrap/1`
        );
        scrapsData = response.data.result; // 자취레터는 바로 result 배열에 접근
      }

      console.log("API Response:", response.data);
      console.log("Scraps Data:", scrapsData);
      setScraps(scrapsData);
    } catch (error) {
      console.error("스크랩 데이터를 가져오는 중 에러 발생:", error);
    }
  };

  const getBasePath = (type) => {
    return type === "자취레터" ? "homeletter" : "shareletter";
  };

  const handleTypeClick = (type) => {
    setSelected(type);
    navigate(`/myscrap/${getBasePath(type)}`);
  };

  const handleClick = (id) => {
    navigate(`/scrap/${getBasePath(selected)}/${id}`);
  };

  return (
    <Outline>
      <Type>
        <TypeOption
          selected={selected === "자취레터"}
          onClick={() => handleTypeClick("자취레터")}
        >
          자취레터
        </TypeOption>
        <TypeOption
          selected={selected === "공유레터"}
          onClick={() => handleTypeClick("공유레터")}
        >
          공유레터
        </TypeOption>
      </Type>
      <div className="border-t-2 border-gray-200"></div>
      <div className="flex row text-lg font-medium p-4 ml-10">
        All <ProjectCount>{scraps.length}</ProjectCount>
      </div>
      <ItemWrapper>
        {scraps.length > 0 ? (
          scraps.map((scrap) => (
            <ItemBox
              key={scrap.letter_id}
              onClick={() => handleClick(scrap.letter_id)}
            >
              <Title>
                <TitleText>{scrap.title}</TitleText>
              </Title>
              <img
                src={scrap.s3_url || "default-image-url.jpg"} // s3_url 사용, null인 경우 기본 이미지 표시
                className="w-64 h-44 m-2 bg-mypageGray"
                alt={scrap.title}
              />
            </ItemBox>
          ))
        ) : (
          <div>No scraps found</div>
        )}
      </ItemWrapper>
    </Outline>
  );
}
