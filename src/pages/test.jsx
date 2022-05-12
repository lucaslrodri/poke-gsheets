export async function getServerSideProps({ query }) {
    const { privateKey } = {privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g,'\n')}

    return { 
        props: {
            stats: process.env.GOOGLE_PRIVATE_KEY
        } 
    }
}

export default function Test(props){
    console.log(props.stats)
    return (
        <h1>Test</h1>
    )
}