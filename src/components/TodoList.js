import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { List } from '@mui/material';

const TodoList = ({ todos, onTodoClick }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        {...todo}
        onToggle={() => onTodoClick(index)}
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
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;