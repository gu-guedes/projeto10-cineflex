import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ img }) {
    
    return (
        <Link to={`/sessoes/${img.id}`}>
            <CapaFilme>
                <img src={img.posterURL} />
            </CapaFilme>
        </Link>
    )
}

const CapaFilme = styled.div`
    margin-top: 11px;
    width: 145px;
    height: 209px;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
    width: 129px;
    height: 193px;

    }

`
