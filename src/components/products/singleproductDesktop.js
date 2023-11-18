import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage,ProductActionsWrapper } from '../../styles/products'
import ProductMeta from './productmeta'
import { Stack, Tooltip, Typography } from "@mui/material";import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { Colors } from '../../styles/theme'
import ProductDetail from '../productdetail';
import useDialogModal from '../../hooks/useDialogModal';

function SingleProductDesktop  ({product,matches}) {

  const [ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailsDialog]
    =useDialogModal(ProductDetail)

  const [showOptions, setShowOptions] = useState(false);
  
  const [Class_Show,SetClass_Show]=useState("none")
  

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
        <ProductFavButton isfav={0}>
              <FavoriteIcon />
          </ProductFavButton>
          {
            (showOptions && <ProductAddToCart show={showOptions} variant='contained'>
              Add To Cart
            </ProductAddToCart>)
          }
        <ProductActionsWrapper show={showOptions}>
          <Stack direction= "column" >
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
      <ProductMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>

  )
}
export default SingleProductDesktop

   /**
    Product
    image   
    meta
    Actions
    Footer  
**/
