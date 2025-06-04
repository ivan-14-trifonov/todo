import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';

const Todo = ({ onClick, completed, text }) => {
  const handleToggle = () => onClick();

  return (
    <ListItem>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'text.disabled' : 'text.primary'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;