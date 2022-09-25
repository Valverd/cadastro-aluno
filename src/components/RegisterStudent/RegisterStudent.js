import Nav from "../Nav/Nav";

export default function RegisterStudent() {
    return(
        <div>
            <Nav />
            <form>
                <input placeholder="Nome"></input>
                <input type={'date'}></input>
                <input placeholder="Naturalidade"></input>
                <input placeholder="Telefone (res.)"></input>
                <input placeholder="Telefone (cel.)"></input>
                <input placeholder="Nome da Mãe"></input>
                <input placeholder="CPF da Mãe"></input>
                <input placeholder="Nome do Pai"></input>
                <input placeholder="CPF do Pai"></input>
            </form>
        </div>
    )
}