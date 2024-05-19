export default function PerfilSugerido(props) {
    return (
      <li className='profSuggest'>
        <span>
          <img src={props.picture}/>
          <div>
            <p>{props.atname}</p>
            <p>Sugestões para você</p>
          </div>
        </span>
        <div className="follow">Seguir</div>
      </li>
    );
  }