import React from 'react';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import './SendButton.css';

export const SendButton = (props: any) => {
  const { onClick, type } = props; 
  const iconStyle = {
    color: '#2f74e2'
  };
  return (
    <Button className="send-button" onClick={onClick} type={type}>
      <Send style={iconStyle}/>
    </Button>
  )
}
