import * as signalR from "@aspnet/signalr";

export interface ChatState {
  nick: string,
  message: string,
  messages: string[],
  hubConnection: signalR.HubConnection,
}
