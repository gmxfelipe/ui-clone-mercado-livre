import React from 'react';
// import Footer from '../Footer';

import { Container, Wrapper } from './styles';
import Product from '../Product/index';

const Layout: React.FC = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Wrapper>
        <Product />
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
