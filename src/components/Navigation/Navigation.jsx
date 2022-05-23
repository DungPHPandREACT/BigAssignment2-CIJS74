import React, { useEffect, useState } from 'react';
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import Cart from '../Cart/Cart';

const Navigation = ({ isChangedCart }) => {
  const [modal, setModal] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);

  const toggle = () => setModal(!modal);

  const listProduct = JSON.parse(localStorage.getItem('listProduct')) ?? [];

  useEffect(() => {
    const total = listProduct
      .map((product) => parseInt(product.amount))
      .reduce((preValue, currentValue) => preValue + currentValue, 0);

    setTotalProduct(total);
  }, [isChangedCart]);

  console.log('totalProduct: ', totalProduct);

  return (
    <div>
      <Navbar color="light" expand fixed="" light>
        <NavbarBrand href="/">ReactMeals</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Button color="primary" outline onClick={toggle}>
            Your cart {totalProduct}
          </Button>
        </Collapse>
      </Navbar>
      <Cart modal={modal} toggle={toggle} />
    </div>
  );
};

export default Navigation;
