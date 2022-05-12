import request from '../functions/request'
import authorize from '../functions/authorize'

export default async function generateList(){
    const sheets = await authorize()
    
    const [number_list, name_list] = await request(sheets, `pokedex!A2:B801`,'COLUMNS')

    return {string: name_list, number: number_list}
}