import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./letter.css";
import { useState, useEffect } from "react";
import { PrivacyPopup } from "./privacypopup";
import styled from 'styled-components';
import axios from "axios";


const Button = styled.button`
    width: 100%;
    background-color: #e6c793;
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;

    &:hover {
        background-color: #CA904B72;
    }
`;
    
Modal.setAppElement("#root");

function SubscriptionModal({ isOpen, onRequestClose }) {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showMarketingPopup, setShowMarketingPopup] = useState(false);
  const [userName, setUserName] = useState(""); 
  const [email, setEmail] = useState("");

  const handlePrivacyChange = (event) => {
    setPrivacyChecked(event.target.checked);
  };

  const handleMarketingChange = (event) => {
    setMarketingChecked(event.target.checked);
  };

  useEffect(() => {
    if (privacyChecked){
      setShowPrivacyPopup(true);
    }
    else{
      setShowPrivacyPopup(false);
    }
  }, [privacyChecked]);

  useEffect(() => {
    setShowPrivacyPopup(privacyChecked);
  }, [privacyChecked]);

  useEffect(() => {
    setShowMarketingPopup(marketingChecked);
  }, [marketingChecked]);

  const closePrivacyPopup = () => {
    setShowPrivacyPopup(false);
  };

  const closeMarketingPopup = () => {
    setShowMarketingPopup(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const subscriptionData = {
      user_id: 1, 
      email: email,
      name: userName
    };

    try {
      const response = await axios.post('http://3.36.240.5:3000/home_letters/subscribe', subscriptionData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Response:", response);

      if (response.status === 200) {
        console.log("Subscription successful");
        navigate('/member-home-letter', { state: { subscriptionCompleted: true } });
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-outer">
        <div className="modal-content">
          <h2>구독하기</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" value={userName} name="name" onChange={(e) => setUserName(e.target.value)} 
              required />
            </div>
            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}
              required />
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="privacy" name="privacy" checked={privacyChecked} onChange={handlePrivacyChange} required />
              <label htmlFor="privacy" style={{color:"red"}}>(필수) 개인정보 수집 및 이용에 동의합니다</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="marketing" name="marketing" checked={marketingChecked} onChange={handleMarketingChange} />
              <label htmlFor="marketing" style={{color:"red"}}>(필수) 마케팅 정보 수신에 동의합니다</label>
            </div>
            <Button onClick={handleButtonClick} className="submit-button">구독하기</Button>
          </form>
        </div>
        <PrivacyPopup
        isOpen={showPrivacyPopup}
        onClose={closePrivacyPopup}
          title="개인정보 수집 및 이용"
          content="자취레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다."
      />
      <PrivacyPopup
        isOpen={showMarketingPopup}
        onClose={closeMarketingPopup}
        title="광고성 정보 수신"
        content="제휴 판촉, 프로모션, 이벤트 정보 등의 광고성 정보를 수신합니다."
      />
      </div>
    </Modal>
    </>
    
    
  );
}

export default SubscriptionModal;
