import {ThemeProvider} from '@mui/system'
import { useEffect } from 'react';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Products from './components/products';
import Footer from './components/footer';
import theme from './styles/theme';
import {Box, Button, Container, Typography} from '@mui/material'
import { Promotions } from './components/promotions';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import ProductDetail from './components/productdetail';

function App() {
  useEffect(()=>
  {
    document.title ='React Material UI-Home'
  }
  ,[])
  return (
    /**
     * Theme provider with created theme style
     */
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <UIProvider>
          <AppBar/>
          <Banner/>
          <Promotions/>
          <Box display={'flex'} justifyContent={'center'} padding={4}>
            <Typography variant='h4'>
              Our Products
            </Typography>
          </Box>
          <Products/>
          <Footer/>
          <AppDrawer/>
          <SearchBox/>
        </UIProvider>
      </Container>
    </ThemeProvider>

    /**appbar
     * banner
     * promotions
     * title
     * products
     * footer
     * searchbox
     * appdrawer
     */
  );
}

export default App;
