function Formulario(){

    function cadastrar(e){
        console.log('Cadastrou um usuário')
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={cadastrar}>                <div>
                    <input type="text" placehloder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastro"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario