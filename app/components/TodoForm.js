import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'Components/Container';
import Action from 'Components/Action';
import PropTypes from 'prop-types';
import { rem, position } from 'polished';

const Form = styled.form`
  padding: 28px 0;
`;

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  background: none;
  appearance: none;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
`;

const Submit = styled(Action)`
  ${position('absolute', null, 0, null, null)}
  color: ${props => props.theme.blue};
`;

const Error = styled.span`
  font-weight: 600;
  font-size: ${rem(12)};
  line-height: ${rem(12)};
  ${position('absolute', null, null, -12, 0)}
  color: ${props => props.theme.red};
`;

const TodoForm = ({
  dispatch = () => {},
}) => {
  const [todoText, setTodoText] = useState('');
  const [errorText, setErrorText] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // Clear error.
    setErrorText(null);

    if (todoText.length <= 0) {
      return setErrorText('Your todo item cannot be empty.');
    }

    setTodoText('');
    dispatch({ type: 'addTodo', todo: todoText });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            value={todoText}
            placeholder="Add a new todo"
            onChange={(e) => {
              // Clear error if one.
              setErrorText(null);
              setTodoText(e.target.value);
            }}
          />
          {errorText &&
            <Error>{errorText}</Error>
          }
          <Submit>Submit</Submit>
        </FormGroup>
      </Form>
    </Container>
  );
};

TodoForm.propTypes = {
  dispatch: PropTypes.func,
};

export default TodoForm;
