import React from 'react';
import './home.css';
import profilePhoto from './images/증명사진.jpg'; 
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div className="self-introduction">
      <div className="intro-container">
        <div className="intro-content">

          {/* Text Section */}
          <div className="intro-text-container">
            <h1 className="intro-title">안녕하세요 👋</h1>
            <h1 className="intro-title">저는 조영철입니다.</h1>
            <p className="intro-text">
            저는 웹 개발에 관심이 많아 웹 개발자가 되기위해 노력하고 있습니다.  
            </p>
            <p className="intro-text">
            JSP, Spring Boot를 활용한 프로젝트를 진행해본 경험이 있으며, django와 같은 다양한 웹 프레임워크에 대한 공부를 하였습니다.
            </p>
          </div>

          {/* Photo Section */}
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>

        {/* Icons Section */}
        <div className="social-icons">
          <a
            href="https://github.com/yeongcheoljo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
          <a href="mailto:c0808yc@naver.com" className="icon-link">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;