import styles from './Bar.module.css'

export default function Bar(props){
    const value = props.value-props.offset

    function barWidth(){
        return props.value/props.maxSize*100+'%'
    }
    function barColor(){
        if (value <=props.quartile[0]){
            return '#ff7f0f'
        }else if (value >=props.quartile[1]){
            return '#23cd5e'
        }else{
            return '#ffdd57'
        }
    }

    return (
        <div className={styles.bar} style={{
            width: barWidth(),
            backgroundColor: barColor()
        }}></div>
    )
}