import React, { useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
	padding-top: 140px; /* Navbar 높이 + 여백 */
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	min-height: 70vh; /* 전체 화면 높이 */
`;

const Box = styled.div`
	width: 1155px;
	height: 226px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center; /* 수직 중앙 정렬 */
	text-align: center; /* 가로 중앙 정렬 */
	position: relative; /* 부모 기준으로 위치 지정 */
	color: #FFFFFF;
	box-shadow: 0px 4px 7.4px 0px #00000040;
`;

const BoxContent = styled.div`
	font-size: 20px;
	font-weight: 260;
	line-height: 23.38px;
	text-align: center;
    Color : #000000; /* 추가 */
    margin-bottom : 20px;
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
    background-color: ${props => props.disabled ? '#ccc' : '#CA904B69'}; /* 비활성화 시 회색 */
    margin-bottom: 10px;
    margin-right: 40px;
    font-size: 18px; 
    font-weight: 330;
    line-height: 21.04px;
    text-align: center; 
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; /* 비활성화 시 커서 변경 */
`;

const LoadingIcon = styled.div`
	position: absolute;
    bottom : 30%;
	left: 50%;
	transform: translate(-50%, 0); /* 수평 중앙 정렬 */
	width: 48px; /* 동그란 모양의 너비 */
	height: 48px; /* 동그란 모양의 높이 */
	border: 4px solid #ccc; /* 테두리 색상 */
	border-top: 4px solid #000; /* 상단 테두리 색상 */
	border-radius: 50%; /* 동그란 모양 */
	animation: spin 1s linear infinite; /* 애니메이션 추가 */

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

function Step5Page() {
	const navigate = useNavigate();
	const [consultingId, setConsultingId] = useState(null);
	const [status, setStatus] = useState("답변 대기 중"); // 상태 추가
	const [gptResponse, setGptResponse] = useState(null); // 응답 데이터 상태 추가
	const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태 추가

	const saveGptResponse = async (consultingId) => {
		try {
			const response = await axios.post("http://3.36.240.5:3000/consulting/gpt_request", {
				consulting_id: consultingId
			});
			console.log(response.data);

			// gpt 답변 생성 완료 시 상태 업데이트
			if (response.data.isSuccess) {
				setStatus("답변 완료"); // 상태 업데이트
				const gptResponseData = response.data.result.gpt_response; // 응답 데이터 저장
				setIsButtonEnabled(true); // 버튼 활성화
				setGptResponse(gptResponseData); // 응답 데이터 상태 업데이트
				// 추가: 응답 데이터에서 필요한 정보 추출
				const { house_size, room_num, mood, concern, status, response_id } = response.data.result;
				console.log({ house_size, room_num, mood, concern, status, response_id });
			} else {
				console.log("응답이 성공적이지 않음:", response.data.isSuccess); // 추가된 로그
			}
		} catch (error) {
			console.error("API 호출 오류:", error);
		}
	};

	useEffect(() => {
		const updateConsultingStatus = async () => {
			try {
				const storedConsultingId = localStorage.getItem("consultingId");
				if (storedConsultingId) {
					setConsultingId(parseInt(storedConsultingId));
				} else {
					console.error("consultingId가 로컬 스토리지에 없습니다.");
				}

				if (consultingId) {
					await saveGptResponse(consultingId); // gpt 답변 요청
				}
			} catch (error) {
				console.error("API 호출 오류:", error);
			}
		};

		updateConsultingStatus();
	}, [consultingId]); // 의존성 배열에 consultingId 추가

	return (
		<div>
			<Navbar />
			<Container>
				<Box>
					<BoxContent>
						집꾸 컨설턴트가 답변을 입력하고 있습니다.
					</BoxContent>
					<BoxContent>
						조금만 기다려주세요!
					</BoxContent>
					{console.log(isButtonEnabled)} {/* 상태 확인 */}
					<StyledButton 
						type="button" 
						onClick={() => navigate("/consulting/gptAnswer", { state: { gptResponse } })} 
						disabled={!isButtonEnabled} // 버튼 비활성화 조건 수정
					>
						확인
					</StyledButton>
				</Box>
				<LoadingIcon style={{ margin: '0 auto' }} />
			</Container>
		</div>
	);
}

export default Step5Page;