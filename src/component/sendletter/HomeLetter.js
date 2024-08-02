import React, { useState } from "react";
import "./letter.css";
import SubscriptionModal from "./SubscriptionalModal";
import Thumbnail from "./Thumbnail";
import mirror from "../img/mirror.png";
import running from "../img/running.png";
import room from "../img/room.png";
import house from "../img/house.png";

function HomeLetter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="HomeLetter">
      <header className="HomeLetter-header">
        <img src={house} alt='house'/>
        <h1>똑똑한 자취를 위한, 자취레터</h1>
        <p>다양한 자취와 관련된 정보를 찾아보세요.</p>
        <button onClick={openModal} className="subscribe-button">
          구독하기
        </button>
        <SubscriptionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </header>
      <div className="thumbnails">
        <Thumbnail
          id={1}
          src={mirror}
          description="독자님의 가장 큰 인테리어 고민은 무엇인가요 ?"
        />
        <Thumbnail
          id={2}
          src={running}
          description="똑똑한 자취, OO이 필수라고 ?"
        />
        <Thumbnail
          id={3}
          src={mirror}
          description="자취생을 위한 돈 관리 방법"
        />
        <Thumbnail
          id={4}
          src={room}
          description="이미 구매한 물건을 또 구매하고 있다면 !"
        />
      </div>
    </div>
  );
}

export default HomeLetter;
