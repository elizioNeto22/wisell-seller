import React from "react";

import "./style.css";
import MyAvatar from "../../assets/images/faces/face1.jpg";

import Sidebar from "./Sidebar/Sidebar";

const ColabManager = ({ contacts }) => {
  return (
    <>
      {contacts && (
        <div className="page-header">
          <h3 className="page-title"> Conversas ativas </h3>
        </div>
      )}
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form>
                {contacts && <Sidebar />}
                <div className="container">
                  {contacts && (
                    <nav className="chat-navbar">
                      <div className="contactinfo-container">
                        <img className="user-photo" src={MyAvatar} />
                        <p className="user-name">Maria</p>
                      </div>
                      <ul className="chattools-container">
                        <li>
                          <i className="fas fa-search"></i>{" "}
                        </li>
                        <li>
                          <i className="fas fa-paperclip"></i>{" "}
                        </li>
                        <li>
                          <i className="fas fa-ellipsis-v"></i>{" "}
                        </li>
                      </ul>
                    </nav>
                  )}
                  <div className="messages-container">
                    <div className="bg-image">
                      <div className="chat-messages">
                        <p className="guest-message">
                          bom dia! Como posso ajudar?
                        </p>
                        <br />
                        <p className="user-message">
                          Estou com dúvida sobre a recomendação
                        </p>
                        <br />
                        <p className="guest-message">
                          A recomendação é o processo de identificação dos
                          melhores produtos para o cliente
                        </p>
                        <br />
                        <p className="user-message">Entendido...</p>
                      </div>
                    </div>
                  </div>
                  <div className="sendmessage-container">
                    <i className="far fa-grin"></i>
                    <input
                      type="text"
                      id="chatmessage"
                      name="message"
                      className="userinput"
                      placeholder="Digite aqui uma mensagem..."
                    />
                    <i className="fas fa-microphone"></i>
                  </div>
                </div>
                {/*<div className="container"></div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColabManager;
