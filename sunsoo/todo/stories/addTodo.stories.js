import React from 'react';
import { storiesOf } from '@storybook/react';
import AddTodo from "../src/components/AddTodo"

storiesOf('AddTodo', module).add('list', () => <AddTodo />);