import "./App.css";
import NavBar from "../NavBar/NavBar.jsx";
import TextContent from "../TextContent/TextContent.jsx";
import Footer from "../Footer/Footer.jsx";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <TextContent></TextContent>
      <main className="app">
        <div className=""> </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
