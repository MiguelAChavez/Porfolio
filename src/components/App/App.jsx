import "./App.css";
import NavBar from "../NavBar/NavBar.jsx";
import TextContent from "../TextContent/TextContent.jsx";
import Footer from "../Footer/Footer.jsx";
import SkillContainer from "../Skills/SkillsContainer.jsx";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <TextContent></TextContent>
      <main className="app">
        <div className=""></div>
        <SkillContainer></SkillContainer>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
