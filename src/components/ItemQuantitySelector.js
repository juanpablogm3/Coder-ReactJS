import React, {useState} from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemQuantitySelector = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handlerAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handlerSubtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div style={style.center}>
            <Button variant="contained" style={style.button} onClick={() => handlerSubtract()}>-</Button>
            <h4>{count}</h4>
            <Button variant="contained" style={style.button} onClick={() => handlerAdd()}>+</Button>
            <Button variant="outlined" style={style.button} color="error" onClick={() => onAdd(count)}>
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

export default ItemQuantitySelector;
