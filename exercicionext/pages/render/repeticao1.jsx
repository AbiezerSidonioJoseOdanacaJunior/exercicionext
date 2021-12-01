export default function repeticao1() {
    const   listaAprovados = [
        'Maria',
        'Pedro',
        'João',
        'Abiezer',
        'Viny',
        'Mamede',
        'Albertin',
        'Humberin',
    ]

    function renderLista() {
        const items = []

        for (let i = 0; i <listaAprovados.length; i++) {
            items.push(<li>{listaAprovados[i]}</li>)
        }
        return items
    }

    return (
        <ul>
          {renderLista() }
        </ul>
        

    )
}