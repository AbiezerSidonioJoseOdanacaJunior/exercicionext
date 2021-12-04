import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const estilo = {
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    const [numero, setNumero] = useState(0)


    function inc() {
        setNumero(numero + 1)
    }

    function dec() {
        setNumero(numero - 1)
    }
  
    return (
        <div style={estilo}> 
            <h1>Contador</h1>
            <ContadorDisplay numero = {numero}/>
            <div>
            <button onClick={dec}> - </button>
            <button onClick={inc}> + </button>
            </div>
        </div>
    )
}