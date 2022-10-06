import { useParams } from "react-router-dom"
import Rodapé from "./Rodapé"
import axios from "axios"
import { useEffect, useState } from "react"


export default function EscolhaSessao(){
    const[sessao, setSessao] = useState(undefined)
    const {idFilme} = useParams()
    console.log(sessao)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((res) => {
            console.log(res.data)
            setSessao(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if(sessao === undefined){
        return <div>carregandooo</div>
    }

    return(
        <>
         <div className="subtopo">
            <h2>selecione o horário</h2>
        </div>
        <div className="sessao">
            <p>quinta feira - 12/93/1000</p>
            <div className="horarios"> 
            <button>19:00</button>
            <button>19:00</button>
            </div>
        </div>
        <div className="sessao">
            <p>Quinta-feira - 24/06/2000</p>
            <div className="horarios"> 
            <button>15:00</button>
            <button>19:00</button>
            </div>
        </div>
       {/*  <div className="sessao">
            <p>{sessao.days[0].weekday} - {sessao.days[0].date}</p>
            <div className="horarios"> 
            <button>{sessao.days[0].showtimes[0]}</button>
            <button>{sessao.days[0].showtimes[1]}</button>
            </div>
        </div> */}
        <Rodapé/>
        </>
       
    )
}