"use client";
import React from 'react';
import { NextPage } from 'next';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const Paginations: NextPage = () => {
  return (
<div className='pt-2 xl:pt-8'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Stack spacing={2}>         
          <Pagination count={10} color='secondary' shape="rounded" />
        </Stack>
      </div>
    </ThemeProvider>
    </div>
  );
};

export default Paginations;