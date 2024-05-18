import js from "../../assets/img/js.svg";
import html from "../../assets/img/html.svg";
import react from "../../assets/img/react.svg";
import python from "../../assets/img/python.svg";
import figma from "../../assets/img/figma.svg";
import cpp from "../../assets/img/cpp.svg";
import premierepro from "../../assets/img/premierepro.svg";
import photoshop from "../../assets/img/photoshop.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.css';

export const Skills= () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="js" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="cpp" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={photoshop} alt="Photoshop" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={premierepro} alt="PremierePro" />
                                <h5>Premiere Pro</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
