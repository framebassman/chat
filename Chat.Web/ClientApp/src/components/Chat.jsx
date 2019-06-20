import React from 'react';
import {Component} from 'react';
import * as signalR from "@aspnet/signalr";

class Chat extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        nick: '',
        message: '',
        messages: [],
        hubConnection: null,
      };
    }
  
    render() {
      return <div>Here goes chat</div>;
    }
  }
  
  export default Chat;
