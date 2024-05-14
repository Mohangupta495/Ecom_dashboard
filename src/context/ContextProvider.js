import { createContext, useContext, useState } from "react";


export const StateContext=createContext();
export const intialState={
    chat:false,
    chart:false,
    userProfile:false,
    notification:false,
}

// handleClick, isClicked, setScreenSize, screenSize
// setColor,setMode,currentColor,currentMode,setThemeSettings

export const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu]=useState(true);
    const [currentColor,setCurrentColor]=useState("#1A97F5")
    const [isClicked,setIsClicked]=useState(intialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentMode,setCurrentMode]=useState('Light');
    const [themeSettings,setThemeSettings]=useState(false);
    const handleClick=(event)=>{
      setIsClicked({...intialState,[event]:true})  
    }
    const setColor=(color)=>{
        setCurrentColor(color)
        localStorage.setItem('colorMode',color) 
        
        setThemeSettings(false);
    }
    const setMode=(e)=>{
       setCurrentMode(e.target.value)
       localStorage.setItem('themeMode',e.target.value)
       setThemeSettings(false);
    }
    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,currentColor,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,setColor,setMode,currentColor,currentMode,setThemeSettings,themeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);
