import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import headerFace from "../../assets/img/pp.png";
import "./banner.css";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "App Developer", "UI/UX Designer", "Graphic Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               
                <h1>{`Hi! I'm Athallah `} 
                <h1/>
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I am a third-year Computer Engineering student at Institut Teknologi Sepuluh Nopember (ITS), specializing in Multimedia and Telematics. My passion for technology has been a driving force since a young age, leading me to set a goal of becoming a Frontend Engineer. I have a strong interest in Web Development, Mobile Development, UI/UX design, and Graphic Design.
                  </p>
                  <p>
                  Throughout my academic journey, I have actively engaged in various projects, gaining proficiency in multiple programming languages, including C/C++, Python, HTML, CSS, React, JavaScript, Kotlin, and Dart. With these technologies has equipped me with a solid foundation in for frontend development, enabling me to create functional and aesthetically pleasing applications.
                  </p>
                  <p>
                  In addition to my technical experience, I am actively involved in social and organizational activities to developed personal growth. Engaging in various social and organizational endeavors has provided me with invaluable opportunities to develop many precious skills, collaborate with many people, and enhance my communication abilities.
                  </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerFace} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
