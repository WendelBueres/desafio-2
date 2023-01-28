import FormComponent from './pages/form';
import { } from '@mui/material/Menu'
import './App.css';
import React, { useState } from 'react';
import TabsComponent from './components/tabs';
import { Slide, ToastContainer } from "react-toastify";
import EstablishmentPage from './pages/establishment';
import TransactionPage from './pages/transaction';


function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <TabsComponent class="tabs" value={value} setValue={setValue} />
        {value === 0 &&
          <FormComponent />}
        {value === 1 &&
          <TransactionPage />}
        {value === 2 &&
          <EstablishmentPage />}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        transition={Slide}
        pauseOnHover
      />
    </div>
  );
}

export default App;
