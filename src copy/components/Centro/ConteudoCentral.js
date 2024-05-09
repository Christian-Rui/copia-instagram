import Stories from './Stories.js'
import './conteudoCentral.css'
import Feed from './Feed.js'


export default function ConteudoCentral() {
    return (
        <>
            <div className='conteudoCentral'>
                <Stories></Stories>
                <Feed></Feed>
                {/* <div className="Feed">
                    O Conteúdo do Feed virá aqui
                </div> */}
            </div>


        </>
    )
}