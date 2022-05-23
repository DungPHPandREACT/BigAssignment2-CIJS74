import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const Product = ({ id, name, description, price, image, onAddProduct }) => {
  const [amount, setAmount] = useState(1);

  const handleGetAmountProduct = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleGetInfoProduct = () => {
    const product = {
      id,
      name,
      description,
      image,
      price,
      amount,
    };

    onAddProduct(product);
  };

  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src={image}
        top
        width="100%"
        height="350px"
      />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price} $
        </CardSubtitle>
        <CardText>{description}</CardText>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>
            Amount
          </Label>
          <Col sm={7}>
            <Input
              id="exampleEmail"
              value={amount}
              name="amount"
              placeholder="Enter amount product"
              type="number"
              onChange={handleGetAmountProduct}
            />
          </Col>
        </FormGroup>
        <Button onClick={handleGetInfoProduct}>+Add</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
