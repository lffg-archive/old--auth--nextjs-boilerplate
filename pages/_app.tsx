import App, { Container } from 'next/app';
import React from 'react';
import AppProviders from '@/providers/AppProviders';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AppProviders>
          <Component {...pageProps} />
        </AppProviders>
      </Container>
    );
  }
}

export default MyApp;
