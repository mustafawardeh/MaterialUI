import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import { Divider, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Colors } from '../../styles/theme';
import { List_Item ,Icon_List} from '../../styles/appbar';
const Actions = ({matches}) => {

    //created customize Component
    const Component = matches ?
        ActionIconsContainerMobile
        :ActionIconsContainerDesktop
  
  
    return (
        /**
         * created customize Component == box
         * created customize List_Item == ListItemButton 
         * created customize Icon_List == ListItemIcon 
         */
    <Component>
        <MyList type='row'>           
            <List_Item>
                <Icon_List sx={{    color: matches && Colors.secondary}}>
                    <ShoppingCartIcon/>
                </Icon_List>
            </List_Item>
            
            <Divider orientation='vertical' flexItem/>
            
            <List_Item>
            <Icon_List sx={{    color: matches && Colors.secondary}}>
                    <FavoriteIcon/>
                </Icon_List>
            </List_Item>
            
            <Divider orientation='vertical' flexItem/>
            
            <List_Item>
            <Icon_List sx={{    color: matches && Colors.secondary}}>
                    <PersonIcon/>
                </Icon_List>
            </List_Item>
        </MyList>
    </Component>

  )
}

export default Actions