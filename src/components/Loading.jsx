import styles from './Loading.module.css'
import Logo from './Logo/Logo'

export default function Loading(){
    return (
        <main className={styles.content}>
            <Logo frontColor={'var(--maincolor)'} backColor={'#FFF'} scale={2} animate/>
            <h2 style={{margin:'30px'}}>Loading...</h2>
        </main>
    )
}