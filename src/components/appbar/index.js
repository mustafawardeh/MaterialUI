import { useMediaQuery, useTheme } from "@mui/material"
import  AppBarDesktop from './appbarDesktop'
import  AppBarMobile from './appbarMobile'


export default function AppBar(){
    //mui hooks
    const theme =useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return(
            <>
            
                {
                   matches? 
                   <AppBarMobile matches={matches}/> : 
                   <AppBarDesktop matches={matches}/>
                }
            </>

    )
}