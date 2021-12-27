import React from 'react'
import './myStyles.css'
import styles from './appStyles.module.css'
const heading = {
    color:'blue',
    fontSize:'45px',
    textAlign:'left'
}
const StyleSheet = ()=>{
    return(
        <div>
            <h1 className = 'primary font-xl'>StyleSheet</h1>
            <h2 style={heading}>Inline Styles</h2>
            <h3 className={styles.class1}>Module CSS</h3>
        </div>
    )
}
export default StyleSheet;

