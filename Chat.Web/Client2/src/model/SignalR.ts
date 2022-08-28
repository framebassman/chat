import * as signalR from '@aspnet/signalr';

export const sendMessageCommand = 'NewMessage';
export const chatHubConnection = new signalR.HubConnectionBuilder().withUrl('signalr').build();
