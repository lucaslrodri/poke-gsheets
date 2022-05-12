import Bar from "./BaseStats/Bar"
import styles from './BaseStats.module.css'

export default function BaseStats(props){

    function genTable(data){
        const maxSize = Math.max(...props.bar.size.slice(0,-1))
        return (
            data.content.map(
                (e,i) => {
                    return(
                        <tr key={data.en_labels[i]}>
                            <th>{data.en_labels[i]}</th>
                            <td>{e}</td>
                            <td>
                                <Bar
                                    value = {e}
                                    maxSize = {(i===data.content.length-1)? props.bar.size.at(-1): maxSize}
                                    offset = {props.bar.offset[i]}
                                    quartile = {
                                        [
                                            props.bar.quartile.first[i],
                                            props.bar.quartile.last[i]
                                        ]
                                    }
                                />
                            </td>
                        </tr>
                    )
                }
            )
        )
    }
    
    return (
    <div className={styles.container}>
        <h2>Base stats</h2>
        <table className={styles.table}>
            <tbody>
                {genTable(props.pokemon.base_stats)}
            </tbody>
        </table>
    </div>
    )
}