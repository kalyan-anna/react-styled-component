import '../../../theme/fonts.css';

import { Box, Footer, Header } from '@ui';
import { GlobalStyle, theme } from '@theme';
import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import { SEO } from '../SEO/SEO';
import { ThemeProvider } from 'styled-components';

type AppLayoutProperties = {
  pageTitle: string;
};

export const AppLayout: React.FC<AppLayoutProperties> = ({
  pageTitle,
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const appTitle: string = site.siteMetadata?.title;

  return (
    <ThemeProvider theme={theme}>
      <SEO pageTitle={pageTitle} appTitle={appTitle} />
      <GlobalStyle />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header appTitle={appTitle} />
        <Box
          flexGrow={2}
          px={[3, 4]}
          py={[2, 3]}
          as="main"
          backgroundColor="primary"
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
