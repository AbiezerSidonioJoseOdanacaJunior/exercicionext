export default function jsx4() {
   const subtitulo = "Eu sou javascript! Por favor me cham dentro da função" 
   const trechoH3 = <h3>{3 * 3}</h3>
    
    return (
        <div>
            <h1>Integração JS  e JSX </h1>
           <h2> {subtitulo} </h2>
            <h3> {trechoH3} </h3>
            <h4> {Math.max (39, 10)} </h4>
            <h5> {entre(9, 3, 19)} </h5>
        </div>
        
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
    return "Sim"
    }
    else {
        return "Não"
    }
}