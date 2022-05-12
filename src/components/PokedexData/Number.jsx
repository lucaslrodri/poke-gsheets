export default function Number(props){
    return (
        <span style={{fontWeight:'bold'}}>
            {'#'+props.children.padStart(3,'0')}
        </span>
    )
}