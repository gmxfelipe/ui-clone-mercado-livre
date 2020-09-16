import React from 'react';
// import Footer from '../Footer';

import { Container, Wrapper } from './styles';
import Product from '../Product/index';
import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
