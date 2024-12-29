import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core';
import { SignInPage } from '@toolpad/core';

const theme = createTheme();

const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
];

const signIn = async (provider) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: 'This is a fake error' });
    }, 500);
  });
};

export default function Logout() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider theme={theme}>
        <SignInPage signIn={signIn} providers={providers} />
      </AppProvider>
    </ThemeProvider>
  );
}
