import React from "react";
import AppContainer from "./App.styles";
import Header from "./component/header/header";
import { createGlobalStyle } from "styled-components";
import SearchComponent from "./component/search/search-component";

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #E5E5E5
 }

 *{
  margin:0px;
   padding:0px;

 }
`
function App() {
  return (
     <>
    <GlobalStyle/>
    <AppContainer>
     <Header/>
     <SearchComponent/>
    </AppContainer>
     
     </>
   

  );
}

export default App;
