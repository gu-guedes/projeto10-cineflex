import { Link } from "react-router-dom";

export default function Filme({ img }) {
    return (
        <Link to={`/sessoes/${img.id}`}>
            <div className="filme">
                <img src={img.posterURL} />
            </div>
        </Link>
    )
}