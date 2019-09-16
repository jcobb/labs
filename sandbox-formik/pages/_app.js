import React from 'react';
import App from 'next/app';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

class MyApp extends App {
    constructor(props) {
        super(props);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default MyApp;
