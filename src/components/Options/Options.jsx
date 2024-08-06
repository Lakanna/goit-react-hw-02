import css from './Options.module.css'

export default function Options({listStats, handleClick}) {
    // console.log(props);
    const valuesStat = Object.keys(listStats);
    console.log(valuesStat);
    return (
        <ul className={css.buttonList}>
            {valuesStat.map((grade) => {
                return (<li key={grade}>
                    <button onClick={handleClick} >{grade}</button>
                </li>)
            })}
            <li><button>Reset</button></li>
        </ul>
    )
}