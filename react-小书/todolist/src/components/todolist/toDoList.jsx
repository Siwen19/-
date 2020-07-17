import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

function ToDoList(props) {
    const { toDoList, handleInputText } = props;

    const handleClickEvent = () => {
        const user_input = document.getElementById('user-input');
        handleInputText([user_input.value]);
    }

    const handleChangeText = (event) => {
        handleInputText(event.target.value);
    }
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    id='user-input'
                    style={{ width: '250px', marginRight: '10px' }}
                    value={toDoList.inputValue}
                    onInput={handleChangeText}
                />
                <Button type='primary'
                    onClick={handleClickEvent}>添加</Button>
            </div>
            <div style={{ margin: '10px 470px', width: '300px' }}>
                <List bordered
                    dataSource={toDoList.payload}
                    renderItem={item => (<List.Item>{item}</List.Item>)} />
            </div>
        </div>
    );
}

export default ToDoList;