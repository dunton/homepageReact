import React, { Component } from "react";
import { Row, Col, Media, Image } from "react-bootstrap";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <HeadShot>
            <HeadPic>
              <Media>
                <Image src={this.props.headshot} alt="headshot" />
              </Media>
            </HeadPic>
            <Name>Ryan Dunton</Name>
            <Position>Front-End Developer</Position>

            <Info>
              Below are links to some of my work, my resume and my contact
              information. <br /> I also built and deployed this website from
              scratch. Enjoy!
            </Info>
          </HeadShot>
          <Media style={{ marginTop: 0 }}>
            <Image
              responsive
              src={this.props.mainImage}
              alt="main background image"
              style={{ width: "100%" }}
            />
          </Media>
        </Col>
      </Row>
    );
  }
}

const HeadShot = styled.div`
  color: white;
  display: flex;
  position: absolute;
  margin-top: 0px;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 50px;
  padding-left: 50px;

  @media (max-width: 700px) {
    padding-bottom: 3px;
  }
`;

const HeadPic = styled.div`
  @media (max-width: 321px) {
    display: none;
  }
`;

const Name = styled.h1`
  margin-bottom: 5px;
  margin-top: 10px;
  font-size: 4vw;
`;
const Position = styled.h3`
  margin-top: 5px;
  font-size: 3vw;
`;
const Info = styled.p`
  font-size: 1.5vw;
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Header;
