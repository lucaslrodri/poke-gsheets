import Type from "./PokedexData/Type"
import Legendary from './PokedexData/Legendary'
import Number from './PokedexData/Number'

export default function PokedexData(props){
    function content(data,stats){
        if (stats==='Type'){
            return data.map((e,i) => {
                return <Type key={e+'-'+i}>{e}</Type>
            }
            )
        }else if (stats==='Legendary'){
            return <Legendary value={data}/>
        }else if (stats==='Number'){
            return <Number>{data}</Number>
        }else{
            return data
        }
    }

    function genTable(data){
        return (
            data.content.map(
                (e,i) => {
                    return(
                        <tr key={data.en_labels[i]}>
                            <th>{data.en_labels[i]}</th>
                            <td>{content(e,data.labels[i])}</td>
                        </tr>
                    )
                }
            )
        )
    }

    return (
    <div>
        <h2>Pokédex data</h2>
        <table>
            <tbody>
                {genTable(props.pokemon.pokedex_data)}
            </tbody>
        </table>
    </div>
    )
}