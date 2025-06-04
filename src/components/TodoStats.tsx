import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { Button, Typography, Box } from '@mui/material';
import { clearCompleted } from '../features/todos/todosSlice';

const TodoStats: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const remaining = todos.filter(todo => !todo.completed).length;
  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        Осталось задач: {remaining}
      </Typography>
      {todos.some(todo => todo.completed) && (
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(clearCompleted())}
          sx={{ mt: 1 }}
        >
          Очистить выполненные
        </Button>
      )}
    </Box>
  );
};

export default TodoStats;