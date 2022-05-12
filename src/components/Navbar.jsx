import {useState} from 'react'
import styles from './Navbar.module.css'
import router from "next/router"
import Logo from './Logo/Logo'
import Link from 'next/link'

function blurAll(){
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
   }

export default function Nav(props){
    const [searchString, setSearchString] = useState("")

    const searchPokemon = async (e) => {
        e.preventDefault()
        
        if (searchString===''){
            return false
        }
        
        function capitalize(value){
            return value.split(' ').map(e=>e[0].toUpperCase()+e.substr(1)).join(' ')
        }
        
        function searchType(){
            let value = searchString
            if (value.startsWith('#')){
                value = value.slice(1)
            }
            return (Number(value))? [Number(value),'number']:[capitalize(value),'string'] 
        }
        
        const [value, type] = searchType()
        
        const id = props.list[type].indexOf(String(value))
        
        setSearchString("")
        
        if (Number.isInteger(id)){
            if (id>=0){
                router.push({
                    pathname: `/pokedex/${id+2}`,
                    query: {search:value,type}
                })
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
        blurAll()
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