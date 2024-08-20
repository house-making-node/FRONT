import styled, { css } from "styled-components";
import Outline from "../../page/myoutline";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../api/UserContext";
import room from '../img/room.png';

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
  flex-wrap: wrap;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 31%;
  margin: 1%;
  box-sizing: border-box;
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
  const [currentPage, setCurrentPage] = useState(1);
  const [scrapsPerPage] = useState(6);
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
        scrapsData = response.data.result["Scrap Letters "];
      } else {
        response = await axios.get(
          `http://3.36.240.5:3000/user/home_letters/scrap/${user_id}`
        );
        scrapsData = response.data.result;
      }

      // 중복된 스크랩 필터링
      const uniqueScraps = scrapsData.filter(
        (scrap, index, self) =>
          index === self.findIndex((t) => t.letter_id === scrap.letter_id)
      );

      console.log("API Response:", response.data);
      console.log("Unique Scraps Data:", uniqueScraps);
      setScraps(uniqueScraps);
    } catch (error) {
      console.error("스크랩 데이터를 가져오는 중 에러 발생:", error);
    }
  };

  const handleClick = (id) => {
    const path =
      selected === "자취레터" ? "home-letter-story" : "share-letter-story";
    navigate(`/${path}/${id}`);
  };
  // 현재 페이지에 해당하는 스크랩 데이터 계산
  const indexOfLastScrap = currentPage * scrapsPerPage;
  const indexOfFirstScrap = indexOfLastScrap - scrapsPerPage;
  const currentScraps = scraps.slice(indexOfFirstScrap, indexOfLastScrap);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(scraps.length / scrapsPerPage);

  return (
    <Outline
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    >
      <Type>
        <TypeOption
          selected={selected === "자취레터"}
          onClick={() => {
            setSelected("자취레터");
            navigate("/myscrap/homeletter");
          }}
        >
          자취레터
        </TypeOption>
        <TypeOption
          selected={selected === "공유레터"}
          onClick={() => {
            setSelected("공유레터");
            navigate("/myscrap/shareletter");
          }}
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
                src={scrap.s3_url || "default-image-url.jpg"} // s3_url 사용, null인 경우 기본 이미지 표시 -> 넣어야됨
                className="w-64 h-44 m-2 bg-mypageGray"
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
