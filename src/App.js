import Topo from "./Topo";
import EscolhaFilmes from "./EscolhaFilmes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscolhaSessao from "./EscolhaSessao";
import EscolhaAssentos from "./EscolhaAssentos";
import Sucesso from "./Sucesso";
import GlobalStyle from "./GlobalStyle";

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyle/>
            <Topo />
            <Routes>
                <Route path="/" element={<EscolhaFilmes/>}/>
                <Route path="/sessoes/:idFilme" element={<EscolhaSessao/>}/>
                <Route path="/assentos/:idSessao" element={<EscolhaAssentos/>}/>
                <Route path="/sucesso" element={<Sucesso/>}/>
            </Routes> 
            
        </BrowserRouter>

    )
}