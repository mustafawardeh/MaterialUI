import { IconButton } from "@mui/material"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import Actions from "./actions"

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import { useUIContext } from "../../context/ui";


function AppBarMobile({matches}){
    const {setDrawerOpen,setShowSearchBox} = useUIContext();
    return(
        <AppbarContainer >
            <IconButton onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={'center'} variant="h4">My Bags</AppbarHeader>
            <IconButton>
                <SearchIcon onClick={()=>setShowSearchBox(true)}/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}
export default AppBarMobile