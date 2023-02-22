import Rating from '@mui/material/Rating';

const ItemDetail = ({ product }) => {
  return (
    <div  style={styles.container}>
      <img alt={product.title} src={product.image} style={styles.image} />
      <div style={styles.content}>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>Rating </h2>
        <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly />
        <h2>$ {product.price}</h2>
      </div>
    </div>
  );
};

export default ItemDetail;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  image: {
    width: "40%",
  },
  content:{
    paddingLeft: 50,

  }
};