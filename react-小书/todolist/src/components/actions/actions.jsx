export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

export function setInput(data) {
    return {
        type: CHANGE_INPUT,
        inputValue: '',
        payload: data
    }
}

export function clearInput(data) {
    return {
        type: CLEAR_INPUT,
        payload: data,
    }
}

export function handleInputText(text) {
    return (dispatch, getState) => {
        if (Array.isArray(text)) {
            dispatch(setInput(text));
        } else {
            dispatch(clearInput(text));
        }
    }
}
