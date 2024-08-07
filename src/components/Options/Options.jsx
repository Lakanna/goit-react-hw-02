import css from './Options.module.css'

export default function Options({listStats, handleClick, totalFeedback, resetState }) {
    // console.log(props);
    const valuesStat = Object.keys(listStats);
    
    return (
        <ul className={css.buttonList}>
            {valuesStat.map((grade) => {
                return (<li key={grade}>
                    <button className={css.optionButton} onClick={() => handleClick( grade )} >{grade}</button>
                </li>)
            })}
            { totalFeedback !== 0 && <li><button className={css.optionButton} onClick={resetState}>Reset</button></li>}
        </ul>
    )
}