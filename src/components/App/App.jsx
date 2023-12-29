import React from "react";
import "./app.css";
import Header from "../Header/Header";
import Perfil from "../Perfil";
import { v4 as uuidv4 } from "uuid";
import Footer from "../Footer/Footer";
import GitHub from "../../assets/Icon/GitHub";
import LinkedInIcon from "../../assets/Icon/LinkedInIcon";
import MailIcon from "../../assets/Icon/MailIcon";
import Badge from "../Badge";
import Container from "../Container";
import Education from "../TimeLine/Education";

const App = () => {
  return (
    <>
      <div className="background-overlay "></div>
      <Header></Header>
      <main id={"Home"} className="app flex justify-center">
        <Container id={""}>
          <Perfil key={uuidv4()} />
          <h1 className="text-typing text-4xl font-bold">
            Hola! soy Miguel Angel Chavez 👋
          </h1>

          <h2 className="text-base tracking-wider">
            Desarrollador FullStack Java.
            <span className=" font-bold text-lg tracking-tighter text-blue-600 dark:text-blue-500">
              {" </> \n"}
            </span>
          </h2>
        </Container>

        <section id="Nets">
          <ul className="flex gap-x-3">
            <Badge
              link={"https://www.linkedin.com/in/miguelangelchavez-/"}
              red={"LinkedIn"}
              shadow={"hover:shadow-blue-500/50"}
            >
              <LinkedInIcon className="size-5"></LinkedInIcon>
            </Badge>

            <Badge
              link={"https://github.com/MiguelAChavez"}
              red={"GitHub"}
              shadow={"hover:shadow-indigo-500/50"}
            >
              <GitHub className="size-5"></GitHub>
            </Badge>

            <Badge
              link={"mailto:chavez.miguel.angel154@gmail.com"}
              red={"chavez.miguel.angel154@gmail.com"}
              shadow={"hover:shadow-rose-700/50 "}
            >
              <MailIcon className="size-5"></MailIcon>
            </Badge>
          </ul>
        </section>

        <Container id={"My"}>
          <Education title={"Educación"}></Education>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
