import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import { CustomContext } from "../../context/CustomContext";

export const CartWidget = () => {
    const { totals } = useContext(CustomContext);
    return (
        <Badge badgeContent={totals.qty > 0 && <p>{totals.qty}</p>} color="error">
            <ShoppingCartIcon fontSize="large" style={{ color: 'white' }} />
        </Badge>
    );
};


export default CartWidget;