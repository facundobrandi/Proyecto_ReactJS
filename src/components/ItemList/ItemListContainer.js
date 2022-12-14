import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import Caro from "../carousel";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])

  return (
    <Container>
    
      <h3 className="greeting">{greeting}</h3>
      <Caro></Caro>
      <h1>Productos</h1>
      <ItemList products={products} />
      
    </Container>
  );
}
 
export default ItemListContainer;
