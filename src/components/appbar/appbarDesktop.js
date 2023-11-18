import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from '@mui/icons-material/Search'
import Actions from './actions'

function AppBarMobile({matches}){

    return(
        /**
         * Designed AppbarContainer ==Box
         * Designed AppbarHeader == Typhography
         * Designed MyList with type attribute == List
         * Actions has 2 designed ActionIconsContainers == Box
         */
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary='Home' />
                <ListItemText primary='Categories' />
                <ListItemText primary='Products' />
                <ListItemText primary='Contact Us' />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        /**
        Appbar Container
        Header 
        List
        **/
    )
}

export default AppBarMobile