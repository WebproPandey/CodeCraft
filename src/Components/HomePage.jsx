import React, { useEffect, useState } from "react";
import EidtorOne from "./EidtorOne";
import UseLocalStorage from "../hooks/UseLocalStorage";
import TitleEditor from "./TitleEidtor";
import ChangeView from "./ChangeView";

const HomePage = () => {

    const [html, setHtml] = UseLocalStorage("html", "");
    const [css, setCss] = UseLocalStorage("css", "");
    const [js, setJs] = UseLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");
    const [editorLayout, setEditorLayout] = useState("");
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
           <body>${html}</body>
           <style>${css}</style>
           <script>${js}</script>
          </html>
     `);
      }, 250);
      return () => clearTimeout(timeout);
    }, [html, css, js]);
    const [layout, setLayout] = useState("flex-col");
    const [paneLayout, setPaneLayout] = useState("h-1/2 w-full ");
  
    const onLayoutChange = (newLayout) => {
      setLayout(newLayout);
    };
    const OnPaneLayOutChange = (newLayout) => {
      setPaneLayout(newLayout);
    };
    const EditorPaneLayOutChange = (newLayout) => {
      setEditorLayout(newLayout)
    }
  return (
    <div className="h-screen  w-full flex flex-col justify-center items-center ">
    <div
      style={{
        paddingTop: layout === "flex-row" ? "1rem" : "0.5rem",
        paddingBottom: layout === "flex-row" ? "0.5rem" : "0.5rem",
      }}
      className="w-full flex justify-between items-center bg-[#3f3e41] px-4 text-white   "
    >
      <TitleEditor />
      <div className="RightSide gap-2  flex">
        <ChangeView
          EditorPaneLayOutChange={EditorPaneLayOutChange}
          onLayoutChange={onLayoutChange}
          OnPaneLayOutChange={OnPaneLayOutChange}
        />
        <div className="auth flex  justify-center items-center  gap-2">
          <button className="bg-gray-800/40 px-5 py-2 rounded-md">
           <i className="ri-save-fill "></i>
         </button>
          <button className="bg-gray-800/40 px-5 py-2 rounded-md">
            LogIn
          </button>
          <button className="bg-gray-800/40 px-5 py-2 rounded-md">
            SignUp
          </button>
        </div>
      </div>
    </div>

    <div className={`LayOut w-full h-full flex ${layout}`}>
      <div
        className={`Pane ${paneLayout} flex   top-pen bg-[#3f3e41]  `}
        style={{
          width: layout === "flex-row" || layout === "flex-row-reverse" ? "40%" : "100%",
        }}
      >
        <EidtorOne
          language="xml"
          logo={<i className="ri-html5-fill text-red-400"></i>}
          displayName="HTML"
          value={html}
          onChange={setHtml}
          layout={editorLayout}
        />
        <EidtorOne
          language="css"
          displayName="CSS"
          logo={<i className="ri-css3-fill text-blue-800"></i>}
          value={css}
          onChange={setCss}
          layout={editorLayout}
        />
        <EidtorOne
          language="javascript"
          logo={<i className="ri-javascript-fill text-amber-700"></i>}
          displayName="Js"
          value={js}
          onChange={setJs}
          layout={editorLayout}
        />
      </div>
      <div
        className={`Pane   ${paneLayout}  flex bottom-pen  `}
        style={{
          width: layout === "flex-row" || layout === "flex-row-reverse" ? "60%" : "100%",
          paddingTop: layout === "flex-row" || layout === "flex-row-reverse" ? "0.5rem" : "0rem",
        }}
      >
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
  )
}

export default HomePage