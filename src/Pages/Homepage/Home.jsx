import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import lac from '../../Images/about.png'
import "./Home.css";
import TrackVisibility from "react-on-screen";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End  Developer", "Competitive Programmer", "Innovative Start-Up"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">WELCOME TO  CHALLENGES</span>
                  <h1>
                    {`Hi! WE ARE FINDING`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="3000"
                      data-rotate='["Front-End  Developer", "Competitive Programmer", "Innovative Start-Up" ]'
                    >
                      <span className="wrap"><br />{text}
                      </span>
                     
                    </span>
                  </h1>
                  <p className="pnch-ln">
                    We run a non-profit organization for activity achievers. <br />
                    <br />
                    let's connect with us and proof skills, and get a chance to boost yourself....
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        
        </Row>
      </Container>
    </section>
  );
};

export default Home;
