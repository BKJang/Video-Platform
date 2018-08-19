import React from 'react';
import Header from 'components/Header';
import Navigator from 'components/Navigator';
import Footer from "components/Footer";

export default ({ children }) => {
  return (
    <>
      <Header />
      <Navigator />
      {children}
      <Footer />
      <style jsx>
        {' '}
        {`
          body {
            padding-top: 60px;
          }
        `}{' '}
      </style>
    </>
  );
};
