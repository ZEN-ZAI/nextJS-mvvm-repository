import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Theme } from '@mui/material/styles/createTheme';
import styled from '@emotion/styled';

const LinkStyle = styled.a`
  color: #fff;
  text-decoration: none;
`

interface MenuAppBarProps {
  theme: Theme
  colorMode: () => void
}

export default function MenuAppBar({ theme, colorMode }: MenuAppBarProps) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <LinkStyle href='/'>
              Home
            </LinkStyle>
          </Typography>
          <Typography color='white'>
            {theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.substring(1)} Mode
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode} color='inherit'>
            {theme.palette.mode === 'light' ? <Brightness7Icon style={{ color: 'white'}}/> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}