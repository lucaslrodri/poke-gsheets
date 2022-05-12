import { google } from 'googleapis'

async function getAuthToken() {
    if (typeof window !== 'undefined') {
      throw new Error('NO SECRETS ON CLIENT!')
    }

    const { privateKey } = {privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g,'\n')}
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

export default async function authorize(){
  const auth = await getAuthToken()
  return google.sheets({ version: 'v4', auth })
}