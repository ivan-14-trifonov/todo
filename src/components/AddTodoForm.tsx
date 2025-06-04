import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        marginBottom: 3
      }}
    >
      <TextField
        label="Новая задача"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        size="small"
      />
      <Button 
        type="submit" 
        variant="contained"
        sx={{
          whiteSpace: 'nowrap',
          height: '40px'
        }}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default AddTodoForm;