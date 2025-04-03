import React, { useState } from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import SideMenuComponent from "./components/SideMenuComponent";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  
  return (
    <Container>
      <SideMenuComponent 
        selectedTab={selectedTab} 
        changeTab={setSelectedTab} 
      />
      <MainContent>
        {selectedTab === "home" && <HomeComponent />}
        {/* Add other tabs here when needed */}
      </MainContent>
    </Container>
  );
};

export default App;