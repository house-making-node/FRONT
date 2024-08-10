import React from 'react';
import './letter1.css';

export function PrivacyPopup1({isOpen, onClose, title, content}){
    if (!isOpen){
        return null;
    }

    return(
        <div className='privacy-popup-overlay'>
            <div className='confirmPopup'>
                <div className='popup-content'>
                    <h2 className='privacy-popup-title'>{title}</h2>
                    <p className='privacy-popup-text'>{content}</p>
                    <button className='privacy-confirm-button' onClick={onClose}>확인</button>
                </div>
            </div>
        </div>
        
    );
}
