import React from 'react';
import projectPhoto1 from './images/중고게임거래 사이트.png';
import projectPhoto2 from './images/마트관리 사이트.png';
import './projects.css';

const Projects = () => {
  const projectList = [
    {
      title: '중고게임거래 사이트 프로젝트',
      description: 'JSP를 활용한 중고게임 거래를 위한 웹사이트이며, 개인간의 거래 및 교환을 중개하는 사이트 입니다.',
      image: projectPhoto1, 
      link: 'https://github.com/yeongcheoljo/UsedGameProject.git',
    },
    {
      title: '마트관리 사이트 프로젝트',
      description: 'SpringBoot를 활용한 마트관리 사이트이며, 밀키트 상품을 할인정보, 유통기한, 재고확인, 상품예약및 구매 기능을 회원에게 제공하며, 관리자는 상품을 주문, 판매및 할인설정, 폐기정보, 판매량확인을 통해 관리할 수 있는 사이트 입니다.',
      image: projectPhoto2,
      link: 'https://github.com/yeongcheoljo/MartProject.git',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                className="project-button"
              >
                View on GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;