import { Typography } from "@mui/material"
import { ProductMetaWrapper } from "../../styles/products"


function ProductMeta({product , matches}) {
  return (
    <ProductMetaWrapper>
        <Typography variant={matches?'h6':'h5'} sx={{fontSize:'20px'}} lineHeight={2}>
            {product.name}
        </Typography>
        <Typography variant={matches ? 'caption':'body1'}>
            ${product.price}
        </Typography>
    </ProductMetaWrapper>
  )
}
export default ProductMeta