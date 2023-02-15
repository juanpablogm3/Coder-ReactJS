import React from 'react'
import ItemCount from "../components/ItemCount";


const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
};

const Item = ({product}) => {
    return (
        <div style={style.container}>
            <img src={product.image} alt={product.title} style={{width:'70%'}} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <ItemCount stock={5} /* onAdd={onAdd} */ />
        </div>
    )
}

const style = {
    container:{
        width: viewport.width > 900 ? '30%' : '90%',
      },
}

export default Item