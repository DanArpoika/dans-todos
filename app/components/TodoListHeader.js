import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import Container from 'Components/Container';
import Action from 'Components/Action';

const Header = styled.header`
  height: 41px;
  background-color: ${props => props.theme.lightGray};
  border-top: 1px solid #C4C4C4;
  border-bottom: 1px solid #C4C4C4;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const commonStyles = css`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${rem(11)};
  line-height: ${rem(12)};
  letter-spacing: .01em;
`;

const Count = styled.span`
  ${commonStyles}
  color: ${props => props.theme.darkGray};
`;

const RemoveAction = styled(Action)`
  color: ${props => props.theme.black};
`;

const TodoListHeader = ({
  todosCount = 0,
  todosCompleted = 0,
  dispatch = () => {},
}) => (
  <Header>
    <StyledContainer>
      <Count>{todosCount} TODOS</Count>
      {todosCompleted > 0 &&
        <RemoveAction onClick={() => dispatch({ type: 'removeAllTodos' })}>Remove Completed</RemoveAction>
      }
    </StyledContainer>
  </Header>
);

TodoListHeader.propTypes = {
  todosCount: PropTypes.number,
  todosCompleted: PropTypes.number,
  dispatch: PropTypes.func,
};

export default TodoListHeader;
