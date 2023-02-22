import React, {useState} from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handlerAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handlerSubtract = () => {
        if (count > 1) setCount(count - 1);
    };
    const handlerSelect = () => {
        if (stock > 0) onAdd(count);
    };

    return (
        <div style={style.center}>
            <Button variant="contained" style={style.button} onClick={handlerSubtract}>-</Button>
            <h4>{count}</h4>
            <Button variant="contained" style={style.button} onClick={handlerAdd}>+</Button>
            <Button variant="outlined" style={style.button} onClick={handlerSelect}>
                <AddShoppingCartIcon />
            </Button>
        </div>
    );
};

const style = {
    center: {
        marginLeft: 28,
        display: "flex",
        alignItems: "center",
    },
    button:{
        margin: 5,
        fontSize: 40,
        height: 30,

    }
};

export default ItemCount;
