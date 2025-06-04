import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renders add todo form', () => {
  render(
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
  );
  expect(screen.getByLabelText(/новая задача/i)).toBeInTheDocument();
});

export {}; // Если не делаете реальные экспорты