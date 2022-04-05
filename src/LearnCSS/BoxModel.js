import React from "react";
import styles from '../practice.module.css';

function BoxModel() {
    // const box = {
    //     background: "pink",
    //     width: "200px",
    //     margin: "50px",
    //     border: "5px solid",
    //     borderColor: "blue",
    //     padding: "100px",
    // }
    return (
        <div className={styles.box}>
            {/* <div style={box}> */}
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
            </div>
        </div>
    )
}

export default BoxModel



/* 
The CSS box model is essentially a box that wraps around every HTML element. 
It consists of: margins, borders, padding, and the actual content.

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

eg - 
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
*/