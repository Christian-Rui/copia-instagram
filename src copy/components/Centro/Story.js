export default function Story(props) {
    return (
        <div className="Story">
            <div className="profile-image">
                <img src={props.caminhoDaImagem} alt=""/>
            </div>
            <div className="userName">
                <p>{props.nomeUsuario}</p>
            </div>
        </div>
    )
}