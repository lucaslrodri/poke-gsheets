import PokemonGenerator from '../../models/Pokemon'
import styles from '../../styles/Pokemon.module.css'
import Main from '../../components/Main'
import PokedexData from '../../components/PokedexData'
import BaseStats from '../../components/BaseStats'
import authorize from '../../functions/authorize'
import request from '../../functions/request'

export async function getServerSideProps({ query }) {
    const sheets = await authorize()
    
    const { id } = query
    
    //Request list
    const [number_list, name_list] = await request(sheets, `pokedex!A2:B801`,'COLUMNS')
    
    //Request stats
    const stats_range = `pokedex!A${id}:M${id}`
    const global_stats_range = `stats!B22:H25`
    const response = await request(sheets, [stats_range,global_stats_range], 'ROWS')
    
    const stats = response[0].values[0]
    const bar = {
        size: response[1].values[0],
        offset: response[1].values[1],
        quartile: {
            first: response[1].values[2],
            last: response[1].values[3]
        }
    }
    
    return { 
        props: {
            stats,
            bar,
            list: {string: name_list, number: number_list},
            query
        } 
    }
}

export default function Pokemon(props) {
    const pokemon = new PokemonGenerator(props.stats)
    const url = `https://img.pokemondb.net/artwork/${pokemon.image}`

    return <Main>
        <main className={styles.container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <div className={styles.data}>
                <div>
                    <img src={url} alt={pokemon.image} />
                </div>
                <PokedexData pokemon={pokemon}/>
            </div>
            <BaseStats pokemon={pokemon} bar={props.bar} />
        </main>
    </Main>
}