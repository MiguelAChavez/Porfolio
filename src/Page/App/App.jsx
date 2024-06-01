import React from "react";
import "./app.css";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer/Footer";
import GitHub from "../../assets/Icon/GitHub";
import LinkedInIcon from "../../assets/Icon/LinkedInIcon";
import MailIcon from "../../assets/Icon/MailIcon";
import BallpenIcon from "../../assets/Icon/ballpenIcon";
import Badge from "../../components/Badge";
import Container from "../../components/Container";
import Education from "../../components/TimeLine/Education";
import ProjectsContainer from "../../components/Project/ProjectsContainer";
const App = () => {
  const cvUrl =
    "https://drive.google.com/file/d/1YFJD9iDSXGvOeGH5yJmqt6IxO8YKbkdX/view?usp=drive_link";
  return (
    <>
      <div className="background-overlay"></div>
      <Header></Header>
      <main className="app flex justify-center">
        <Container>
          <Profile />
          <h1 className="text-typing text-4xl py-1 font-bold">
            Hola! soy Miguel Angel Chavez <span className="hand">👋</span>
          </h1>

          <h3 className="text-lg tracking-wider text-emerald-950 dark:text-yellow-200">
            Desarrollador Full Stack
            <span className=" font-bold text-lg tracking-tighter text-blue-600 dark:text-blue-500">
              {" </>"}
            </span>
          </h3>
        </Container>

        <section id="Nets">
          <ul className="flex gap-x-3">
            <Badge
              link={"https://www.linkedin.com/in/miguelangelchavez-/"}
              red={"LinkedIn"}
              isDownload={true}
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

            <Badge link={cvUrl} red={"Cv"} shadow={"hover:shadow-amber-600/30"}></Badge>
          </ul>
        </section>

        <Container id={"My"} className={"pt-40"}>
          <h2>Sobre mí</h2>
          <article className="text-pretty opacity-80 leading-9">
            <p>
              Soy Miguel Angel, un entusiasta de la tecnología con una habilidad notable para
              adaptarme y aprender rápidamente.
            </p>
            <p></p>
          </article>
        </Container>

        <Container id={"Projects"} className={"pt-40"}>
          <h2>Proyectos</h2>
          <ProjectsContainer></ProjectsContainer>
        </Container>

        <Container className={"pt-40"} id={"Education"}>
          <Education title={"Educación"}>
            <BallpenIcon className={"size-5"}></BallpenIcon>
          </Education>
        </Container>

        <Container id={"Skills"} className={"pt-40"}>
          <div className="py-5 px-9 border border-gray-500/45 rounded-lg bg-slate-300/10 dark:bg-gray-800/45 dark:border-gray-700">
            <h2 className="flex gap-x-2 items-center text-2xl mb-8 border-b-2 border-gray-600 dark:border-gray-500 font-semibold text-gray-900 dark:text-white">
              Hard skills
            </h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </Container>

        <br />
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
