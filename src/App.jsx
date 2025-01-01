import React, { useEffect, useState } from "react";
import EidtorOne from "./Components/EidtorOne";
import UseLocalStorage from "./hooks/UseLocalStorage";
import TitleEditor from "./Components/TitleEidtor";
import ChangeView from "./Components/ChangeView";

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
  }, [html, css, js])
  const [show , setShow]  =  useState(false)
  const [Titleshow , setTitleShow]  =  useState(false)
  const [layout, setLayout] = useState("flex-col")
  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  }
  return (
    <div className="h-screen  w-full flex flex-col justify-center items-center ">
      <div className=" w-full flex justify-between items-center  bg-[#3f3e41] px-4 text-white pt-3">
       <TitleEditor/>
       <div className="RightSide gap-2  flex">
          <ChangeView  onLayoutChange={onLayoutChange}/>
          <div className="auth flex  justify-center items-center  gap-2">
            <button className="bg-gray-800/40 px-5 py-2 rounded-md">LogIn</button>
            <button className="bg-gray-800/40 px-5 py-2 rounded-md">SignUp</button>
          </div>
      </div>

      </div>
      
      <div className={`LayOut w-full h-full flex ${layout}`}>
       <div className="Pane h-1/2 w-full flex   top-pen bg-[#3f3e41]  ">
        <EidtorOne
          language="xml"
          logo={<i className="ri-html5-fill text-red-400"></i>}
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <EidtorOne
          language="css"
          displayName="CSS"
          logo={<i className="ri-css3-fill text-blue-800"></i>}
          value={css}
          onChange={setCss}
        />
        <EidtorOne
          language="javascript"
          logo={<i className="ri-javascript-fill text-amber-700"></i>}
          displayName="Js"
          value={js}
          onChange={setJs}
        />
        </div>
        <div className="Pane h-[50%] w-full flex bottom-pen   ">
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
  );
};

export default App;
