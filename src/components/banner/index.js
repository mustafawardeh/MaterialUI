import { Typography, useMediaQuery,useTheme } from '@mui/material'
import React from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner'
export default function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md')) 
  return (
    <BannerContainer theme={theme}>
        <BannerImage src='/images/banner/banner.png'/>
        <BannerContent>    
            <Typography variant='h6'>Huge Collections</Typography>
            <BannerTitle  variant='h2'>
                New Bags
            </BannerTitle>
            
            <BannerDescription variant='subtitle1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sagittis nulla. Etiam ultrices turpis non orci facilisis rutrum. Integer lobortis placerat neque, convallis laoreet lacus suscipit non. Vivamus dictum efficitur ligula, eu tempor nunc.
            </BannerDescription>

            <BannerShopButton color="primary">
                SHOW NOW
            </BannerShopButton>
        </BannerContent>
    </BannerContainer>
  )
}
