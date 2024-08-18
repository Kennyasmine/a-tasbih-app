import { useEffect, useState } from 'react'
import './function-buttons.css'

function FunctionButtons({ darkMode, setDarkMode}) {

    const darkToggle = "https://cdn-icons-png.flaticon.com/128/5043/5043139.png"
    const phoneVibrate = "https://cdn-icons-png.flaticon.com/128/2404/2404132.png"
    const colorPallete = "https://cdn-icons-png.flaticon.com/128/11258/11258416.png"
    const volumeAdjust = "https://cdn-icons-png.flaticon.com/128/4024/4024628.png"
    const nightMode = "https://cdn-icons-png.flaticon.com/128/12301/12301305.png"
    const lightMode = "https://cdn-icons-png.flaticon.com/128/9937/9937122.png"

    const toggleTheme = () => {
        darkMode === 'dark' ? setDarkMode('light') : setDarkMode('dark')
        // setDarkMode(!darkMode);
        console.log("Button Clicked")
    };

    // useEffect(() => {
    //     document.body.className = darkMode ? 'lightMode' : 'darkMode'
    // }, [darkMode])
    

    return (
        <div className={`functionBtns ${darkMode}`}>
            <button className= "darkToggle">
                <img src={volumeAdjust} alt="volumeAdjust" />
            </button>
            <button className= "darkToggle">
                <img src={phoneVibrate} alt="phoneVibrate" />
            </button>
            <button className= "darkToggle">
                <img src={colorPallete} alt="colorPallete" />
            </button>
            <button className= "darkToggle" onClick={() => toggleTheme()}>
                <img src={darkMode === 'dark' ? nightMode : lightMode} alt="darkToggle" />
            </button>

        </div>
    )
}

export default FunctionButtons