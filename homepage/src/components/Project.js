import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import ReactGA from "react-ga";

// images are 1440x400

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: null
    };
  }

  componentDidMount() {
    this.setState({
      projectName: this.props.name
    });
  }
  trackClick = e => {
    ReactGA.event({
      category: "Project",
      action: "Click",
      label: `${this.state.projectName}`
    });
  };
  renderContent = () => {
    switch (this.props.link) {
      case "oscar watch": {
        return (
          <Row>
            <Col md={12}>
              <MainPic onClick={this.trackClick}>
                <a
                  href="http://www.theoscarwatch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image responsive src={this.props.image} />
                  <Title>{this.props.name}</Title>
                </a>
              </MainPic>
            </Col>
          </Row>
        );
        break;
      }
      case "cole haan": {
        return (
          <Row>
            <Col md={12}>
              <MainPic onClick={this.trackClick}>
                <a
                  href="https://partners.wsj.com/chasing-ambition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image responsive src={this.props.image} />
                  <Title>{this.props.name}</Title>
                </a>
              </MainPic>
            </Col>
          </Row>
        );
        break;
      }
      case "service-now": {
        return (
          <Row>
            <Col md={12}>
              <MainPic onClick={this.trackClick}>
                <a
                  href="https://partners.wsj.com/servicenow/work-reimagined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image responsive src={this.props.image} />
                  <Title>{this.props.name}</Title>
                </a>
              </MainPic>
            </Col>
          </Row>
        );
        break;
      }
      case "resume": {
        return (
          <Row>
            <Col md={12}>
              <MainPic onClick={this.trackClick}>
                <a
                  href="https://s3.amazonaws.com/dunton-portfolio/docs/Dunton_Resume.pdf"
                  download="Dunton_Resume"
                >
                  <Image responsive src={this.props.image} />
                  <Title>{this.props.name}</Title>
                </a>
              </MainPic>
            </Col>
          </Row>
        );
      }
      default: {
        return (
          <Row>
            <Col md={12}>
              <MainPic onClick={this.trackClick}>
                <a href={this.props.link + ".html"} target="_blank">
                  <Image responsive src={this.props.image} />
                  <Title>{this.props.name}</Title>
                </a>
              </MainPic>
            </Col>
          </Row>
        );
      }
    }
  };
  render() {
    return this.renderContent();
  }
}

const MainPic = styled.div`
  opacity: 0.7;
  width: 100%;
  height: 33%;
  position: relative;

  img {
    width: 100%;
  }

  :hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;
  font-size: font-size: 2.5vw;

  @media (max-width: 700px) {
    font-size: 20px;
    top: 20%;
  }
`;

export default Project;
