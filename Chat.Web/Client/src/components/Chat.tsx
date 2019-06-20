import React from 'react';
import {Component} from 'react';
import * as signalR from "@aspnet/signalr";

export class Chat extends Component<any, any> {
    constructor(props: any) {
      super(props);
      
      this.state = {
        nick: '',
        message: '',
        messages: [],
        hubConnection: null,
      };
    }

    sendMessage = () => {
        this.state.hubConnection
          .invoke("newMessage", this.state.nick, this.state.message)
          .catch((err: any) => console.error(err));
      
          this.setState({message: ''});      
      };
    
    componentDidMount = () => {
        const nick = window.prompt('Your name:', 'Annonimus');
        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("/signalr")
            .build();
    
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
          <div>
            <div>
              {this.state.messages.map((message: string, index: number) => (
                <span style={{display: 'block'}} key={index}> {message} </span>
              ))}
            </div>
            
            <form action="javascript:void(0);">
              <input
                type="text"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />
              <button onClick={this.sendMessage} type="submit">Send</button>
            </form>
          </div>
        );
      }
  }
