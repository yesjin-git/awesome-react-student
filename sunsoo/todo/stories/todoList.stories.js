import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from "../src/components/TodoList"

storiesOf('TodoList', module).add('list', () => (
    <TodoList
        todos={[{text:"장보기"},{text:"청소"},{text:"빨래"}]}
        onTodoClick={() => {
            console.log('123')
        }}
    />
  ));