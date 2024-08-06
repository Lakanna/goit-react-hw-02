export default function Feedback({ listStats }) {
    const stats = Object.keys(listStats);
    return (
        <ul>
            {stats.map((stat) => {
                return <li key={stat}>{stat} : {listStats[stat]}</li>
            })}
        </ul>
    )
}