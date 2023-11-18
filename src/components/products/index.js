import React from 'react'
import { bagsProducts } from '../../data'
import { Container, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SingleProduct from './singleproduct'
import SingleProductDesktop from './singleproductDesktop'

function Products() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    // Create an array of SingleProduct components
    const renderProducts = bagsProducts.map(item => (
        <Grid 
        item 
            key={item.id}
            xs={2}
            sm={4}
            md={4}
        display={'flex'} 
        flexDirection={'column'} 
        alignItems={'center'}
        >
        {
            matches?
            <SingleProduct product={item} matches={matches} />
            :<SingleProductDesktop product={item} matches={matches} />

        }
        </Grid>
    ))

    return (
        <Container >
            <Grid 
            container 
            spacing={{xs:2,md:3}}
            justifyContent={'center'} 
            sx={{margin:'20px 4px 30px 4px'}}
            columns={{xs:4,sm:8,md:12}}
            
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}

export default Products
