import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { totals } = useContext(CartContext);
    return ((totals.qty > 0)? 
            <Badge badgeContent={totals.qty} color="error">
                <ShoppingCartIcon fontSize="large" style={{ color: 'white' }} />
            </Badge>
        :
            <ShoppingCartIcon fontSize="large" style={{ color: 'white' }} />

    );
    
};

export default CartWidget;