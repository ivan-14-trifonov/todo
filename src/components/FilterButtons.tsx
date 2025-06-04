import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { FilterType } from '../features/todos/todoTypes';

interface FilterButtonsProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
  return (
    <ButtonGroup>
      <Button 
        variant={currentFilter === 'all' ? 'contained' : 'outlined'}
        onClick={() => setFilter('all')}
      >
        Все
      </Button>
      <Button 
        variant={currentFilter === 'active' ? 'contained' : 'outlined'}
        onClick={() => setFilter('active')}
      >
        Активные
      </Button>
      <Button 
        variant={currentFilter === 'completed' ? 'contained' : 'outlined'}
        onClick={() => setFilter('completed')}
      >
        Завершенные
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtons;