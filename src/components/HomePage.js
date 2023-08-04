import React from "react";
import styled from "styled-components";

const HomeSection = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  background-color: #a9a9a92b;
  z-index: 0;
  margin-left: 15px;

  @media screen and (max-width: 1200px) {
    height: 90vh;
  }

  @media screen and (max-width: 799px) {
    height: 140vh;
  }

  @media screen and (max-width: 550px) {
    height: 110vh;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 300px;
`;

const Image = styled.img`
  margin-top: 30px;
  width: 100%;
`;

const Content = styled.div`
  flex: 1 1 400px;
  margin-top: 20px;

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const H1 = styled.h1`
  color: rgb(67 0 86);
  font-weight: bold;
  margin-left: 23px;
  font-size: 55px;
  text-shadow: -1px 1px 1px black;

  span {
    color: rgb(67 0 86);
    text-shadow: 1px 1px 1px black;
  }

  #span2 {
    color: #ffc800;
  }
`;

const P = styled.p`
  margin-left: 23px;
`;

const Button = styled.button`
  width: 150px;
  height: 32px;
  letter-spacing: 3px;
  background-color: blue; /* Change this to your desired blue color */
  color: white;
  border-radius: 5px;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffc800;
    color: black;
    border: none;
  }
`;

function HomePage() {
  return (
    <div>
      <HomeSection>
        <Content>
          <H1>
            <span>Electronic Products</span>
            <br />
            Up To <span id="span2">50%</span> Off
          </H1>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </P>
          <div className="btn">
            <Button>Shop Now</Button>
          </div>
        </Content>
        <ImageContainer>
          <Image src="./images/background.png" alt="" />
        </ImageContainer>
      </HomeSection>
    </div>
  );
}

export default HomePage;