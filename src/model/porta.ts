
export default class PortaModel{
    #numero:number //#simboliza privado
    #sorteada:boolean
    #selecionada:boolean
    #aberta:boolean

    constructor(numero: number,sorteada=false, selecionada=false, aberta= false){
        this.#numero= numero
        this.#sorteada=sorteada
        this.#selecionada=selecionada
        this.#aberta=aberta
    }
    //metodos
    get numero(){
        return this.#numero
    }
    get sorteada(){
        return this.#sorteada
    }
    get selecionada(){
        return this.#selecionada
    }
    get aberta(){
        return this.#aberta
    }
    get fechada(){
        return !this.aberta
    }

    desmarcar(){
        const selecionada = false
        return new PortaModel(this.numero, this.sorteada,selecionada, this.aberta)
    }

    altenarSelecao(){
        const selecionada =!this.selecionada
        return new PortaModel(this.numero, this.sorteada,selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.sorteada,this.selecionada, aberta)
    }
}