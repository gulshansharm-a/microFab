import styled from "styled-components";
import React from 'react'

function LastBox() {
  return (
    <Box>
      <div className="text">Machinery sold over years</div>
      <div className="img">
        <img src="tempo.svg" alt="" />
      </div>
    </Box>
  );
}

export default LastBox;
const Box = styled.div`
width:540px;
height: 120px;
  display: inline-flex;
  padding: 16px 25px 17px 20px;
  justify-content: center;
  align-items: center;
  
  margin: 20px;
  margin-top: 80px;

  border-radius: 15px;
  background: #fff;
  .text {
    color: var(--text, #111);
    font-family: Clash Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 290px;
  }
  .img {
    width: 52px;
    height: 52px;
  }
`;