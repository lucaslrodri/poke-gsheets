import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import request from '../functions/request'
import authorize from '../functions/authorize'

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
    <div className={styles.main}>
    <main className='container'>
        <h1 className='title'>
        Welcome to Poke GSheets!
        </h1>
        <div className={`${styles.content} container`}>
          <img src='/pikachu.jpg' alt='Foto do Pikachu'/>
          <span className='title'>+</span>
          <img src='/sheets.png' alt='Logo do Google Sheets'/>
          <span className='title'>+</span>
          <img src='/nextjs.png' alt='Logo do Next JS'/>
        </div>
        <p className='description'>
        A Pokémon search engine that uses Google Sheets as Database.
        </p>
        <p className='description'>
        Please visit our <a href='https://github.com/yuuta-togashi/poke-gsheets'>Github repository</a> for more details.
        </p>
    </main>
    </div>
  </Main>
}
