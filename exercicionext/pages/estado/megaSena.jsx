import { useState } from "react"
  
export default function (props) {
    const [gerar, setGerar] = useState("0")

    function aletatorio() {
        setGerar(gerar = "1, 3, 5, 6, 7, 9" )
    }


    return (

        <div style={{display: "flex", flexDirection: "column"}}> 
            {gerar}
            <button onClick={aletatorio}>Gere Numero</button>
        </div>
    )
}