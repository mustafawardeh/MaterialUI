import { Box, Dialog, DialogContent, Slide,DialogTitle, IconButton, Typography, useMediaQuery, Button } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/theme';
import CloseIcon from '@mui/icons-material/Close'
import {styled} from '@mui/material/styles'
import { useTheme } from '@mui/material';
import { Product, ProductImage } from '../../styles/products';
import IncDec from '../ui/incdec';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FavoriteIcon from '@mui/icons-material/Favorite'




function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
  }
  
  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));
  
  const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));


function ProductDetail({open,onClose,product}) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
    <Dialog
        TransitionComponent={SlideTransition}
        variant = "permenent"
        open = {open}
        fullScreen
    >
        <DialogTitle sx={{
            background : Colors.secondary
        }}>
        <Box 
            display={'flex'} 
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Typography variant='h4'>
                Product  Title
            </Typography>
            <IconButton onClick={onClose}>
                <CloseIcon />
            </IconButton>
            
        </Box>

        </DialogTitle>
        <DialogContent>
            <ProductDetailWrapper flexDirection={matches?'column' : 'row'}>
                <Product sx={{mr:4}}>
                    <ProductImage src={product.image}/>
                </Product>
                <ProductDetailInfoWrapper>
                    <Typography variant='subtitle1'>SKU 123</Typography>
                    <Typography variant='subtitle1'>Avilablity : 5 in stock</Typography>
                    <Typography sx = { {lineHeight: 2}} variant='h4'>{product.name}</Typography>
                    <Typography variant='body'>{product.description}</Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <IncDec />   
                        <Button variant='contained'>Add To Cart</Button>
                    </Box>
                    <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{mt: 4,color: Colors.dove_gray,}}>
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
                </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
        </DialogContent>
    </Dialog>
  )
}

export default ProductDetail