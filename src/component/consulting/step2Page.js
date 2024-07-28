import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../header/Navbar";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 140px; /* Navbar 높이 + 여백 */
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
	height: 105vh; /* 전체 화면 높이 */
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
	margin-left: 32px; /* Title과의 간격 */
	margin-top: 40px;
`;

const StepBox = styled.div`
	width: 111px;
	height: 21px;
	background-color: ${(props) => (props.active ? "#CA904B69" : "#E0E0E0")}; /* 활���화된 StepBox 배경색 설정 */
	color: #c7b199;
	margin-left: ${(props) => (props.index > 0 ? "30px" : "0")}; /* 첫 번째 StepBox는 간격 없음 */
`;

const Box = styled.div`
	width: 1078px;
	height: 1170px;
	border-radius: 15px;
	border: 1px solid #b0b0b0;
	padding: 10px;
	margin-bottom: 20px; /* 버튼과의 간격 */
	display: flex;
	flex-direction: column;
	align-items: center; /* 수평 중앙 정렬 */
`;

const MoodLabel = styled.label`
	width: 464px;
	height: 42px;
	font-size: 20px;
	font-weight: 400;
	line-height: 29.23px;
	text-align: center;
	margin: 0 auto; /* 가로 중앙 정렬 */
	display: block; /* 가로 중앙 정렬을 위해 block으로 설정 */
	margin-top: 20px;
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 700px;
	height: 700px; /* 높이를 늘려서 중앙에 위치하도록 조정 */
	margin-top: 10px;
	align-items: center; /* 수직 중앙 정렬 */
`;

const OptionBox = styled.label`
	width: 250px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end; /* 글자를 아래쪽에 위치 */
	border: 1px solid #c7b19980;
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 0px 4px 20px 2px #78440640;
	margin-bottom: 20px;
	cursor: pointer; /* 클릭 가능한 커서로 변경 */
	position: relative;
	padding-bottom: 20px; /* 글자와 박스 아래쪽 간격 */

	input[type="radio"] {
		display: none;
	}

	span {
		width: 135px;
		height: 26px;
		font-size: 17px; /* 글씨 크기 증가 */
		font-weight: 260;
		line-height: 25.72px;
		color: #0000008f; /* 글씨 색상 설정 */
		position: relative;
		bottom: 0px; /* 글자를 박스 아래쪽에 더 가깝게 위치 */
		text-align: center;
	}

	&::before {
		content: "";
		width: 100%;
		height: 80%; /* 이미지 영역 높이 */
		background-color: black; /* 이미지 대신 검은색으로 색칠 */
		border-top-left-radius: 10px; /* 테두리 반경 일치 */
		border-top-right-radius: 10px; /* 테두리 반경 일치 */
		position: absolute;
		top: 0;
	}
`;

const HiddenRadio = styled.input`
	display: none;

	&:checked + ${OptionBox} {
		border-color: #ca904b; /* 선택된 경우 테두리 색상 변경 */
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1078px; /* Box의 너비와 동일하게 설정 */
	margin-top: 30px; /* 버튼과 Box 간의 간격 추가 */
	margin-bottom: 40px; /* 버튼과 페이지 아래 끝 간의 간격 추가 */
	padding-bottom: 50px;
`;

const StyledButton = styled.button`
	width: 150px; /* 버튼의 너비 설정 */
	height: 55px; /* 버튼의 높이 설정 */
	border-radius: 6px; /* 버튼의 모서리 둥글게 설정 */
	background: #ca904b69; /* 버튼의 배경색 설정 */
	font-size: 24px; /* 글씨 크기 설정 */
	font-weight: 400; /* 글씨 두께 설정 */
	line-height: 28.06px; /* 글씨 줄 높이 설정 */
	color: #ffffff; /* 글씨 색상 설정 */
	border: none; /* 버튼의 테두리 제거 */
	cursor: pointer; /* 마우스를 올렸을 때 커서 변경 */
`;

function Step2Page() {
	const navigate = useNavigate();

	useEffect(() => {
		const userName = localStorage.getItem("userName");
		if (userName) {
			document.getElementById("userNameMood").innerText = userName;
		}
	}, []);

	return (
		<div>
			<Navbar />
			<Container>
				<TitleContainer>
					<Title>STEP 02</Title>
					<StepBoxes>
						{[1, 2, 3, 4].map((step, index) => (
							<StepBox key={index} active={step === 2} index={index} />
						))}
					</StepBoxes>
				</TitleContainer>
				<Box>
					<form id="step2Form">
						<div className="option">
							<MoodLabel id="moodLabel">
								<span id="userNameMood"></span>님이 좋아하는 분위기를 선택해 주세요.
							</MoodLabel>
						</div>
						<OptionsContainer>
							<HiddenRadio type="radio" id="option1" name="mood" value="깔끔한 화이트톤" />
							<OptionBox htmlFor="option1">
								<span>깔끔한 화이트톤</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option2" name="mood" value="따뜻한 우드톤" />
							<OptionBox htmlFor="option2">
								<span>따뜻한 우드톤</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option3" name="mood" value="모던한 블랙, 그레이" />
							<OptionBox htmlFor="option3">
								<span>모던한 블랙, 그레이</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option4" name="mood" value="기타" />
							<OptionBox htmlFor="option4">
								<span>기타</span>
							</OptionBox>
						</OptionsContainer>
					</form>
				</Box>
				<ButtonContainer>
					<StyledButton type="button" onClick={() => navigate("/consulting/step1Page")}>
						이전
					</StyledButton>
					<StyledButton type="button" onClick={() => navigate("/consulting/exitPage")}>
						나가기
					</StyledButton>
					<StyledButton type="button" onClick={() => navigate("/consulting/step3Page")}>
						다음
					</StyledButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}

export default Step2Page;
