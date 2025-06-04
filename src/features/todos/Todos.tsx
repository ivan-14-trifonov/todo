import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Todo, FilterType } from './todoTypes';
import { List, ListItem, Checkbox, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleTodo, removeTodo } from './todosSlice';

interface TodosProps {
  filter: FilterType;
}

const Todos: React.FC<TodosProps> = ({ filter }) => {
  const todos = useSelector((state: RootState) => {
    switch (filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  });

  const dispatch = useDispatch();

  return (
    <List sx={{ marginTop: 2, marginBottom: 2 }}>
      {todos.map((todo: Todo) => (
        <ListItem key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <ListItemText
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            primary={todo.text}
          />
          <IconButton onClick={() => dispatch(removeTodo(todo.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Todos;