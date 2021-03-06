import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export const CustomButton = ({ width, children, variant = 'contained' }) => {
  return (
    <StyledButton sx={{ width }} variant={variant}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)({
  borderRadius: '40px',
  backgroundColor: '#fe5f41',
  '&:hover': {
    backgroundColor: '#fd4e2d'
  }
});

CustomButton.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
