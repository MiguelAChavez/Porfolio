import { useEffect, useRef } from "react";
import "./textStyle.css";
function TextContent() {
  const textContentRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!textContentRef.current) return;
      const { clientX, clientY } = ev;
      const rect = textContentRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      textContentRef.current.style.setProperty("--x", `${x}px`);
      textContentRef.current.style.setProperty("--y", `${y}px`);
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return (
    <section className="text-content" ref={textContentRef}>
      <h1>Hola Mundo;</h1>
      <span className="text-typing">Programador...</span>
    </section>
  );
}

export default TextContent;
