import React from "react";

import "../style.css";
import MyAvatar from "../../../assets/images/faces/face1.jpg";

const Sidebar = () => {
  return (
    <aside className="chat_sidebar">
      <div className="toolbar-container">
        <img className="user-photo" src={MyAvatar} />
        <div className="auxicons-toolbar-container">
          <i className="fas fa-spinner"></i>
          <i className="fas fa-content-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="search-container">
        <i id="contact-search" className="fas fa-search"></i>
        <input type="text" name="search" id="search" placeholder="Procurar" />
      </div>
      <div className="contacts-container">
        <div className="contact-box active-chat">
          <img className="user-photo" src={MyAvatar} />
          <div className="user-info">
            <p className="user-name">User 1</p>
            <p className="user-messagepreview">
              <i className="fas fa-check-double"></i>
              MSg 1
            </p>
          </div>
          <div className="message-info">
            <p className="message-time">15:40h</p>
            <p className="message-pending">5</p>
          </div>
        </div>
        <div className="contact-box">
          <img className="user-photo" src={MyAvatar} />
          <div className="user-info">
            <p className="user-name">User 1</p>
            <p className="user-messagepreview">MSg 1</p>
          </div>
          <div className="message-info">
            <p className="message-time">15:40h</p>
            <p className="message-pending">5</p>
          </div>
        </div>
        <div className="contact-box">
          <img className="user-photo" src={MyAvatar} />
          <div className="user-info">
            <p className="user-name">User 1</p>
            <p className="user-messagepreview">MSg 1</p>
          </div>
          <div className="message-info">
            <p className="message-time">15:40h</p>
            <p className="message-pending">5</p>
          </div>
        </div>
        <div className="contact-box">
          <img className="user-photo" src={MyAvatar} />
          <div className="user-info">
            <p className="user-name">User 1</p>
            <p className="user-messagepreview">MSg 1</p>
          </div>
          <div className="message-info">
            <p className="message-time">15:40h</p>
            <p className="message-pending">5</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
