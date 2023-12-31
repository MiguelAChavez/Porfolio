import React from "react";

export const DarkIcon = ({ className }) => {
  return (
    <svg
      className={className && ""}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      <path d="M19 11h2m-1 -1v2" />
    </svg>
  );
};

export const LightIcon = ({ className }) => {
  return (
    <svg
      className={className && ""}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7">
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values="
            M3 12.6h-2m11 -11v3m8 8h3m-11 11v-3m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.8 .7m-12.1 -.7l-.7 .7;
            M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7;
            M3 12.6h-2m11 -11v3m8 8h3m-11 11v-3m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.8 .7m-12.1 -.7l-.7 .7;"
        />
      </path>
    </svg>
  );
};
