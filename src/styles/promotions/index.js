import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import "@fontsource/montez"

export const PromotionsContainer =styled(Box)(({theme})=>({
    padding : '20px 0',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    overflow : 'hidden',
    backgroundColor : Colors.secondary,
    [theme.breakpoints.down('md')]: {
        padding : '40px 0',
    },
}))
export const MessageText =styled(Typography)(({theme})=>({
    fontFamily : `'Montez','cursive'`,
    color : Colors.white,
    fontSize : '36px',
    [theme.breakpoints.down('md')] : {
        fontSize: "1.75rem",
    },
    [theme.breakpoints.down('sm')] : {
        fontSize: "1.35rem",
    },
}))