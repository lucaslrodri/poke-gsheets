import styles from './Type.module.css'

export default function Type(props){

    function typeColor(type){
        switch(type.toLowerCase()){
            case 'normal': return 'aaaa99'
            case 'fire': return 'ff4422'
            case 'fighting': return 'bb5544'
            case 'water': return '3399ff'
            case 'flying': return '8899ff'
            case 'grass': return '77cc55'
            case 'poison': return 'aa5599'
            case 'electric': return 'ffcc33'
            case 'ground': return 'ddbb55'
            case 'psychic': return 'ff5599'
            case 'rock': return 'bbaa66'
            case 'ice': return '66ccff'
            case 'bug': return 'aabb22'
            case 'dragon': return '7766ee'
            case 'ghost': return '6666bb'
            case 'dark': return '775544'
            case 'steel': return 'aaaabb'
            case 'fairy': return 'ee99ee'
            default: return '68a090'
        }
    }
    if (props.children !== '')
        return (
            <div className={styles.type} style={{backgroundColor:'#'+typeColor(props.children)}}>
                <span>{props.children.toUpperCase()}</span>
            </div>
        )
    else return ''
}