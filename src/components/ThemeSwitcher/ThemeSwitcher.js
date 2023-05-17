import {useLayoutEffect, useState} from "react";
import {ReactComponent as MoonIcon} from "./../../assets/img/icon-moon.svg";
import {ReactComponent as SunIcon} from "./../../assets/img/icon-sun.svg";


const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light')

    const onClick = () => {
         if ( theme === 'light') {
             setTheme('dark')
         } else {
             setTheme('light')
         }
    }

    useLayoutEffect(()=> {
        let app = document.querySelector('#app')
        app.setAttribute('theme', `${theme}`)
    },[theme])

    const SwitchIcon = theme === 'dark' ? <MoonIcon fill='white'/>: <SunIcon fill='white'/>


    return (<>
        <div onClick={onClick}>{SwitchIcon}</div>
    </>)
}

export default ThemeSwitcher