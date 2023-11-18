import React, { useEffect, useState } from 'react'
import { MessageText, PromotionsContainer } from '../../styles/promotions'
import { Box, Slide } from '@mui/material'
const messages = [
    '20% off on your first order',
    'Summer sale startsnow, visit an store.',
    'Hello Everyone'
]
export const Promotions = () => {
    const [messageIndex,SetmessageIndex]=useState(0)
    const [show,Setshow]=useState(true)
    useEffect(()=>{
        //make message show false after 3 second
        setTimeout(()=>{ Setshow(false) } , 3000)

        const intervalid = setInterval(()=>{
            SetmessageIndex((i)=>(i+1)%messages.length)
            Setshow(true);
            //make message show false after 3 second
            setTimeout(()=>{
                Setshow(false)
            },3000)
        },4000)  

        return ()=>{
            clearInterval(intervalid)
        }      
    },[]);


  return (
    <PromotionsContainer>
        <Slide 
        direction={show ? 'left' : 'right'} 
        
        in={show}
        
        timeout={{
            enter: 500,
            exit:100
        }}
        /**enter with 0.5second
            exit with 0.1second        
         */
        >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>

        </Slide>
    </PromotionsContainer>
  )
}
