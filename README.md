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