import React,{useEffect} from 'react';
import { redTheme,greenTheme,blueTheme} from '../theme/theme';
import { createContext, useState, useContext, useCallback} from 'react';
import {ThemeProvider as StyledProvider} from 'styled-components';
import { base, deepMerge } from 'grommet-icons';

const ThemeContext = createContext({});
const ThemeProvider = ({children}) => {
    const [ThemeMode, setThemeMode] = useState('journalGreen');
    const selectedJournal = JSON.parse(localStorage.getItem('journalItem'));
    useEffect(() => {
        if(selectedJournal !== undefined){
            setThemeMode(selectedJournal.themeColor);
        }
    }, [selectedJournal]);
    
    console.log(selectedJournal);
    const themeObject = (function(){
        if(ThemeMode === 'journalRed'){
            return redTheme;
        }else if(ThemeMode === 'journalGreen'){
            return greenTheme;
        }else if(ThemeMode === 'journalBlue'){
            return blueTheme;
        }
    }());
    return(
        <ThemeContext.Provider value={{ ThemeMode, setThemeMode}}>
            <StyledProvider theme={themeObject}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);
    const { ThemeMode, setThemeMode} = context;

    const changeTheme = useCallback((selectTheme)=> {
        if (selectTheme === 'journalRed') {
            setThemeMode("journalRed");
        }
        else if(selectTheme === 'journalGreen'){
            setThemeMode("journalGreen");
        }else if(selectTheme === 'journalBlue'){
            setThemeMode("journalBlue");
        }
    }, [ThemeMode,setThemeMode]);

    return [ThemeMode, changeTheme];
}

export { ThemeProvider, useTheme};