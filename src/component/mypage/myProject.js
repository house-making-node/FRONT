import { useNavigate } from "react-router-dom";
import Outline from "../../page/myoutline";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import pjtheme from "../img/projectTheme.png";

const Type = styled.div`
  width: 50px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  margin-bottom: -2px;
`;

const TypeOption = styled.div`
  padding: 10px 20px;
  position: relative;
  z-index: 1;
  border-bottom: 2px solid rgba(202, 144, 75, 0.41);
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
  width: 300px;
  height: 380px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StepSign = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.38px;
  margin: 10px 25px;
  padding: 5px;
  color: #000000;
  text-align: center;
  z-index: 1;
`;

const RoomType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Choice = styled.div`
  width: 240px;
  margin-top: 25px;
  margin-left: -10px;
  border-bottom: 2px solid rgba(217, 217, 217, 1);
  font-weight: bold;
  line-height: 23.38px;
  font-size: 14px;
  text-align: center;
  color: rgba(202, 144, 75, 0.56);
  cursor: pointer;
`;

export default function MyProject() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    fetchProjectStatus();
  }, []);

  const fetchProjectStatus = async () => {
    try {
      const consultingIds = [1];
      console.log("Fetching project status for consultingIds:", consultingIds);

      const fetchedProjects = await Promise.all(
        consultingIds.map(async (consulting_id) => {
          console.log(`Requesting status for consulting_id: ${consulting_id}`);

          const response = await axios.get(
            `http://3.36.240.5:3000/user/consulting/${consulting_id}`,
            {
              headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache",
                Expires: "0",
              },
            }
          );

          console.log(
            `Response for consulting_id ${consulting_id}:`,
            response.data
          );

          // response.data.result 에서 데이터를 추출하여 반환
          return {
            ...response.data.result, // result 객체에서 데이터를 추출하여 사용
            consulting_id: consulting_id,
            themeImage: pjtheme,
            signmessage: "좋아하는 분위기를 선택해주세요",
          };
        })
      );

      console.log("Fetched projects:", fetchedProjects);
      setUserProjects(fetchedProjects);
    } catch (error) {
      console.error("프로젝트 상태를 불러오는 중 에러 발생:", error);
    }
  };

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Outline>
      <Type>
        <TypeOption selected={selected === "All"}>All</TypeOption>
      </Type>
      <div className="border-t-2 border-gray-200"></div>
      <div className="flex row text-lg font-medium p-4 ml-6">
        My Projects <ProjectCount>{userProjects.length}</ProjectCount>
      </div>
      <ItemWrapper>
        {userProjects.map((project, index) => (
          <ItemBox key={index}>
            <StepSign>{project.status || "단계 정보 없음"}</StepSign>
            <img
              src={project.themeImage}
              alt="Project Theme"
              className="w-64 h-48 m-2 bg-mypageGray"
            />
            <div className="border-t-2 border-gray-200 w-72"></div>
            <RoomType>
              <div className="text-black opacity-30 p-2">
                {project.type || "유형 정보 없음"}
              </div>
              <div className="text-xl m-3">
                {project.name || "프로젝트 이름 없음"}
              </div>
              <Choice onClick={() => handleClick("/")}>
                {project.signmessage || "메시지 없음"}
              </Choice>
            </RoomType>
          </ItemBox>
        ))}
      </ItemWrapper>
    </Outline>
  );
}
