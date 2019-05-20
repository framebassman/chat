import React from 'react';
import {Component} from 'react';
import * as signalR from "@aspnet/signalr";

const divMessages = document.querySelector("#divMessages");
const tbMessage = document.querySelector("#tbMessage");
const btnSend = document.querySelector("#btnSend");
const username = new Date().getTime();

export class Chat extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div id="divMessages" className="messages"></div>
                <div className = "input-zone">
                    <label id="lblMessage" htmlFor="tbMessage" >Message:</label>
                    <input id="tbMessage" className="input-zone-input" type="text" />
                    <button id="btnSend">Send</button>
                </div>
            </div>
        )
    }
}

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/signalr", { useDefaultPath: false })
    .build();

connection.start().catch(err => document.write(err));

connection.on("messageReceived", (username, message) => {
    let m = document.createElement("div");

    m.innerHTML =
        `<div class="message-author">${username}</div><div>${message}</div>`;

    divMessages.appendChild(m);
    divMessages.scrollTop = divMessages.scrollHeight;
});

// tbMessage.addEventListener("keyup", (e) => {
//     if (e.keyCode === 13) {
//         send();
//     }
// });
//
// btnSend.addEventListener("click", send);
//
// function send() {
//     connection.send("newMessage", username, tbMessage.value)
//         .then(() => tbMessage.value = "");
// }
