import React, { useEffect, useState } from "react";
import EidtorOne from "./Components/EidtorOne";

import UseLocalStorage from "./hooks/UseLocalStorage";

const App = () => {
  const [html, setHtml] = UseLocalStorage(  "html" ,"");
  const [css, setCss] = UseLocalStorage(  "css" ,"");
  const [js, setJs] = UseLocalStorage(  "js" ,"");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
        </html>
   `)
    }, 250)
  return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <div className="h-screen  w-full flex flex-col justify-center items-center ">
      <div className="Pane   top-pen bg-[#3f3e41]  ">
        <EidtorOne
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <EidtorOne
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <EidtorOne
          language="javascript"
          displayName="Js"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="Pane bottom-pen   ">
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
