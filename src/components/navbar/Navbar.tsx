import style from './navbar.module.css'

export default function Navbar() {


    return (
        <div className={style.container}>
            <div className={style.boxLogo}>
                <img src='next.svg'></img>
            </div>
            <span className={style.textos}>
                <a href="#sobre">
                    <span>Sobre</span>
                </a>
                <a href="#contato">
                    <span>Contato</span>
                </a>
            </span>
        </div>
    )
}