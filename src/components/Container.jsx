import React from "react";

const Container = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`${className} w-[700px] lg:w[740px] mx-auto mt-20 py-10 text-left`}
    >
      {children}
    </section>
  );
};

export default Container;
