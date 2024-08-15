import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../header/Navbar";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 140px; /* Navbar 높이 + 여백 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  min-height: 70vh; /* 전체 화면 높이 */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px; /* Box와의 간격 */
  align-self: flex-start; /* 왼쪽 정렬 */
  margin-left: calc((100vw - 1078px) / 2); /* Box와 맞추기 위해 왼쪽 여백 설정*/
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  color: rgba(202, 144, 75, 0.56); /* #CA904B8F 56% */
`;

const StepBoxes = styled.div`
  display: flex;
  margin-left: 37px; /* Title과의 간격 */
  margin-top: 15px;
`;

const StepBox = styled.div`
  width: 111px;
  height: 21px;
  background-color: ${(props) =>
    props.active ? "#CA904B69" : "#E0E0E0"}; /* 활성화된 StepBox 배경색 설정 */
  color: #c7b199;
  margin-left: ${(props) =>
    props.index > 0 ? "30px" : "0"}; /* 첫 번째 StepBox는 간격 없음 */
`;

const Box = styled.div`
  width: 1078px;
  height: 637px;
  border-radius: 15px;
  border: 1px solid #b0b0b0;
  padding: 10px;
  margin-bottom: 20px; /* 버튼과의 간격 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수 중앙 정렬 */
  text-align: center; /* 가로 중앙 정렬 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼을 양 끝에 배치 */
  width: 1078px; /* Box의 너비와 동일하게 설정 */
  margin-top: 30px; /* 버튼과 Box 간의 간격 추가 */
`;

const StyledButton = styled.button`
  width: 150px; /* 버튼의 너비 설정 */
  height: 55px; /* 버튼의 높이 설정 */
  border-radius: 6px; /* 버튼의 모서리 둥글게 설정 */
  background: ${(props) =>
    props.disabled
      ? "#d0d0d0"
      : "#ca904b69"}; /* 비활성화 상태일 때 회색 배경 */
  font-size: 24px; /* 글씨 크기 설정 */
  font-weight: 400; /* 글씨 두께 설정 */
  line-height: 28.06px; /* 글씨 줄 높이 설정 */
  color: #ffffff; /* 글씨 색상 설정 */
  border: none; /* 버튼의 테두리 제거 */
  cursor: ${(props) =>
    props.disabled
      ? "not-allowed"
      : "pointer"}; /* 비활성화 상태일 때 커서 변경 */
`;

const Label = styled.label`
  width: 370px;
  height: 42px;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: center;
  margin-bottom: 40px; /* 간격을 더 크게 설정 */
`;

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 90px; /* OptionBox 간의 간격을 더 벌림 */
  margin-top: 40px; /* Label과 OptionBox 간의 간격 추가 */
  margin-bottom: 40px; /* OptionBox와 다음 Label 간의 간격 추가 */
`;

const OptionBox = styled.label`
  width: 182.32px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c7b19980;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 2px #78440640;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  padding: 10px;

  input[type="radio"] {
    display: none;
  }

  span {
    font-size: 18px;
    font-weight: 260;
    color: #0000008f;
    text-align: center;
  }
`;

const HiddenRadio = styled.input`
  display: none;

  &:checked + ${OptionBox} {
    border-color: #ca904b;
    border-radius: 10px;
  }
`;

