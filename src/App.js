import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import loader from "./assets/giphy.gif"
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsycData, getProductData, getProductStatus, setProductData } from './features/product/Product';

function App() {
  const products = useSelector(getProductData)
  const status = useSelector(getProductStatus)
  const dispatch = useDispatch()
  console.log(status, "====status");
  console.log(products, "===products");
  
  useEffect(() => {
    dispatch(getProductAsycData(10))
  }, []);

  return (
    <div className="App">
      {status ? <img src={loader} /> : <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridGap: '10px',
        gap: '10px',
      }}>
        {products?.length > 0 ? 
            products?.map((product, index) => (
              <div>
                <img src={product?.image} alt={`Product_${index+1}`} width={100} />
                <br />
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <b>{product?.price}</b>
              </div>
            ))
          : <p>No product found</p>}
      </div>}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
