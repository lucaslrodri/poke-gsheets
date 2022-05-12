import Error from '../../components/Error'
import request from '../../functions/request'
import Main from '../../components/Main'
import authorize from '../../functions/authorize'

export async function getServerSideProps() {
  const sheets = await authorize()

  const [number_list, name_list] = await request(sheets, `pokedex!A2:B801`,'COLUMNS')

  return { 
      props: {
          list: {string: name_list, number: number_list}
      } 
  }
}

export default function Notfound(){
    return <Main>
        <Error type='Pokemon not found'>
            <p className='description'>Check if you typed the name correctly or use the Pokemon number</p>
        </Error>
    </Main>
    
}