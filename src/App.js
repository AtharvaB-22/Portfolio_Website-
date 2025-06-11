import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
