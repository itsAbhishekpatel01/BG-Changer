import { useState } from "react"
import Button from "./componenets/Button"

function App() {
  const [color, setColor] = useState("olive")



  return (
    <div className="w-screen h-screen duration-300"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <Button onClick={()=>setColor("violet")} color = {"violet"}/>
          <Button onClick={()=>setColor("indigo")} color = {"indigo"}/>
          <Button onClick={()=>setColor("blue")} color = {"blue"}/>
          <Button onClick={()=>setColor("green")} color = {"green"}/>
          <Button onClick={()=>setColor("yellow")} color = {"yellow"}/>
          <Button onClick={()=>setColor("orange")} color = {"orange"}/>
          <Button onClick={()=>setColor("red")} color = {"red"}/>
          

        </div>
      </div>
    </div>
  )
}

export default App