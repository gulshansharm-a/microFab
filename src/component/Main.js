import React, { useState } from "react";
import styled from "styled-components";
import LastBox from "./LastBox";
function Main() {
    const capsuleHeights = [89, 164, 133, 158, 176, 201, 209];
    const text=[10,23,49,64, 64,65,67];
    const years =[2017,2018,2019,2020,2021,2022,2023]
    const [activeIndex, setActiveIndex] = useState(null);
    const handleCapsuleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      <TwoColumnContainer>
        <Left>
          <Image src="mf.png" alt="Image" />
        </Left>
        <Right>
          <Top>
            <div className="Top">
              <img src="question.svg" alt="" />
              <span>Why MicroFab?</span>
            </div>
            <div className="side">
              <div className="exp">4+ Decades of Industry Experience</div>
              <img src="bag.svg" alt="" />
            </div>
          </Top>
          <mid>
            <RightContiner>
              <Rig>
                <Middle>
                  <div className="set">
                    <img src="air.svg" alt="" />
                    <div>BFS</div>
                    <img src="right.svg" alt="" />
                  </div>
                </Middle>
                <Middle>
                  <div className="set">
                    <img src="bottel.svg" alt="" />
                    <div>FFS</div>
                    <img src="right.svg" alt="" />
                  </div>
                </Middle>
              </Rig>

              <Container>
                <Row>
                  <Box2></Box2>
                  <Box1></Box1>
                </Row>
                <Row>
                  <Box21></Box21>
                  <Box>
                    <img src="group.svg" alt="" />
                    <h3>150+</h3>
                    <h4>Moulds</h4>
                  </Box>
                  <Box22></Box22>
                </Row>
                <Row>
                  <Box1></Box1>
                  <Box2></Box2>
                </Row>
              </Container>
            </RightContiner>
          </mid>

          <Last>
            <CapsuleContainer>
              {capsuleHeights.map((height, index) => (
                <CapsuleWrapper key={index}>
                  <Capsule
                    key={index}
                    height={height}
                    active={index === activeIndex}
                    onClick={() => handleCapsuleClick(index)}
                  >
                    <Years>{years[index]}</Years>
                  </Capsule>
                  <CapsuleText show={index === activeIndex}>
                    {text[index]}
                  </CapsuleText>
                </CapsuleWrapper>
              ))}
            </CapsuleContainer>
            <LastBox />
          </Last>
        </Right>
      </TwoColumnContainer>
    </div>
  );
}
export default Main;
const TwoColumnContainer = styled.div`
  display: flex;
  min-height: 1600px;

  height: 919px;
  flex-shrink: 0;
  margin: 2px;
  border-radius: 20px;
  background-color: white;
`;
const Left = styled.div`
  img {
    margin: 20px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 623px;
  height: 266px;
  margin-left: 20px;
  border-radius: 20px;
  background: var(--p-v-18, #cdd7d8);
  .side {
    display: flex;
    justify-content: end;
    gap: 50px;
    margin-top: 40px;
    img {
      margin-top: 40px;
    }
  }
  .Top {
    display: inline-flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 60px;
    background: #fff;
    width: 190px;
    height: 44px;
    margin-left: 17px;
    margin-top: 16px;
    opacity: 0.8;
    img {
      background-color: var(--p-v-18, #cdd7d8);
      border-radius: 20px;
    }
  }
  .exp {
    width: 351px;
color: var(--text, #111);
font-family: Clash Display;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 103%; 
margin-top:45px;
  }
`;
const Middle = styled.div`
  display: flex;
  //flex-direction: column;
  width: 345px;
  height: 144px;
  box-sizing: border-box;
  padding: 49px 34px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  margin-left: 20px;
  margin-bottom: 29px;
  margin-top: 15px;
  margin-right: 55px;
  background: #cdd7d8;
  .set {
    display: flex;
    width: 100px;
    height: 21px;
    gap: 20px;
    flex-shrink: 0;
  }
`;

const Rig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const RightContiner = styled.div`
  display: flex;
  flex-direction: row;
`;
const Row = styled.div`
  width: 198px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Box1 = styled.div`
  width: 91px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #8aa6aa;
`;
const Box2 = styled.div`
  width: 91px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(138, 166, 170, 0.5);
`;
const Box21 = styled.div`
  width: 33px;
  height: 89px;

  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgba(138, 166, 170, 0.5);
`;
const Box22 = styled.div`
  width: 33px;
  height: 89px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #8aa6aa;
`;
const Box = styled.div`
  width: 132px;
  height: 89px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  gap: 5px;
  h3 {
    color: #0e0e0e;
    font-family: Clash Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h4 {
    color: var(--text, #111);
    font-family: Clash Display;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const Last = styled.div`
  width: 625px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  margin-left: 20px;
  background: var(--text, #111);
`;
const CapsuleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  gap:20px;
  max-width: 400px; /* Adjust as needed */
  
`;

const CapsuleWrapper = styled.div`
  position: relative;
  display :flex;
  flex-direction:row;
  justify-content: start;
  align-items:start;
`;

const Capsule = styled.div`
  width: 60px; /* Adjust the size as needed */
  height: ${(props) => props.height}px; /* Use the provided height prop */
  border-radius: 50px; /* Half of the height */
  background-color: ${(props) => (props.active ? "#8AA6AA" : "white")};
  cursor: pointer;
  align-items:center;
  margin-left: -9px;
  margin-right: 29px;
  margin-top: 40px;
`;

const CapsuleText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -20px; /* Adjust as needed */
  left: 30%;
  transform: translateX(-50%);
  padding: 20px 10px;
  
  color: white;
  border-radius: 5px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
const Years= styled.div`
height: inherit;
width: inherit;
display: flex;
justify-content: center;
align-items: center;
`;