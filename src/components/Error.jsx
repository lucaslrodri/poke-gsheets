import styles from './Error.module.css'

export default function ErrorPage(props){
    return (
        <div className={styles.content} style={{height:'70vh'}}>
            <div className={styles.content}>
                <h1 className='title'>{props.type}</h1>
                <div className={styles.subcontainer}>
                    <div>
                    <img src='/pikachu_sad.png' alt='Image of Pikachu crying'/>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column',height:'100%'}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}