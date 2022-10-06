import Topo from "./Topo";
import Subtopo from "./Subtopo";
import EscolhaFilmes from "./EscolhaFilmes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscolhaSessao from "./EscolhaSessao";
import EscolhaAssentos from "./EscolhaAssentos";

export default function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<EscolhaFilmes/>}/>
                <Route path="/sessoes/:idFilme" element={<EscolhaSessao/>}/>
                <Route path="/assentos/:idSessao" element={<EscolhaAssentos/>}/>
            </Routes>
            
        </BrowserRouter>

    )
}