import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { 
    Box,
    TextField,
    Button,
    Paper
} from '@mui/material';

let AddTodo = ({ dispatch }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            return;
        }
        dispatch(addTodo(inputValue));
        setInputValue('');
    };

    return (
        <Box component={Paper} p={2} mb={2}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" gap={1}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add new todo..."
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Add Todo
                    </Button>
                </Box>
            </form>
        </Box>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo;