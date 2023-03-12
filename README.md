# Redux, ReactJS CounterApp

## İlk başta redux'ı projeye dahil ediyoruz.

```
npm install @reduxjs/toolkit react-redux

veya

yarn add @reduxjs/toolkit react-redux
```

- src/ dizinin içine bir klasör oluştur. (Ben ismini redux/ koydum)

- Dizinin içine `store.js` isminde dosya açtım. Store dosyası sayesinde bütün componentlara ulaşıcaz.

#### `src/redux/stroje.js`
```
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        
    }
}) 
```

## Store sayfasını hallettikten sonra `index.js` dosyasına Provider'ı ekleyip store propsunu koyalım;

```
// index.js sayfası böyle olacak store bütün projeyi sarmalayacak state işimizi kolaylaştıracak.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
```

## counterSlice.js `src/counter/counterSlice.js`

```
import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        
    }
})
export default counterSlice.reducer;
```
- createSlice'ı import ediyoruz.
- counterSlice değişkeninin içine createSlice  fonksiyonunu atıyoruz.
- name değeri bu state'i hangi isimle çağıracağımızı belirtir. (state.counter gibi).
- initialState ise state'in default olarak değerini belirtir.
- reducers ise actiondır ve initialState'in değerini değiştirir reducer ile action eklersin ve değerleri değiştirir manipüle edersin.
- Son olarak reducer'ı dışarı aktarıyoruz. Export ediyoruz.

# CounterJS dosyasına geçiyoruz ve state'i ekranda gösteriyoruz.
```
import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  const counterValue = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{counterValue}</h1>
    </div>
  )
}

export default Counter
```
- öncelikle useSelector hook'unu import ediyoruz bu hook sayesinde store'da ki state'e ulaşıp counter değerini counterValue değişkenine atıyoruz.
- name'i counter olanın değerini default olarak 0 verdiğimiz için ekranda 0 yazısını görücez.
# SCREEN SHOT EKLENEBİLİR.

## CounterSlice dosyasına geri dönelim

```
// Son hali böyle görünecek.
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        incrementByAmount: (state, action) => {state.value += Number(action.payload)} 
        
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
```
- reducers'a fonksiyonlar ekledik (increment ekleme işlemini yapıyor mesela.).
- incrementByAmonut ise fazladan action parametresi alıyor bu inputtan değer geldiği için onu kullanacak yani kullanıcıyıla etkileşime giricek.

## Counter.js dosyasının son hali
```
import { Button, Container, Input } from '@mui/material';
import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../counter/counterSlice';

function Counter() {

  // input değeri için useState'i kullandık
  // ilk değeri 0 olacak ikinci değeri ise input'a girilen sayı kadar.
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
          // Artma ve azaltma değerleri burada görünecek.
        <h1>{counterValue}</h1>
      </Container>
      <Container style={{
        marginTop: "30px",
      }}>
        <Container style={{display: "flex", justifyContent:"space-between", width:"30%"}}>

            // bu buttona tıklandığında counterSlice dosyasındaki decrement tetiklenecek.
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
```

## `store.js`
```
import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../counter/counterSlice";



export const store = configureStore({
    reducer: {
      // counterReduce eklendi
      // counterSlice dosyasından import edildi.
        counter: counterReduce        
    }
}) 
```

# Dosyalama

- src
  - components
    - Counter.js
  - counter
    - counterSlice.js
  - redux
    - store.js
  - App.js
  - index.js