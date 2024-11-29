import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './about.css';

const About = () => {
  const skills = [
    { name: 'Java', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'JavaScript', level: 3 },
    { name: 'HTML', level: 4 },
    { name: 'JSP', level: 4 },
    { name: 'Django', level: 2 },
    { name: 'Spring', level: 3 },
    { name: 'Spring Boot', level: 4 },
    { name: 'MySQL', level: 4 },
    { name: 'OracleDB', level: 3 },
    { name: 'Git', level: 3 },
  ];

  const tools = [
    'Visual Studio Code',
    'GitHub',
    'Eclipse IDE',
    'IntelliJ IDEA',
    'Linux',
    'npm',
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        안녕하세요 저는 웹 개발자 조영철입니다. 
        저는 많은 사람들이 사용하기 좋은 웹 페이지를 만드는 것을 목표로 개발하고 있습니다. 
      </p>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <div className="skill-rating">
                  {Array(5)
                    .fill()
                    .map((_, i) =>
                      i < skill.level ? (
                        <FaStar key={i} className="star filled-star" />
                      ) : (
                        <FaRegStar key={i} className="star empty-star" />
                      )
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools Section */}
      <div className="tools-section">
        <h2>Tools</h2>
        <ul className="tools-list">
          {tools.map((tool, index) => (
            <li key={index} className="tool-item">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;