import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import {Link} from 'react-router-dom'
import { blue } from '@mui/material/colors';


const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }} style={styles.container}>
      <CardActionArea>
      <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            color={blue[700]}
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;