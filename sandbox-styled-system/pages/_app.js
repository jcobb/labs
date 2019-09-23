import React from 'react';
import App from 'next/app';
import CSSReset from '../components/CSSReset/CSSReset';
import { ThemeProvider } from 'emotion-theming';
import theme from '../components/theme';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        const modifiedTheme = {
            ...theme,
            colors: {
                ...theme.colors,
                primary: theme.colors.blue,
                secondary: theme.colors.pink,
            },
        };

        return (
            <ThemeProvider theme={modifiedTheme}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default MyApp;
