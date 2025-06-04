import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { FilterType } from '../features/todos/todoTypes';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../features/todos/Todos';
import FilterButtons from '../components/FilterButtons';
import TodoStats from '../components/TodoStats';
import Box from '@mui/material/Box'; // Добавлен импорт Box
import Typography from '@mui/material/Typography'; // Добавлен импорт Typography

const MainPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        ToDo
      </Typography>
      <AddTodoForm />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <TodoStats />
      <TodoList filter={filter} />
    </Box>
  );
};

export default MainPage;