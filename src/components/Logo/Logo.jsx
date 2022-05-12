import styles from './Logo.module.css'

export default function Logo(props){
    return (
        <div className={styles.pokeball} style={{
                backgroundColor: props.frontColor, 
                transform: `scale(${props.scale})`
            }}>
            <div className={
                `${styles.strip} ${(props.animate)?styles.animate:''}`
                }
                style={{backgroundColor: props.backColor}}
                ></div>
            <div className={styles.center} style={{
                backgroundColor: props.frontColor,
                border: `5px solid ${props.backColor}`
            }}></div>
        </div>
    )
}