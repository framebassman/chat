import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SendButton.css';

export const SendButton = (props: any) => {
  const { onClick, type } = props; 
  const iconStyle = {
    color: '#2f74e2'
  };
  return (
    <Button id="send" className="send-button" onClick={onClick} type={type}>
      <SendIcon style={iconStyle}/>
    </Button>
  )
}
