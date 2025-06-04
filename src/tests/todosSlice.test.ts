import todosReducer, { addTodo, toggleTodo, clearCompleted } from '../features/todos/todosSlice';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todosReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle addTodo', () => {
    const actual = todosReducer([], addTodo('Test todo'));
    expect(actual[0].text).toEqual('Test todo');
    expect(actual[0].completed).toBe(false);
  });

  it('should handle toggleTodo', () => {
    const initialState = [{ id: '1', text: 'Test', completed: false }];
    const actual = todosReducer(initialState, toggleTodo('1'));
    expect(actual[0].completed).toBe(true);
  });

  it('should handle clearCompleted', () => {
    const initialState = [
      { id: '1', text: 'Test 1', completed: true },
      { id: '2', text: 'Test 2', completed: false }
    ];
    const actual = todosReducer(initialState, clearCompleted());
    expect(actual.length).toBe(1);
    expect(actual[0].id).toBe('2');
  });
});