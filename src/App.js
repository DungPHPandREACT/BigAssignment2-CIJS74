import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from 'reactstrap';
import Navigation from './components/Navigation/Navigation';
import Product from './components/Product/Product';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listProduct, setListProduct] = useState([]);
  const [isChangedCart, setIsChangedCart] = useState(false);

  const checkExistProduct = (arrayProduct, idProduct) => {
    for (let i = 0; i < arrayProduct.length; i++) {
      if (arrayProduct[i].id === idProduct) {
        return i;
      }
    }

    return -1;
  };

  const handleAddProduct = (product) => {
    const listProduct = JSON.parse(localStorage.getItem('listProduct')) ?? [];

    const index = checkExistProduct(listProduct, product.id);

    if (index !== -1) {
      const newAmount = listProduct[index].amount + product.amount;
      listProduct[index].amount = newAmount;
    } else {
      listProduct.push(product);
    }

    localStorage.setItem('listProduct', JSON.stringify(listProduct));

    setIsChangedCart(!isChangedCart);
  };

  //gọi api
  useEffect(() => {
    const fetchData = () => {
      fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals')
        .then((response) => response.json())
        .then((data) => {
          setListProduct(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container-app">
      <Navigation isChangedCart={isChangedCart} />

      <Container className="mt-2">
        {isLoading ? (
          <Spinner>Loading...</Spinner>
        ) : (
          <Row>
            {listProduct.map(({ id, image, price, name, description }) => {
              return (
                <Col xl={4} xs={6} className="mt-5">
                  <Product
                    id={id}
                    image={image}
                    price={price}
                    name={name}
                    description={description}
                    onAddProduct={handleAddProduct}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default App;
