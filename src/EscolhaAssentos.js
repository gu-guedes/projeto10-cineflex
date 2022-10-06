import Rodapé from "./Rodapé"
export default function EscolhaAssentos() {
    return (
        <>
            <div className="subtopo">
                <h2>selecione o(s) assento(s)</h2>
            </div>
            <div className="todos-assentos">
                <div className="assento">
                    <p>13</p></div>
                <div className="assento">
                    <p>13</p></div>
                <div className="assento">
                    <p>13</p></div>
                <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
                    <div className="assento">
                    <p>13</p></div>
            </div>
            <div className="container-legenda">
                <div className="legenda">
                    <div className="bolinha1"></div>
                    <p>Selecionada</p>
                </div>
                <div className="legenda">
                    <div className="bolinha2"></div>
                    <p>Disponível</p>
                </div>
                <div className="legenda">
                    <div className="bolinha3"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="dados-comprador">
                <p>Nome do comprador:</p>
                <input placeholder="  Digite seu nome..."></input>
                <p>CPF do comprador</p>
                <input placeholder="  Digite seu CPF..."></input>
            </div>
            <button className="reservar">
                <p>Reservar assento(s)</p>
            </button>
           <Rodapé/>
        </>
    )
}