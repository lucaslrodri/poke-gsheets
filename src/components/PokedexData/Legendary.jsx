export default function Legendary(props){
    return(
        <span style={{
            color: props.value.toLowerCase()=='true' ? 'green': 'red'
        }}>
            {props.value.toLowerCase()=='true' ? '✔': '✘'}
        </span>
    )
}