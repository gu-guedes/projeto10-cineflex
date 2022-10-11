import Topo from "./Topo";
import EscolhaFilmes from "./EscolhaFilmes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscolhaSessao from "./EscolhaSessao";
import EscolhaAssentos from "./EscolhaAssentos";
import Sucesso from "./Sucesso";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

export default function App() {
    const [dados, setDados] = useState({})
    
    const [dadosFilmes, setDadosFilmes] =  useState({})
    
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    console.log(assentosSelecionados)
    
    const [nomes, setNomes] = useState([])
    
    return (
        <BrowserRouter>
        <GlobalStyle/>
            <Topo />
            <Routes>
                <Route path="/" element={<EscolhaFilmes/>}/>
                <Route path="/sessoes/:idFilme" element={<EscolhaSessao/>}/>
                <Route path="/assentos/:idSessao" element={<EscolhaAssentos nomes={nomes} setNomes={setNomes} dados={dados} setDados={setDados} dadosFilmes={dadosFilmes} setDadosFilmes={setDadosFilmes} assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados}/>}/>
                <Route path="/sucesso" element={<Sucesso nomes={nomes}  dados={dados}  dadosFilmes={dadosFilmes} setNomes={setNomes} setDados={setDados} setDadosFilmes={setDadosFilmes} setAssentosSelecionados={setAssentosSelecionados}/>}/>
            </Routes> 
            
        </BrowserRouter>

    )
}