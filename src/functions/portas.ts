import PortaModel from "../model/porta";

export default function criarPortas(qtdade: number, ComPresente: number): PortaModel[] {
    return Array.from({ length: qtdade }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === ComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel[]) {
    return portas.map(portaAtual => {
        const igualAmodificada = portaAtual.numero === portaModificada.numero

        if (igualAmodificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desmarcar()
        }
    })

}