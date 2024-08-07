import css from './Feedback.module.css'


export default function Feedback({ listStats, totalFeedback, positiveFeedback }) {
    const stats = Object.keys(listStats);
    return (
        <ul className={css.feedbackList}>
            {stats.map((stat) => {
                return <li key={stat}>{stat} : {listStats[stat]}</li>
            })}
            <li >Total : { totalFeedback}</li>
            <li>Positive : { positiveFeedback}%</li>
        </ul>
    )
}