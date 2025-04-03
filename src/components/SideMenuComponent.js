import styled, { css } from "styled-components";
import React from "react";

const Container = styled.div`
  width: 80px;
  background: #0d1d2c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${props => props.isSelected && css`
    background: rgba(255,255,255,0.1);
  `}
  
  &:hover {
    background: rgba(255,255,255,0.05);
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
`;

const SideMenuComponent = ({ selectedTab, changeTab }) => {
  return (
    <Container>
      <MenuItem 
        isSelected={selectedTab === "home"} 
        onClick={() => changeTab("home")}
      >
        <Icon src={`${process.env.PUBLIC_URL}/images/wallet.png`} alt="Home" />
      </MenuItem>
      
    </Container>
  );
};

export default SideMenuComponent;