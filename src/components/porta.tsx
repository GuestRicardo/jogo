import style from "../styles/Porta.module.css"
import PortaModel from "../model/porta"
import Presente from "../components/presente"
import temPresente from "../functions/portas";

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void //parametro obrigatorio

}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? style.selecionada : ''
    const alternarSelecao = e => props.onChange(porta.altenarSelecao())
    const abrir = e => {
        e.stopPropagation()//para sumir a porta, nesse caso esta sendo encerrado o evento
        props.onChange(porta.abrir())
    }
    function renderizarPorta() {
        return (


            <div className={style.porta}>
                <div className={style.numero}>{porta.numero}</div>
                <div className={style.macaneta} onClick={abrir}></div>

            </div>

        )
    }

    return (
        <>
            <div className={style.area} onClick={alternarSelecao}>
                <div className={`${style.estrutura} ${selecionada}`}>
                    {porta.fechada ?
                        renderizarPorta() : 
                        porta.sorteada ? <Presente /> : false
                    }
                </div>
                <div className={style.chao}></div>
            </div>

        </>
    )
}