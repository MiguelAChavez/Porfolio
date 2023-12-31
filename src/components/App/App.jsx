import React from "react";
import "./app.css";
import Header from "../Header/Header";
import Profile from "../Profile";
import Footer from "../Footer/Footer";
import GitHub from "../../assets/Icon/GitHub";
import LinkedInIcon from "../../assets/Icon/LinkedInIcon";
import MailIcon from "../../assets/Icon/MailIcon";
import BallpenIcon from "../../assets/Icon/ballpenIcon";
import Badge from "../Badge";
import Container from "../Container";
import Education from "../TimeLine/Education";

const App = () => {
  return (
    <>
      <div className="background-overlay "></div>
      <Header></Header>
      <main className="app flex justify-center">
        <Container>
          <Profile />
          <h1 className="text-typing text-4xl py-1 font-bold">
            Hola! soy Miguel Angel Chavez <span className="hand">👋</span>
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
        <Container id={"My"} className={"pt-20"}>
          <h2 className="text-2xl font-semibold">About</h2>
          <article className="text-pretty opacity-80 leading-9">
            <p>
              Soy Miguel Ángel, un entusiasta de la tecnología con una habilidad
              notable para adaptarme y aprender rápidamente.
            </p>
            <p>
              Mi experiencia en el campo tecnológico me ha permitido enfrentar
              desafíos con una mentalidad abierta y buscar soluciones
              innovadoras. Creo firmemente en el poder de la tecnología para
              mejorar nuestras vidas y estoy constantemente buscando formas de
              aplicar mis habilidades técnicas para hacer una diferencia
              positiva.
            </p>
          </article>
        </Container>
        <Container className={"pt-40"} id={"Education"}>
          <Education title={"Educación"}>
            <BallpenIcon className={"size-5"}></BallpenIcon>
          </Education>
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
