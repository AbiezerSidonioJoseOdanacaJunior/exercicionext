function acao1() {
    console.log("acao1")
}


export default function botao() {

    function acao2() {
        console.log("acao2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick = {acao1} >Botao de Teste</button>
            <button onClick = {acao2} >clickAcao2</button>
            <button onClick= {function a() {
                console.log("acao3")
            }}> ClickAcao3</button>
            <button onClick={() =>console.log("acao4")}>ClickAcao4</button>
            <button onClick={acao5}>ClickAcao5</button>
            <button onClick={e => acao5(e.altKey)}>ClickAcao5V2</button>
            <div>
                <input type="text" onChange = {e => console.log=(e.target.value)} />
            </div>
        </div>
    )
}