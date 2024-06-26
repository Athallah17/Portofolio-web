// components/experience/Experience.js

import React from 'react';
import projImg1 from "../../assets/img/project-img1.png";
import bem1 from "../../assets/img/bem1.jpg";
import bem2 from "../../assets/img/bem2.jpg";
import hgts from "../../assets/img/hgts.jpg";
import hgts2 from "../../assets/img/hgts2.JPG";
import sps from "../../assets/img/sps1.jpg";
import { Container } from 'react-bootstrap';
import './experience.css';

export const Experience = () => {
  const experiences = [
    {
      organization: 'Badan Eksekutif Mahasiswa FTEIC',
      role: 'Staff Of Media Information',
      duration: 'July 2023 - February 2024',
      description: '• Responsible for creating visual materials such as posters, banners, and infographics to promote events and initiatives, resulting in a 30% increase in interaction and engagement.\n• Managed social media accounts, including scheduling posts, responding to comments, and achieving over 20% growth in followers.\n• Capturing photos and videos during events and activities, and editing multimedia content for promotional and information purposes.',
      imgUrl: bem2
    },
    {
      organization: 'UKM Sepakbola ITS',
      role: 'Expert Staff of Communication and Relation',
      duration: 'January 2023 - February 2024',
      description: '• Maintaining effective communication among staff and division.\n• Reviewing and approving all design materials before posted on social media to ensure they meet standards for quality and consistency, ensuring that all designs are visually appealing, free of errors, and effectively delivered the intended message to the target audience.\n• Maintaining communication among staffs and divisions.',
    },
    {
      organization: 'Multimedia and Game Event 9',
      role: 'Head of Marketing Division',
      duration: 'July 2023 - February 2024',
      description: '• Promoted events by developing and executing marketing campaigns to increase awareness and participation.\n• Created comprehensive promotion strategies to effectively reach target audiences and achieve marketing goals.',

    },
    {
      organization: 'Himmatekkom Goes To School',
      role: 'Volunteer',
      duration: 'November 2022',
      description: '•Interacting one-on-one and in small groups with elementary students \n• Teaching basic material subjects\n',
      imgUrl: hgts,


    },
    {
      organization: 'SPS 126 & 128',
      role: 'Volunteer',
      duration: 'November 2023',
      description: '•Captured photography and videography for graduates. \n• Worked as crowd controller, coordinated guest movements and ensured smooth flow of the event. \n',
      imgUrl: sps,
    },
    

  
    // Add more experiences as needed
  ];

  return (
    <Container>
    <div className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experiences">
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <h3>{exp.organization}</h3>
            <h4>{exp.role}</h4>
            <p className="duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <img src={exp.imgUrl} alt={exp.organization} /> 
          </div>
        ))}
      </div>
    </div>
  </Container>
  );
};