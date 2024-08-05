import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import SubscriptionModal from "./SubscriptionalModal1";  // 올바른 경로로 수정
import Thumbnail from "./Thumbnail1";
import mirror from "../component/img/mirror.png";
import running from "../component/img/running.png";
import room from "../component/img/room.png";
import house from "../component/img/house.png";
import "./letter1.css"

const Button = styled.button`
    width: 217px;
    height: 68px;
    padding: 10px;
    background-color: #CA904B69;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 200px;
    font-size: 18px;
    font-weight: 400;
    margin-left: 600px;

    &:hover {
        background-color: #CA904B72;
    }
`;

function ShareLetter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/share-letter-page');
  };

  return (
    <div className="ShareLetter">
      <header className="ShareLetter-header">
        <img src={house} alt='house'/>
        <h1>행복한 자취를 위한, 공유레터</h1>
        <p>다양한 독자들의 자취 이야기들, 매주 수요일에 만나요.</p>
        <button onClick={openModal} className="subscribe-button">
          구독하기
        </button>
        <SubscriptionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </header>
      <div className="thumbnails">
        <Thumbnail
          id={1}
          src={mirror}
          description="자취를 시작하고 000이 생겼다 ?! "
        />
        <Thumbnail
          id={2}
          src={running}
          description="내가 사려고 모아둔, 다이소 꿀템 추천 모음집 📝"
        />
        <Thumbnail
          id={3}
          src={mirror}
          description="일주일에 두 번 0원 쓰기, 지출 감소에 효과가 있을까 ?"
        />
        <Thumbnail
          id={4}
          src={room}
          description="식물 덕후가 알려주는 키우기 좋은 식물들 🪴"
        />
      </div>
      <Button onClick={handleButtonClick} className="subscribe-button">
          내 자취생활 공유하기
      </Button>
    </div>
  );
}

export default ShareLetter;
