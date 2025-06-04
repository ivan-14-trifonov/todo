import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Typography,
  Chip,
  Divider,
  Paper
} from '@mui/material';

export const Footer = () => {
  const todos = useSelector(state => state.todos);
  const remaining = todos.filter(todo => !todo.completed).length;
  const dispatch = useDispatch();

  return (
    <Paper 
      component="footer" 
      sx={{ 
        p: 2,
        mt: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="body1">
          Осталось задач: <Chip label={remaining} color="primary" size="small" />
        </Typography>
        <Button 
          variant="outlined" 
          size="small"
          onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
        >
          Очистить выполненные
        </Button>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body2" color="text.secondary">
          Show:
        </Typography>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          <Button size="small">All</Button>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          <Button size="small">Active</Button>
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          <Button size="small">Completed</Button>
        </FilterLink>
      </Box>
    </Paper>
  );
};

export default Footer;