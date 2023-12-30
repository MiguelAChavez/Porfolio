import React from "react";
import TimeItem from "./TimeItem";
import { v4 as uuidv4 } from "uuid";

const items = [
  {
    title: "Técnico en Programación de Computadores",
    date: "2021-2023",
    description: "Universidad Nacional de Lomas de Zamora",
  },
  {
    title: "Programador Java Full Stack",
    date: "2022-2023",
    description: "Argentina Programa 4.0 - Universidad de La Punta",
  },
  {
    title: "Desarrollador web con React js",
    date: "2023",
    description: "Argentina Programa 4.0 - UTN",
  },
];

const Education = ({ title, children }) => {
  return (
    <div className="py-5 px-9 border border-gray-500/45 rounded-lg bg-slate-300/10 dark:bg-gray-800/45 dark:border-gray-700">
      {title && (
        <h2 className="flex gap-x-2 items-center text-2xl mb-8 border-b-2 border-gray-600 dark:border-gray-500 font-semibold text-gray-900 dark:text-white">
          {children}
          {title}
        </h2>
      )}
      <ol className="relative border-s border-gray-900 dark:border-gray-700">
        {items.map((data) => (
          <TimeItem key={uuidv4()} {...data}></TimeItem>
        ))}
      </ol>
    </div>
  );
};

export default Education;
