import * as signalR from "@aspnet/signalr";

const sendMessageType = 'SEND_MESSAGE';
const initialState = { count: 0 };

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/signalr", { useDefaultPath: false })
    .build();

export const actionCreators = {
    sendMessage: () => ({ type: sendMessageType })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === incrementCountType) {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === decrementCountType) {
        return { ...state, count: state.count - 1 };
    }

    return state;
};
