import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${props => props.styles && css`
    ${props.styles}
  `}
`;

UnstyledList.Item = styled.li`
  display: ${props => props.display || 'inline-block'};
`;

UnstyledList.propTypes = {
  styles: PropTypes.string,
};

UnstyledList.Item.propTypes = {
  display: PropTypes.string,
};

export default UnstyledList;
