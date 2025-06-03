import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const Footer = () => {
  const todos = useSelector(state => state.todos);
  const remaining = todos.filter(todo => !todo.completed).length;
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div>
        <span>Осталось задач: {remaining}</span>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
            Очистить выполненные
        </button>
      </div>

      <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink
            filter={VisibilityFilters.SHOW_COMPLETED}
        >
            Completed
        </FilterLink>
      </div>
    </div>
  );
};

export default Footer;