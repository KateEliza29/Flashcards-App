import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { data } from "./data";

function App() {
  return (
    <div className={styles.app}> 
      <Header />
      <Main data={data} />
      <Footer/>

    </div>
  );
}

export default App;
