import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"


export default function () {

    const estilo = {
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "Wrap",
        alignItems: "center",
    }

    const [qtd, setQtd] = useState(6)
    const [numeros, setNumeros] = useState(mega(qtd))


    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }



    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
            <h1>Mega Sena</h1>
            <div style={estilo}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtd} 
                onChange={ev => setQtd(ev.target.value)}/>

                <button onClick={() => setNumeros(mega(qtd))}>
                    Gerear Aposta
                </button>
            </div>
        </div>
    )
}