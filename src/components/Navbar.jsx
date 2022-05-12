import {useState} from 'react'
import styles from './Navbar.module.css'
import router from "next/router"
import Logo from './Logo/Logo'
import Link from 'next/link'

export default function Nav(props){
    const [searchString, setSearchString] = useState("")

    const searchPokemon = async (e) => {
        e.preventDefault()

        if (searchString===''){
            return false
        }

        function searchType(){
            let value = searchString
            if (value.startsWith('#')){
                value = value.slice(1)
            }
            return (Number(value))? [Number(value),'number']:[value,'string'] 
        }

        const [value, type] = searchType()

        const id = props.list[type].indexOf(String(value))
            
        if (Number.isInteger(id)){
            if (id>=0){
                router.push({
                    pathname: `/pokedex/${id+2}`,
                    query: {search:value,type}
                })
                setSearchString("")
            }else{
                router.push({
                    pathname: `/pokedex/notfound`,
                })
            }
        }else{
            router.push({
                pathname: `/pokedex/notfound`,
            })
        }
    }

    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
            <div className={styles.logo}>
                <Logo frontColor={'#FFF'} backColor={'var(--maincolor)'} scale={0.75}/>
            </div>
            </Link>
            <form className={styles.container} onSubmit={searchPokemon}>
                <input 
                type="text" 
                placeholder="Search for name or number..."
                value = {searchString}
                onChange={e =>setSearchString(e.target.value)}
                />
                <button onClick={searchPokemon}>
                <div style={{transform: 'rotate(45deg)'}}>&#9906;</div>
                </button>
            </form>
        </nav>
    )
}