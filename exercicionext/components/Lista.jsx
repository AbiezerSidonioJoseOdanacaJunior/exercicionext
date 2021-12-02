export default function Lista(props) {
    return (
        <div>
            <h1>Lista de Itens com alguma coisa </h1>
                <ul>
                    {props.children}
                </ul>
        </div>
    )
}