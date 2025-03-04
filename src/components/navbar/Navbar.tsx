import style from './navbar.module.css'

export default function Navbar() {


    return (
        <div className={style.container}>
            <div className={style.boxLogo}>
                <img src='next.svg' className={style.logo}></img>
            </div>
            <span className={style.textos}>
                <span>Sobre</span>
                <span>Contato</span>
            </span>
        </div>
    )
}