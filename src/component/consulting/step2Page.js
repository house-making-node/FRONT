import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../header/Navbar";
import styled from "styled-components";
import whiteToneImg from "../img/whiteTone.jpeg";
import blackToneImg from "../img/blackTone.jpeg";
import woodToneImg from "../img/woodTone.jpeg";
import excImg from "../img/etc....jpeg";
import axios from "axios";

const Container = styled.div`
	margin-top: 140px; /* Navbar 높이 + 여백 */
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
	margin-left: 37px; /* Title과의 간격 */
	margin-top: 15px;
`;

const StepBox = styled.div`
	width: 111px;
	height: 21px;
	background-color: ${(props) => (props.active ? "#CA904B69" : "#E0E0E0")}; /* 활성화된 StepBox 배경색 설정 */
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
		height: 80%; /* 이미지 영역 높이를 박스에 맞춤 */
		background-image: ${(props) => props.image}; /* 이미지로 변경 */
		background-size: cover; /* 이미지 크기를 박스에 맞게 조정 */
		background-position: center; /* 이미지 중앙 정렬 */
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
	margin-left: 15px;
`;

const StyledButton = styled.button`
	width: 150px; /* 버튼의 너비 설정 */
	height: 55px; /* 버튼의 높이 설정 */
	border-radius: 6px; /* 버튼의 모서리 둥글게 설정 */
	background: ${(props) => (props.disabled ? "#d0d0d0" : "#ca904b69")}; /* 비활성화 상태일 때 회색 배경 */
	font-size: 24px; /* 글씨 크기 설정 */
	font-weight: 400; /* 글씨 두께 설정 */
	line-height: 28.06px; /* 글씨 줄 높이 설정 */
	color: #ffffff; /* 글씨 색상 설정 */
	border: none; /* 버튼의 테두리 제거 */
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; /* 비활성화 상태일 때 커서 변경 */
`;

function Step2Page() {
	const navigate = useNavigate();
	const [isNextEnabled, setIsNextEnabled] = useState(false);
	const [consultingId, setConsultingId] = useState(null);
	const [userName, setUserName] = useState("");

	useEffect(() => {
		const storedConsultingId = localStorage.getItem("consultingId");
		const storedUserName = localStorage.getItem("userName");
		if (storedConsultingId) {
			setConsultingId(parseInt(storedConsultingId));
		} else {
			console.error("consultingId가 로컬 스토리지에 없습니다.");
			// 필요하다면 이전 페이지로 리다이렉트 등의 처리를 할 수 있습니다.
			// navigate("/consulting/step1Page");
		}
		if (storedUserName) {
			setUserName(storedUserName);
		}
	}, []);

	const handleOptionChange = () => {
		const selectedOption = document.querySelector('input[name="mood"]:checked');
		setIsNextEnabled(!!selectedOption); // 옵션이 선택되면 true
	};

	const handleNext = async () => {
		const selectedOption = document.querySelector('input[name="mood"]:checked');

		if (!selectedOption) {
			alert("옵션을 선택해 주세요.");
			return;
		}

		try {
			const response = await axios.patch("http://3.36.240.5:3000/consulting/requirements/mood", {
				consulting_id: consultingId,
				mood: selectedOption.value,
			});

			if (response.data.isSuccess) {
				navigate("/consulting/step3Page");
			} else {
				alert("저장에 실패했습니다. 다시 시도해 주세요.");
			}
		} catch (error) {
			console.error("API 요청 중 오류 발생:", error);
			alert("서버 통신 중 오류가 발생했습니다.");
		}
	};

	const handleExit = () => {
		navigate("/"); // MainPage로 이동
	};

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
								<span id="userNameMood">{userName}</span>님이 좋아하는 분위기를 선택해 주세요.
							</MoodLabel>
						</div>
						<OptionsContainer>
							<HiddenRadio type="radio" id="option1" name="mood" value="깔끔한 화이트톤" onChange={handleOptionChange} />
							<OptionBox htmlFor="option1" image={`url(${whiteToneImg})`}>
								<span>깔끔한 화이트톤</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option2" name="mood" value="따뜻한 우드톤" onChange={handleOptionChange} />
							<OptionBox htmlFor="option2" image={`url(${woodToneImg})`}>
								<span>따뜻한 우드톤</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option3" name="mood" value="모던한 블랙, 그레이" onChange={handleOptionChange} />
							<OptionBox htmlFor="option3" image={`url(${blackToneImg})`}>
								<span>모던한 블랙, 그레이</span>
							</OptionBox>
							<HiddenRadio type="radio" id="option4" name="mood" value="기타" onChange={handleOptionChange} />
							<OptionBox htmlFor="option4" image={`url(${excImg})`}>
								<span>기타</span>
							</OptionBox>
						</OptionsContainer>
					</form>
				</Box>
				<ButtonContainer>
					<StyledButton type="button" onClick={() => navigate("/consulting/step1Page")}>
						이전
					</StyledButton>
					<StyledButton type="button" onClick={handleExit}>
						나가기
					</StyledButton>
					<StyledButton type="button" onClick={handleNext} disabled={!isNextEnabled}>
						다음
					</StyledButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}

export default Step2Page;
