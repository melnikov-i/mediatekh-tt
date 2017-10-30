import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const tableHeadCollection = 
( state: RootState ) => state.table.tableHeadCollection;

export const tableHeadCollectionSelector = createSelector(
  [ tableHeadCollection ],
  (tableHeadCollection) => tableHeadCollection
);

/*

import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = ( todos, filter ) => {
  switch ( filter ) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

const mapStateToProps = ( state ) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter);
  }
}

mapDispatchToProps = ( dispatch ) => {
  return {
    onTodoClick: ( id ) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;

======================================

import { createSelector } from 'reselect';

const getVisibilityFilter = ( state ) => state.visibilityFilter;
const getTodos = ( state ) => state.todos;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch ( filter ) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }
);

*/