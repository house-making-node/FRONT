import React, { useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"; // axios 임포트

const Container = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  align-self: flex-start;
  margin-left: calc((100vw - 1078px) / 2);
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 46px;
  color: rgba(202, 144, 75, 0.56);
`;

const StepBoxes = styled.div`
  display: flex;
  margin-left: 37px;
  margin-top: 15px;
`;

const StepBox = styled.div`
  width: 111px;
  height: 21px;
  background-color: ${(props) => (props.active ? "#CA904B69" : "#E0E0E0")};
  color: #c7b199;
  margin-left: ${(props) => (props.index > 0 ? "30px" : "0")};
`;

const Box = styled.div`
  width: 1078px;
  height: 637px;
  border-radius: 15px;
  border: 1px solid #b0b0b0;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 700px;
  height: 29px;
  font-size: 20px;
  font-weight: 400;
  line-height: 29.23px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  padding: 15px;
  width: 740px;
  height: 154px;
  border: 1px solid #a4a4a4;
  font-size: 20px;
  line-height: 29.23px;
  text-align: left;
  color: #000000;
  &::placeholder {
    font-size: 20px !important;
    line-height: 29.23px;
    text-align: left;
    color: #d9d9d9c2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1078px;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 55px;
  border-radius: 6px;
  background: ${(props) => (props.disabled ? "#d3d3d3" : "#ca904b69")};
  font-size: 24px;
  font-weight: 400;
  line-height: 23.38px;
  color: #ffffff;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Step4Page() {
  const navigate = useNavigate();
  const { consulting_id: paramConsultingId } = useParams(); // URL에서 consulting_id를 가져옴
  const [interiorConcern, setInteriorConcern] = useState("");
  const [consultingId, setConsultingId] = useState(paramConsultingId || null);
  const [userName, setUserName] = useState("박시현");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (paramConsultingId) {
      setConsultingId(paramConsultingId);
    } else {
      console.error("consultingId가 URL에 없습니다.");
    }
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [paramConsultingId]);

  const handleTextChange = (event) => {
    setInteriorConcern(event.target.value);
  };

  const handleSubmit = async () => {
    if (!interiorConcern.trim()) {
      alert("고민 내용을 입력해 주세요.");
      return;
    }

    const requestBody = {
      consulting_id: consultingId,
      concern: interiorConcern,
    };

    try {
      const response = await axios.patch(
        "http://3.36.240.5:3000/consulting/requirements/concern",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.isSuccess) {
        console.log("요구사항 저장 성공:", data.result);
        navigate(`/consulting/${consultingId}/consultLoading`);
      } else {
        alert("요구사항 저장 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      alert("서버 통신 중 오류가 발생했습니다.");
    }
  };

  const handlePrevious = () => {
    navigate(`/consulting/${consultingId}/step3`);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <TitleContainer>
          <Title>STEP 04</Title>
          <StepBoxes>
            {[1, 2, 3, 4].map((step, index) => (
              <StepBox key={index} active={step === 4} index={index} />
            ))}
          </StepBoxes>
        </TitleContainer>
        <Box>
          <form id="step4Form">
            <Option>
              <Label id="finalLabel">
                <span id="userNameFinal">{userName}</span>님, 가지고 있는
                인테리어 관련 고민을 자유롭게 작성해 주세요.
              </Label>
              <TextArea
                id="interiorConcern"
                placeholder="여기를 클릭해 주세요"
                onChange={handleTextChange}
                value={interiorConcern}
              />
            </Option>
          </form>
        </Box>
        <ButtonContainer>
          <StyledButton type="button" onClick={handlePrevious}>
            이전
          </StyledButton>
          <StyledButton
            type="button"
            onClick={handleSubmit}
            disabled={!interiorConcern.trim()}
          >
            제출하기
          </StyledButton>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default Step4Page;
