import Cartao from "../components/cartao"
import styles from "../styles/formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/entradaNumerica"
import { useState } from "react"

export default function Formulario() {//home é o componente porta
  const [qtdePortas, setQtdePortas] = useState(3)//estado do componente
  const [comPresente, setCompresente] = useState(1)//estado do componente
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c"> <h1>Monty Hall</h1> </Cartao>
        <Cartao>
          <EntradaNumerica text={"Quantidade de portas: "} value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica text={"Porta com Presente: "} value={comPresente} onChange={novaPortaComPresente => setCompresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>



  )
  /* const [portas, setPortas] = useState(criarPortas(4, 2))
 
   function renderizarPortas(){
     return portas.map(porta =>{
       return <Porta key={porta.numero} value={porta} onChange={novaPorta=> setPortas(atualizarPortas(portas, novaPorta))} />
     })
   }
 
    
   return (
     <div style={{
       display: "flex",
       flexDirection: ""
     }}>  
         {renderizarPortas()}
     </div>
   )*/
}
