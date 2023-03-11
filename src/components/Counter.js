
import { Button, Container } from '@mui/material';
import React from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice';

function Counter() {
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
        <Button onClick={() => dispatch(decrement())} style={{marginLeft: "10px"}} color="info" variant='contained'>Decrement</Button>
        <Button onClick={() => dispatch(increment())} onclick color="info" variant='contained'>Increment</Button>
      </Container>
    </>
  )
}

export default Counter