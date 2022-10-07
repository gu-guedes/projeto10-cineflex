import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Assentos(props) {

    const [assentoDisponivel, setAssentoDisponivel] = useState(props.assento.isAvailable)
    const [classe, setClasse] = useState("")



    useEffect(() => {
        if (assentoDisponivel === true) {
            setClasse("#C3CFD9") //disponivel
        } else {
            setClasse("#FBE192")//indisponivel
        }
    }, [])

    function selecionarAssento(numeroAssento) {
        if (!props.assentosSelecionados.includes(numeroAssento)) {
            props.setAssentosSelecionados([...props.assentosSelecionados, numeroAssento])
        } else {

            const assentosFiltrados = props.assentosSelecionados.filter((assentoDaArray) => {
                if (assentoDaArray !== numeroAssento) {
                    return true
                } else {
                    return false
                }
            })
            props.setAssentosSelecionados(assentosFiltrados)
        }



        if (assentoDisponivel === true) {
            setClasse("#1AAE9E")// adiciona selecionado
        } else {
            alert('assento esta indisponivel') // nao adiciona selecionado
        }

        if (classe === "#1AAE9E") {
            setClasse("#C3CFD9")


            /* props.setAssentosSelecionados(props.assentosSelecionados.indexOf(props.assentosSelecionados.length - 1))  */

        }
    }

    return (
        <>
            <Assento cor={classe} onClick={() => selecionarAssento(props.assento.name)}  >
                <p>{props.assento.name}</p></Assento>
        </>
    )


}

const Assento = styled.div`
    background-color: ${props => props.cor};
    width: 26px;
    height: 26px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 15px;
    margin-right: 3px;

    p{
        font-size: 11px;
        font-family: 'Roboto', sans-serif;
    }

`
