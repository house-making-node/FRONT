import styled, { css } from "styled-components";
import Outline from "../../page/myoutline";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
  margin: 10px;
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

const Myscrap = ({ user_id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("자취레터");
  const [shareScraps, setShareScraps] = useState([]);
  const [homeScraps, setHomeScraps] = useState([]);
  const [scraps, setScraps] = useState([]);

  const getShareScrap = async (user_id) => {
    try {
      const getScrap_res = await axios.get(
        `http://3.36.240.5:3000/user/${user_id}/share_letters/scraps`
      );
      const scrapsData = getScrap_res.data.result["Scrap Letters"];
      console.log("공유레터 API 응답:", getScrap_res.data); // 전체 응답 출력
      console.log("공유레터 데이터:", scrapsData);
      setShareScraps(scrapsData);
    } catch (error) {
      console.error(
        "공유레터 에러",
        error.response ? error.response.data : error
      );
    }
  };

  const getHomeScrap = async (user_id) => {
    try {
      const getScrap_res = await axios.get(
        `http://3.36.240.5:3000/user/home_letters/scrap/${user_id}`
      );
      const scrapsData = getScrap_res.data.result["Scrap Letters"];
      console.log("자취레터 API 응답:", getScrap_res.data); // 전체 응답 출력
      console.log("자취레터 데이터:", scrapsData);
      setHomeScraps(scrapsData);
    } catch (error) {
      console.error(
        "자취레터 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    if (user_id) {
      getShareScrap(user_id);
      getHomeScrap(user_id);
    }
  }, [user_id]);

  useEffect(() => {
    console.log("현재 선택된 유형:", selected);
    console.log("공유레터 스크랩:", shareScraps);
    console.log("자취레터 스크랩:", homeScraps);

    if (selected === "공유레터") {
      setScraps(shareScraps);
    } else {
      setScraps(homeScraps);
    }
    console.log("현재 선택된 스크랩 데이터:", scraps);
  }, [selected, shareScraps, homeScraps]);

  useEffect(() => {
    if (location.pathname.includes("shareletter")) {
      setSelected("공유레터");
    } else {
      setSelected("자취레터");
    }
  }, [location.pathname]);

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
        {scraps.map((scrap) => (
          <ItemBox
            key={scrap.scrap_id}
            onClick={() => handleClick(scrap.letter_id)}
          >
            <Title>
              <TitleText>{scrap.title}</TitleText>
            </Title>
            <img
              src={`https://s3.amazonaws.com/your-bucket-name/${scrap.s3_key}`}
              className="w-64 h-44 m-2 bg-mypageGray"
              alt={scrap.title}
            />
          </ItemBox>
        ))}
      </ItemWrapper>
    </Outline>
  );
};

export default Myscrap;
