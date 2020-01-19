
import styled from 'styled-components';
import { rem } from 'polished';
import UnstyledButton from 'Components/UnstyledButton';

const Action = styled(UnstyledButton)`
  font-weight: 600;
  font-size: ${rem(12)};
  line-height: ${rem(12)};
  text-transform: uppercase;
`;

export default Action;
