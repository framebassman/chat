import React from 'react';
import {Component} from 'react';
import { ChatState } from './ChatState';
import { sendMessageCommand, chatHubConnection } from '../model/SignalR';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
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
              <div className="messages">
                {this.state.messages.map((message: string, index: number) => (
                  <span style={{display: 'block'}} key={index}> {message} </span>
                ))}
              </div>
              <Divider />
              {/* eslint-disable-next-line */}
              <form className="form" action="javascript:void(0);">
                <TextField
                  className="input"
                  type="text"
                  placeholder="Напишите сообщение..."
                  variant="outlined"
                  margin="normal"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <button onClick={this.sendMessage} type="submit" style={{display: 'none'}}/>
              </form>
            </Paper>
          </div>
        );
      }
  }
