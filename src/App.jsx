import React, { useState } from 'react'
import EidtorOne from './Components/EidtorOne'

const App = () => {
  const [html , setHtml] =  useState('')
  const [css , setCss] =  useState('')
  const [js , setJs] =  useState('')
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center ">
     <div className='Pane   top-pen bg-[#3f3e41]  relative'>
        <EidtorOne 
         language='xml'
         displayName='HTML'
         value={html}
         onChange={setHtml} />
        <EidtorOne 
        language='css'
        displayName='CSS'
        value={css}
        onChange={setCss} />
        <EidtorOne 
         language='javascript'
         displayName='Js'
         value={js}
         onChange={setJs}/>
     </div>
     <div className='Pane bottom-pen   '>
      <iframe  title='output' sandbox='allow-scripts'  width='100%' height='100%'   />
     </div>
    </div>
  )
}

export default App