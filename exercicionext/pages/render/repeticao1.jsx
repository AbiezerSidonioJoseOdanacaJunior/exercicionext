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
        
        return listaAprovados.map(function (nome, i) {
            return <li key={i}>{nome}</li>
        })
    }

    return (
        <ul>
          {renderLista() }
        </ul>
        

    )
}

//function renderLista() {
 //   const items = []
//
  //  for (let i = 0; i <listaAprovados.length; i++) {
    //    items.push(<li>{listaAprovados[i]}</li>)
    //}
   // return items
// }