type SearchProps = {
    loadUser:(UserName: string) => Promise<void>
}

import {BsSearch} from 'react-icons/bs'
import {useState, KeyboardEvent} from 'react'
import styles from '../components/Search.module.css'

export function Search({loadUser}:SearchProps){

    const [userName, setUserName] = useState('')

    function handleKeyDown(e: KeyboardEvent){
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return(

        <div className={styles.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={styles.search_container}>
                <input type="text" 
                    placeholder='Digite o nome do usuário' 
                    onChange={(e)=> setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}  
                />
                <button
                    onClick={() => loadUser(userName)}
                >
                <BsSearch />
                </button>
            </div>
        </div>
    )
} 