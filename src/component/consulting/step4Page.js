import React, { useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 140px; /* Navbar 높이 + 여백 */
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
	margin-left: calc((100vw - 1078px) / 2); /* Box와 맞추기 위해 왼쪽 여백 설정 */
`;

const Title = styled.div`
	font-size: 40px;
	font-weight: 700;
	line-height: 46px;
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
	background-color: ${(props) => (props.active ? "#CA904B69" : "#E0E0E0")}; /* 활성화된 StepBox 배경색 */
	color: #c7b199;
	margin-left: ${(props) => (props.index > 0 ? "30px" : "0")}; /* 첫 번째 StepBox는 간격 없음 */
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
`;

const Option = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	margin-bottom: 20px; /* 옵션 간의 간격 */
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
	padding: 15px; /* input 상자와 placeholder 글씨 사이의 간격 추가 */
	width: 740px;
	height: 154px;
	border: 1px solid #a4a4a4;
	font-size: 20px; /* input에 쓰여지는 글씨 크기 설정 */
	line-height: 29.23px;
	text-align: left; /* 글씨 중앙 정렬 */
	color: #000000; /* 글씨 색상 설정 */
	&::placeholder {
		font-size: 20px !important; /* 글씨 크기 증가 */
		line-height: 29.23px;
		text-align: left;
		color: #d9d9d9c2;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1078px; /* Box의 너비와 동일하게 설 */
	margin-top: 30px; /* 버튼과 Box 간의 간격 추가 */
`;

const StyledButton = styled.button`
	width: 150px; /* 버튼의 너비 설정 */
	height: 55px; /* 버튼의 높이 설정 */
	border-radius: 6px; /* 버튼의 모서리 둥글게 설정 */
	background: ${(props) => (props.disabled ? "#d3d3d3" : "#ca904b69")}; /* 비활성화 시 회색 배경 */
	font-size: 24px; /* 글씨 크기 설정 */
	font-weight: 400; /* 글씨 두께 설정 */
	line-height: 23.38px; /* 글씨 줄 높이 설정 */
	color: #ffffff; /* 글씨 색상 설정 */
	border: none; /* 버튼의 테두리 제거 */
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; /* 비활성화 시 커서 변경 */
`;

function Step4Page() {
	const navigate = useNavigate();
	const [interiorConcern, setInteriorConcern] = useState(""); // 텍스트 영역 상태 추가

	useEffect(() => {
		const userName = localStorage.getItem("userName");
		if (userName) {
			document.getElementById("userNameFinal").innerText = userName;
		}
		// 이전 상태 복원
		const savedConcern = localStorage.getItem("interiorConcern");
		if (savedConcern) {
			setInteriorConcern(savedConcern); // 저장된 상태로 설정
		}
	}, []);

	const handleTextChange = (event) => {
		setInteriorConcern(event.target.value); // 텍스트 영역 내용 업데이트
		localStorage.setItem("interiorConcern", event.target.value); // 상태 저장
	};

	const clearText = (element) => {
		if (element.placeholder === "여기를 클릭해 주세요") {
			element.placeholder = "";
		}
	};

	const restorePlaceholder = (element) => {
		if (element.value === "") {
			element.placeholder = "여기를 클릭해 주세요";
		}
	};

	const handleExit = () => {
		navigate('/'); // MainPage로 이동
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
									<span id="userNameFinal"></span>님, 가지고 있는 인테리어 관련 고민을 자유롭게 작성해 주세요.
								</Label>
								<TextArea
									id="interiorConcern"
									placeholder="여기를 클릭해 주세요"
									onClick={(e) => clearText(e.target)}
									onBlur={(e) => restorePlaceholder(e.target)}
									onChange={handleTextChange} // 내용 변경 핸들러 추가
									value={interiorConcern} // 상태 값 설정
								/>
							</Option>
						</form>
					</Box>
					<ButtonContainer>
						<StyledButton type="button" onClick={() => navigate("/consulting/step3Page")}>
							이전
						</StyledButton>
						<StyledButton type="button" onClick={handleExit}>
							나가기
						</StyledButton>
						<StyledButton type="button" onClick={() => navigate("/consulting/consultLoading")} disabled={!interiorConcern.trim()}> {/* 내용이 있을 때만 활성화 */}
							제출하기
						</StyledButton>
					</ButtonContainer>
				</Container>
			</div>
		);
	}

	export default Step4Page;