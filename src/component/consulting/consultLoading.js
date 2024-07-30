import React from "react";
import Navbar from "../header/Navbar";
import styled from "styled-components";

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

const ConfirmButton = styled.button`
	position: absolute;
	bottom: 10px;
	right: 10px;
	width: 81px;
	height: 50px;
	border-radius: 6px;
    border: none; 
    Color : white;
    Background-color : #CA904B69;
    margin-bottom : 10px;
    margin-right : 40px;
    font-size: 18px; 
    font-weight: 330;
    line-height: 21.04px;
    text-align: center; 
    cursor: pointer; 
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
					<ConfirmButton>확인</ConfirmButton>
				</Box>
				<LoadingIcon style={{ margin: '0 auto' }} /> {/* Box 아래 페이지 가운데에 로딩 아이콘 */}
			</Container>
		</div>
	);
}

export default Step5Page;