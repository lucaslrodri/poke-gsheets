import Main from '../components/Main'
import request from '../functions/request'
import { google } from 'googleapis'

async function authorize(){
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })
  
  return google.sheets({ version: 'v4', auth })
}

export async function getServerSideProps() {
  const sheets = await authorize()

  const [number_list, name_list] = await request(sheets, `pokedex!A2:B801`,'COLUMNS')

  return { 
      props: {
          list: {string: name_list, number: number_list}
      } 
  }
}

export default function Index() {
  return <Main>
    <main className={`{styles.main} container`}>
        <h1 className='title'>
        Welcome to Poke Sheet!
        </h1>
        <div className="container">
          <img src='/pikachu.jpg' alt='Foto do Pikachu'/>
          <span className='title'>+</span>
          <img src='/sheets.svg' alt='Logo do Google Sheets'/>
        </div>
        <p className='description'>
        A Pokémon search engine that uses Google Sheets as Database.
        </p>
        <p className='description'>
        Please visit our Github repository for more details.
        </p>
    </main>
  </Main>
}
