import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  position: ${props => props.position || 'relative'};
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(${props => props.cols || props.theme.gridCols}, 1fr);

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

Grid.Item = styled.div`
  grid-column: span ${props => props.span || 1};

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

Grid.propTypes = {
  position: PropTypes.oneOf(['static', 'relative', 'absolute']),
  cols: PropTypes.number,
  styles: PropTypes.string,
};

Grid.Item.propTypes = {
  span: PropTypes.number,
  styles: PropTypes.string,
};

export default Grid;
