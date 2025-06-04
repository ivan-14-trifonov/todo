import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { List } from '@mui/material';

const TodoList = ({ todos, onTodoToggle }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        {...todo}
        onToggle={() => onTodoToggle(index)}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoToggle: PropTypes.func.isRequired,
};

export default TodoList;