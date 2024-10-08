import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./letter1.css";
import { useState, useEffect } from "react";
import { PrivacyPopup1 } from "./privacypopup1";
import styled from 'styled-components';
import axios from 'axios';

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

function SubscriptionModal1({ isOpen, onRequestClose }) {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showMarketingPopup, setShowMarketingPopup] = useState(false);
  const [name, setName] = useState("");
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
    if (marketingChecked) {
      setShowMarketingPopup(true);
    } else {
      setShowMarketingPopup(false);
    }
  }, [marketingChecked]);

  const closePrivacyPopup = () => {
    setShowPrivacyPopup(false);
  };

  const closeMarketingPopup = () => {
    setShowMarketingPopup(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // API 요청 데이터
    const subscriptionData = {
      user_id: 1, // 사용자 ID (적절히 설정)
      email: email,
      name: name,
    };

    try {
      const response = await axios.put('http://3.36.240.5:3000/share_letters/subscribe', subscriptionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.isSuccess) {
        console.log('구독 정보 저장 성공:', response.data);
        navigate('/member-share-letter', { state: { subscriptionCompleted: true } });
      } else {
        console.error('구독 정보 저장 실패:', response.data.message);
        alert('구독 정보 저장에 실패했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      alert('서버 오류: 나중에 다시 시도해주세요.');
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
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  checked={privacyChecked} 
                  onChange={handlePrivacyChange} 
                  required 
                />
                <label htmlFor="privacy" style={{color:"red"}}>(필수) 개인정보 수집 및 이용에 동의합니다</label>
              </div>
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="marketing" 
                  name="marketing" 
                  checked={marketingChecked} 
                  onChange={handleMarketingChange} 
                />
                <label htmlFor="marketing" style={{color:"red"}}>(필수) 마케팅 정보 수신에 동의합니다</label>
              </div>
              <Button onClick={handleButtonClick} className="submit-button">구독하기</Button>
            </form>
          </div>
        </div>
        <PrivacyPopup1
          isOpen={showPrivacyPopup}
          onClose={closePrivacyPopup}
          title="개인정보 수집 및 이용"
          content="자취레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다."
        />
        <PrivacyPopup1
          isOpen={showMarketingPopup}
          onClose={closeMarketingPopup}
          title="광고성 정보 수신."
          content="제휴 판촉, 프로모션, 이벤트 정보 등의 광고성 정보를 수신합니다."
        />
      </Modal>
    </>
  );
}

export default SubscriptionModal1;
