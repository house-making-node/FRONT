import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import "./letter1.css";
import SubscriptionModal from "./SubscriptionalModal1";
import Thumbnail from "./Thumbnail1";
import mirror from "../component/img/mirror.png";
import running from "../component/img/running.png";
import room from "../component/img/room.png";
import house from "../component/img/house.png";
import axios from "axios";


const localImages = [mirror, running,mirror, room];

function ShareLetter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [letters, setLetters] = useState([]);


  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchLetters() {
      try {
        const response = await axios.get('http://3.36.240.5:3000/share_letters', {
          params: {
            page: 0, // Set the desired page
            size: 4 // Set the desired size
          }
        });
        console.log(response.data)

        if (response.data.isSuccess && response.data.code === 2000) {
          // Update state with fetched letters
          setLetters(response.data.result.Letter.slice(0,4));
        } else {
          console.error("Failed to fetch letters:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch letters:", error);
      }
    }

    fetchLetters();
  }, []);

  const isLoggedIn = localStorage.getItem('access_token') ? true : false;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleThumbnailClick = (id) => {
    navigate('/share-letter-story');
  }


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
        {letters.map((letter,index) => (
          <Thumbnail
            key={letter.letter_id}
            id={letter.letter_id}
            src={localImages[index % localImages.length]}
            description={letter.title}
            onClick={() => handleThumbnailClick(letter.letter_id)}
            publicationDate={new Date(letter.created_at).toLocaleDateString('ko-KR')}
          />
        ))}
      </div>
    </div>
  );
}

export default ShareLetter;