export default function Estilo(props) {
    return (
        <div> 
            <h1 style={{backgroundColor: props.numero >= 0 ? "#2D2" : "#D22"}}> 
                Texto representativo
            </h1>
        </div>
    )
}