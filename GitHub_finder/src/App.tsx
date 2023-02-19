import {Outlet} from 'react-router-dom'

import './index.css'; 

import styles from './App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}

export default App