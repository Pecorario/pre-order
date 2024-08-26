import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from '@styles/global';
import theme from '@styles/theme';
import '@fontsource/metropolis';
import { AnimatePresence } from 'framer-motion';
import { SnackbarProvider } from 'notistack';

import reportWebVitals from './reportWebVitals';
import PreOrder from '@pages/PreOrder';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <PreOrder />
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <>
//     <CssBaseline />

//     {/* <ResetStyle /> */}

//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </>
// );

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <AnimatePresence exitBeforeEnter initial={false}>
          <SnackbarProvider maxSnack={3}>
            <Routes>
              <Route path="/" element={<PreOrder />} />
            </Routes>
          </SnackbarProvider>
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
