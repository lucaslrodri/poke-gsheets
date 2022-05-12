import Error from '../components/Error'
import Main from '../components/Main'
import generateList from '../functions/generateList'


export async function getStaticProps(){
  const list = await generateList()

  return { 
      props: {list} 
  }
}

export default function Custom404(){
    return <Main>
        <Error type='This page could not be found'/>
    </Main>
}