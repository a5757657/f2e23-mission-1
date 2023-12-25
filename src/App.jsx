import { ThemeProvider } from "styled-components";
import LoadingPage from "./components/LoadingPage";
import { useState, useEffect } from "react";
import Aos from "aos";
import "./styles/aos.css";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Banner from "./pages/Banner";
import Proposition from "./pages/Proposition";
import Event from "./pages/Event";
import Issue from "./pages/Issue";
import Action from "./pages/Action";
import EndTitle from "./pages/EndTitle";
import Footer from "./pages/Footer";

import theme from "./theme";

function App() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LoadingPage display={display} setDisplay={setDisplay} />
      {!display && (
        <>
          <Navbar />
          <BottomNavbar />
          <Banner />
          <Proposition />
          <Event />
          <Issue />
          <Action />
          <EndTitle />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
