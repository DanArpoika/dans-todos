import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import screen from 'superior-mq';
import { parseJSON, format } from 'date-fns';
import { rem, size, position } from 'polished';
import Container from 'Components/Container';
import UnstyledList from 'Components/UnstyledList';
import Action from 'Components/Action';
import { bp } from 'Styles/helpers';

const TodoList = styled(UnstyledList)`
  padding-left: 47px;
  padding-top: 5px;

  ${screen.below(bp.portrait, `
    padding-left: 37px;
  `)}
`;

const TodoAction = styled(Action)`
  ${position('absolute', null, 0, null, null)}
  opacity: 0;
  color: ${props => props.theme.red};

  ${screen.below(bp.portrait, `
    opacity: .55;
  `)}
`;

const TodoItem = styled.li`
  position: relative;
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

TodoItem.Group = styled.div`
  width: 100%;

  :hover,
  :focus {
    ${TodoAction} {
      opacity: 1;
    }
  }
`;

const TodoTitle = styled.span`
  display: block;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
`;

const TodoDate = styled.time`
  font-weight: 600;
  font-size: ${rem(11)};
  line-height: ${rem(12)};
  letter-spacing: .01em;
  text-transform: uppercase;
  color: ${props => props.theme.darkGray};
`;

const afterStyles = css`
  ${size(12)}
  ${position('absolute', 2, 0, 0, 2)}
  content: "";
  border-radius: 50%;
  background-color: ${props => props.theme.blue};
`;

const Circle = styled.div`
  ${size(20)}
  ${position('absolute', null, null, null, -47)}
  border-radius: 50%;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.completed ? props.theme.blue : '#C4C4C4'};

  ${screen.below(bp.portrait, `
    left: -37px;
  `)}

  &:hover {
    cursor: pointer;
    border: 2px solid ${props => props.theme.blue};

    &::after {
      ${afterStyles}
    }
  }

  ${props => props.completed && css`
    &::after {
      ${afterStyles}
    }
  `}
`;

const FakeTodoItem = styled(TodoItem)`
  min-height: 30px;
`;

const FakeCircle = styled(Circle)`
  pointer-events: none;
`;

const FakeTitle = styled(TodoTitle)`
  display: block;
  background-color: ${props => props.theme.lightGray};
  border-radius: 4px;
  width: 100%;
  height: 20px;
  margin-bottom: 8px;
`;

const FakeDate = styled(TodoDate)`
  display: block;
  background-color: ${props => props.theme.lightGray};
  border-radius: 4px;
  width: 100%;
  height: 10px;
`;

const TodoListing = ({
  todos = [],
  dispatch = () => {},
  loading = false,
}) => {
  const fakeItems = [0, 1, 2];

  return (
    <Container>
      <TodoList>
        {loading && fakeItems.map(() => (
          <FakeTodoItem>
            <FakeCircle />
            <TodoItem.Group>
              <FakeTitle />
              <FakeDate />
            </TodoItem.Group>
          </FakeTodoItem>
        ))}
        {todos.map(todo => (
          <TodoItem key={`todo-${todo.id}`}>
            <Circle
              completed={todo.completed}
              onClick={() => dispatch({ type: 'completeTodo', todoId: todo.id })}
            />
            <TodoItem.Group>
              <TodoTitle>{todo.text}</TodoTitle>
              <TodoDate>{format(parseJSON(new Date(todo.date)), 'h:mm a MMMM d, yyyy')}</TodoDate>
              <TodoAction
                onClick={() => dispatch({ type: 'removeTodo', todoId: todo.id })}
              >
                Remove
              </TodoAction>
            </TodoItem.Group>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

TodoListing.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
};

export default TodoListing;
