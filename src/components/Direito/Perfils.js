import './perfils.css'

export default function Perfils(props) {
    return(
        <div className="perfils">
            <img src={props.img}></img>
            <div className='textos'>
                <p className="nome">{props.nome}</p>
                <p className={`subDescricao ${props.subDescricao == "Sugestões para você" ? 'sugestoesDescri' : ''}`}>
                    {props.subDescricao}
                </p>
            </div>
            <p className="btn">{props.btn}</p>
        </div>
    );
}