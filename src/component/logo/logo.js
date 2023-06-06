import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// loader style
const Logo = styled('div')(() => ({
  fontFamily: 'Yu Gothic',
  fontWeight: 600,
  fontStyle: 'italic',
  fontSize: '20px',
  position: 'relative',
  zIndex: 1,
  color: '#e0f7fa',
  margin: 12
}));

// ==============================|| LOADER ||============================== //

const PortifolioLogo = () => {
  return <Logo>Love Coder</Logo>;
};

export default PortifolioLogo;
