import Error from '../../components/Error'
import Main from '../../components/Main'
import generateList from '../../functions/generateList'

export async function getStaticProps(){
  const list = await generateList()

  return { 
      props: {list} 
  }
}

export default function Notfound(){
    return <Main>
        <Error type='Pokemon not found'>
            <p className='description'>Check if you typed the name correctly or use the Pokemon number</p>
        </Error>
    </Main>
    
}