function Step1Page() {
  const navigate = useNavigate();
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [userId, setUserId] = useState(null);
  const [consultingId, setConsultingId] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // const storedUserId = localStorage.getItem("userId");
    const storedUserId = 1; // userId를 1로 임시 설정
    const storedUserName = localStorage.getItem("userName");
    if (storedUserId) {
      setUserId(parseInt(storedUserId));
    }
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      // userId가 없는 경우 처리
      console.error("userId가 로컬 스토리지에 없습니다.");
      // 필요하다면 로그인 페이지로 리다이렉트 등의 처리를 할 수 있습니다.
      // navigate("/login");
    }
  }, []);

  const handleOptionChange = () => {
    const selectedPyeong = document.querySelector('input[name="pyeong"]:checked');
    const selectedRooms = document.querySelector('input[name="rooms"]:checked');
    setIsNextEnabled(!!selectedPyeong && !!selectedRooms);
  };

  const handleNext = async () => {
    const selectedPyeong = document.querySelector('input[name="pyeong"]:checked');
    const selectedRooms = document.querySelector('input[name="rooms"]:checked');

    if (!selectedPyeong || !selectedRooms) {
      alert("모든 옵션을 선택해 주세요.");
      return;
    }

    try {
      const houseSizeResponse = await axios.post("http://3.36.240.5:3000/consulting/requirements/house_size", {
        user_id: userId,
        house_size: selectedPyeong.value
      });

      if (houseSizeResponse.data.isSuccess) {
        const consultingData = houseSizeResponse.data.result;
        setConsultingId(consultingData.consulting_id);
        localStorage.setItem("consultingId", consultingData.consulting_id);
        localStorage.setItem("houseSize", consultingData.house_size);

        const roomNumResponse = await axios.patch("http://3.36.240.5:3000/consulting/requirements/room_num", {
          consulting_id: consultingData.consulting_id,
          room_num: selectedRooms.value
        });

        if (roomNumResponse.data.isSuccess) {
          const updatedConsultingData = roomNumResponse.data.result;
          localStorage.setItem("roomNum", updatedConsultingData.room_num);
          
          navigate("/consulting/step2Page");
        } else {
          alert("방 개수 저장 중 오류가 발생했습니다.");
        }
      } else {
        alert("집 평수 저장 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      alert("서버 통신 중 오류가 발생했습니다.");
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <Container>
        <TitleContainer>
          <Title>STEP 01</Title>
          <StepBoxes>
            {[1, 2, 3, 4].map((step, index) => (
              <StepBox key={index} active={step === 1} index={index} />
            ))}
          </StepBoxes>
        </TitleContainer>
        <Box>
          <form id="step1Form">
            <div className="option">
              <Label id="pyeongLabel">
                {userName ? `${userName}님` : ""}의 집 평수를 선택해 주세요.
              </Label>
            </div>
            <OptionContainer>
              <HiddenRadio
                type="radio"
                id="option1"
                name="pyeong"
                value="8평 ~ 10평"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option1">
                <span>8평 ~ 10평</span>
              </OptionBox>
              <HiddenRadio
                type="radio"
                id="option2"
                name="pyeong"
                value="10평 ~ 15평"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option2">
                <span>10평 ~ 15평</span>
              </OptionBox>
              <HiddenRadio
                type="radio"
                id="option3"
                name="pyeong"
                value="기타"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option3">
                <span>기타</span>
              </OptionBox>
            </OptionContainer>
            <div className="option">
              <Label id="roomsLabel">
                {userName ? `${userName}님` : ""}의 집 방 개수를 선택해 주세요.
              </Label>
            </div>
            <OptionContainer>
              <HiddenRadio
                type="radio"
                id="option4"
                name="rooms"
                value="1개"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option4">
                <span>1개</span>
              </OptionBox>
              <HiddenRadio
                type="radio"
                id="option5"
                name="rooms"
                value="2개"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option5">
                <span>2개</span>
              </OptionBox>
              <HiddenRadio
                type="radio"
                id="option6"
                name="rooms"
                value="기타"
                onChange={handleOptionChange}
              />
              <OptionBox htmlFor="option6">
                <span>기타</span>
              </OptionBox>
            </OptionContainer>
          </form>
        </Box>
        <ButtonContainer>
          <StyledButton type="button" onClick={handleExit}>
            나가기
          </StyledButton>
          <StyledButton
            type="button"
            onClick={handleNext}
            disabled={!isNextEnabled}
          >
            다음
          </StyledButton>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default Step1Page;