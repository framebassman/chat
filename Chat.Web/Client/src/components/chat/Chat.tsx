import React from 'react';
import {Component} from 'react';
import { ChatState } from './ChatState';
import { sendMessageCommand, chatHubConnection } from '../../model/SignalR';
import Paper from '@mui/material/Paper/Paper';
import Divider from '@mui/material/Divider/Divider';
import TextField from '@mui/material/TextField/TextField';
import { SendButton } from '../send_button/SendButton';
import './Chat.css';

export class Chat extends Component<any, any> {
    constructor(props: any) {
      super(props);
      
      const initState: ChatState = {
        nick: '',
        message: '',
        messages: [],
        hubConnection: chatHubConnection,
      };
      this.state = initState;
    }

    sendMessage = () => {
        this.state.hubConnection
          .invoke(sendMessageCommand, this.state.nick, this.state.message)
          .catch((err: any) => console.error(err));

          this.setState({message: ''});
      };
    
    componentDidMount = () => {
        const nick = window.prompt('Your name:', 'Annonimus');
        const hubConnection = chatHubConnection;
    
        this.setState({ hubConnection, nick }, () => {
            this.state.hubConnection
              .start()
              .then(() => console.log('Connection started!'))
              .catch((err: any) => console.log('Error while establishing connection :('));
      
            this.state.hubConnection.on('ReceiveMessage', (nick: string, receivedMessage: string) => {
              const text = `${nick}: ${receivedMessage}`;
              const messages = this.state.messages.concat([text]);
              this.setState({ messages });
            });
          });
    }

    render() {
        return (
          <div className="chat">
            <Paper className="paper">
              <div id="messages" className="messages">
                {this.state.messages.map((message: string, index: number) => (
                  <span id="message" style={{display: 'block'}} key={index}> {message} </span>
                ))}
              </div>
              <Divider />
              {/* eslint-disable-next-line */}
              <form className="form" action="javascript:void(0);">
                <TextField
                  id="input"
                  className="input"
                  type="text"
                  placeholder="Напишите сообщение..."
                  variant="outlined"
                  margin="dense"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <SendButton onClick={this.sendMessage} type="submit"/>
              </form>
            </Paper>
          </div>
        );
      }
  }
