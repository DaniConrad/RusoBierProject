import React, { useState, useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import { BsFillDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs' 
import '../../App.css'


export const ItemCount = ({stock, id, Quantity, SetQuantity, onAdd}) => {
    
    const plusItem = (prop) =>{
        if (prop === '+') {
            if (Quantity === stock || stock === 0) {
                return;
            }
            SetQuantity(Quantity +1);
        }
    }

    const dashItem = (prop) =>{
        if (prop === '-'){
            if (Quantity === 1 || (Quantity === 0 && (prop === '-') && stock === 0)) {
            return;
        }else{
            SetQuantity(Quantity -1);
            }
        }
        }

        //Disable and enable addCart button with the stock disponibility
        const [btnOn, btnDisabled] = useState(false)
        useEffect( () =>{
             if (stock === 0) {
                 btnDisabled(true)
                }else{
                     btnDisabled(false)
             }
        }, [stock])

        //CAMBIAR EL DISABLED POR UN CONDICIONAL && 

  return (
    <Container className="d-flex align-items-center flex-column personalized-width">
        <div className='d-flex justify-content-center'>
        <Button onClick={()=>dashItem('-')} className='bg-transparent border-0 d-flex align-items-center justify-content-center' >
            <BsFillDashCircleFill 
                color='#000'
            />
        </Button>
        <Card.Text className="m-2 text-dark">
        {Quantity}
        </Card.Text>
        <Button onClick={()=>plusItem('+')} className='bg-transparent border-0 d-flex align-items-center justify-content-center'>
            <BsFillPlusCircleFill 
                color='#000'
            />
        </Button>
        </div>
        <button onClick={onAdd} variant="primary" disabled={btnOn} id={id} className="detail-btn btn text-light mt-1">Agregar al Carrito</button>

    </Container>
    
  )
}

