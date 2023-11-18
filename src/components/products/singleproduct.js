import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage,ProductActionsWrapper } from '../../styles/products'
import ProductMeta from './productmeta'
import { Stack, Tooltip, Typography } from "@mui/material";import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { Colors } from '../../styles/theme'
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../productdetail';


function SingleProduct  ({product,matches}) {

  const [ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailsDialog]
        =useDialogModal(ProductDetail)

        
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>

  )
}
export default SingleProduct

   /**
    Product
    image   
    meta
    Actions
    Footer  
**/
