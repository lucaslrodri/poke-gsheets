import { google } from 'googleapis'
import Error from '../../components/Error'
import request from '../../functions/request'
import Main from '../../components/Main'

async function getAuthToken() {
    if (typeof window !== 'undefined') {
      throw new Error('NO SECRETS ON CLIENT!')
    }

    const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      projectId: process.env.GOOGLE_PROJECTID,
      credentials: {
        private_key: privateKey,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
    })
    const authToken = await auth.getClient()
    return authToken
}

async function authorize(){
    const auth = await getAuthToken()
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

export default function Notfound(){
    return <Main>
        <Error type='Pokemon not found'>
            <p className='description'>Check if you typed the name correctly or use the Pokemon number</p>
        </Error>
    </Main>
    
}