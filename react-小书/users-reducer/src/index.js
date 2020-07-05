import './index.css'

function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}

function renderApp(appState) {
    renderContent(appState)
}

function renderContent(content) {
    const contentDOM = document.getElementById('user');
    let text = '';
    content.forEach((ele) => {
        text += ele + ' | ';
    })
    contentDOM.innerHTML = text;
}

function usersReducer(state, action) {
    if (!state) {
        return [];
    }
    switch (action.type) {
        case 'ADD_USER':
            state.push([
                action.user.username,
                action.user.age,
                action.user.gender
            ])
            return state;
        case 'DELETE_USER':
            state.splice(action.index, 1);
            return state;
        case 'UPDATE_USER':
            state[action.index] = [action.user.username, action.user.age, action.user.gender];
            return state;
        default:
            return state
    }
}

const store = createStore(usersReducer)
store.subscribe(() => renderApp(store.getState())) // 监听数据变化

renderApp(store.getState()) // 首次渲染页面
    /* 增加用户操作 */
store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Lucy',
        age: 12,
        gender: 'Female'
    }
})
store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Candy',
        age: 18,
        gender: 'Female'
    }
})
store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Sandy',
        age: 20,
        gender: 'Male'
    }
})

/* 通过 id 删除用户操作 */
store.dispatch({
    type: 'DELETE_USER',
    index: 0 // 删除特定下标用户
})

/* 修改用户操作 */
store.dispatch({
    type: 'UPDATE_USER',
    index: 0,
    user: {
        username: 'Tomy',
        age: 12,
        gender: 'Male'
    }
})