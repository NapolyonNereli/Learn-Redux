
import { Button, Container, Input } from '@mui/material';
import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../counter/counterSlice';

function Counter() {

  const [amount, setAmount] = useState(0);

  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Container style={{
        width: "30%",
        background: "pink",
        padding: "30px"
      }}>
        <h1>{counterValue}</h1>
      </Container>
      <Container style={{
        marginTop: "30px",
      }}>
        <Container style={{display: "flex", justifyContent:"space-between", width:"30%"}}>
          <Button onClick={() => dispatch(decrement())} style={{marginLeft: "10px"}} color="info" variant='contained'>Decrement</Button>
          <Button onClick={() => dispatch(increment())} color="info" variant='contained'>Increment</Button>
        </Container>
        <br />
        <br />
        <br />
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Number' type='number' />
          <br/>
          <br/>
          <br/>
          
        <Button onClick={() => dispatch(incrementByAmount(amount))} color="info" variant="contained">Increment Amount</Button>
      </Container>
    </>
  )
}

export default Counter