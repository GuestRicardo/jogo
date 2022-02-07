import Porta from "../../../components/porta"
import { useEffect, useState } from "react"
import criarPortas, { atualizarPortas } from "../../../functions/portas"
import styles from "../../../styles/jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"


export default function jogo() {

    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])


    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdePortasValida = portas >= 3 && portas <= 100
        const temPresesenteValido = temPresente >= 1 && temPresente <= portas
        setValido(qtdePortasValida && temPresesenteValido)
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))

    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ?
                    renderizarPortas() :
                    <h2>VALORES INVALIDOS</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Game</button>
                </Link>
            </div>
        </div>
    )
}