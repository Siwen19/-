import { CHANGE_INPUT, CLEAR_INPUT } from './actions';
const initState = {
    inputValue: '',
    payload: []
}

export default {
    toDoList(state = initState, action) {
        const { type, payload } = action;
        switch (type) {
            case CHANGE_INPUT:
                state.payload.push(payload);
                return {
                    inputValue: '',
                    payload: state.payload
                }
            case CLEAR_INPUT:
                return {
                    inputValue: payload,
                    payload: state.payload
                }
            default:
                return state;
        }
    }
}
