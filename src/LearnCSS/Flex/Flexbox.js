import React from "react";
import styles from '../../practice.module.css'

function Flexbox(){
    return (
        <div className={styles.container}>
            <div className={styles.box1}>Home</div>
            <div className={styles.box1}>About</div>
            <div className={styles.box1}>Services</div>
            <div className={styles.box1}>Contacts</div>
            <div className={styles.box1}>Profile</div>
            <div className={styles.box1}>login</div>

        </div>
    )
}

export default Flexbox 

/* 
flex is unidirectional , i.e. row or column.

properties
flex-direction =
justify content = it works on x axis
align content = it works on y axis

parent properties - (flex container)
display - flex
flex-direction - row | column | row-reverse | column- reverse
justify-content - flex-start | flex-end | center | space-between | space-around | space evenly 
align-items - flex-start | flex-end | center | stretch | baseline
align-content - flex-start | flex-end | center | stretch | space-between | space-around 
flex-wrap - nowrap | wrap | wrap-reverse 

Children properties - (flex items)
Order - any positive value
flex-grow - any positive value
flex-shrink - any positive value
align-self - auto | flex-start | flex-end | center | stretch | baseline



*/