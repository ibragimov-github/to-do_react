import React from 'react';
import { useState } from 'react';
import styles from './NoName.module.scss'

function NoName(props) {
  const helloPageStyles = {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '101',
    backgroundColor: '#fff'
  }
  const [value, setValue] = useState('');
  const [style, setStyle] = useState(localStorage.getItem('userName') ? {display:'none'}: helloPageStyles)
  const onKeyFunc = (e) => {
    if (e.key === 'Enter') {
      setNameFunc()
    }
  }

  const setNameFunc = function() {
    if (value) {
      localStorage.setItem('userName', value);
      setStyle({display: 'none'})
      props.updateName(value);
    }
    
  }
  return (
    <div className={styles.container}>
      <div style={style}>
        <h1 className={styles.hello}>Hello, anonim!</h1>
        <div className={styles.inputWrap}>
          <input onKeyDown={onKeyFunc} className={styles.inputName} value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="What's your name ?"/>
          <button onClick={setNameFunc}>Push</button>
        </div>
      </div>
    </div>   
  );
}

export default NoName;