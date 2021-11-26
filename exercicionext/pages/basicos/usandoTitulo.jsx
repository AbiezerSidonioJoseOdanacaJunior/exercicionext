import Titulo from "../../components/Titulo"
export default function usandoTitulo() {
    return (
        <div>
            <Titulo
            principal = "Págna Principal"
            secundario = "Págna de Edtar, cadastrar, excluir..."
            />
            <Titulo
            principal = "Faz seu Login"
            secundario = "Digite seu email por gentileza!"
            pequeno = {true}
            />
            <Titulo
            principal = "Faz seu Login"
            secundario = "Digite seu email por gentileza!"
            pequeno 
            />
        </div>
    )
}