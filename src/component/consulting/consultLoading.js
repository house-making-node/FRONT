import React, { useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
`;

const Box = styled.div`
  width: 1155px;
  height: 226px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  color: #ffffff;
  box-shadow: 0px 4px 7.4px 0px #00000040;
`;

const BoxContent = styled.div`
  font-size: 20px;
  font-weight: 260;
  line-height: 23.38px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 81px;
  height: 50px;
  border-radius: 6px;
  border: none;
  color: white;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#CA904B69")};
  margin-bottom: 10px;
  margin-right: 40px;
  font-size: 18px;
  font-weight: 330;
  line-height: 21.04px;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const LoadingIcon = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 48px;
  height: 48px;
  border: 4px solid #ccc;
  border-top: 4px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Step5Page() {
  const navigate = useNavigate();
  const { consulting_id: paramConsultingId } = useParams(); // URL에서 consulting_id를 가져옴
  const [consultingId, setConsultingId] = useState(paramConsultingId || null);
  const [status, setStatus] = useState("답변 대기 중");
  const [gptResponse, setGptResponse] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const saveGptResponse = async (consultingId) => {
    try {
      const response = await axios.post(
        "http://3.36.240.5:3000/consulting/gpt_request",
        {
          consulting_id: consultingId,
        }
      );
      console.log(response.data);

      if (response.data.isSuccess) {
        setStatus("답변 완료");
        const gptResponseData = response.data.result.gpt_response;
        setIsButtonEnabled(true);
        setGptResponse(gptResponseData);
      } else {
        console.log("응답이 성공적이지 않음:", response.data.isSuccess);
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  useEffect(() => {
    const updateConsultingStatus = async () => {
      try {
        if (paramConsultingId) {
          setConsultingId(paramConsultingId);
          await saveGptResponse(paramConsultingId); // gpt 답변 요청
        } else {
          console.error("consultingId가 URL에 없습니다.");
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    updateConsultingStatus();
  }, [paramConsultingId]);

  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <BoxContent>집꾸 컨설턴트가 답변을 입력하고 있습니다.</BoxContent>
          <BoxContent>조금만 기다려주세요!</BoxContent>
          <StyledButton
            type="button"
            onClick={() =>
              navigate(`/consulting/${consultingId}/gptAnswer`, {
                state: { gptResponse },
              })
            }
            disabled={!isButtonEnabled}
          >
            확인
          </StyledButton>
        </Box>
        <LoadingIcon style={{ margin: "0 auto" }} />
      </Container>
    </div>
  );
}

export default Step5Page;
