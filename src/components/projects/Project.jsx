import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import bj from "../../assets/img/Blackjack.png";
import helmdall from "../../assets/img/Helmdall.png";
import sc from "../../assets/img/SocialMedia.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import "./project.css";

export const Projects = () => {

  const projects = [
    {
      title: "Helmdall: Anti-Sleep Helmet on Motorcycle",
      description: "Drowsinnes Detection with ESPCam and Monitored in Android Devices. Giving information on the last 30 Seconds and alerts the user if the user is drowsy.",
      imgUrl: helmdall,
    },
    {
      title: "Burung Biru",
      description: "Facebook Social Media Clone App. Create With React Native and Firebase. User can Post, Comment, Like, and Share Post. ",
      imgUrl: sc,
    },
    {
      title: "BlackJack Game",
      description: "Cards Playing Game using OpenCV and Computer Vision to Count Cards Weights and Features to Determine Game Flow Versus Computer",
      imgUrl: bj,
    },

  ];

  const designs = [
    {
      title: "Posters",
      description: "Design & Development",
    },
    {
      title: "Instagram Post",
      description: "UI/UX Design",
      
    },
    {
      title: "Mobile App Interface",
      description: "App Design",
      
    },
    {
      title: "Instagram Post Design",
      description: "Design & Development",
      
    },
    {
      title: "Website Mockup",
      description: "UI/UX Design",
      
    },
    {
      title: "Mobile App Interface",
      description: "App Design",
      
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Codes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Several Designs I Had Made </p>
                      <Row>
                        {
                          designs.map((designs, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...designs}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
