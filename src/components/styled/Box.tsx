import styled, { AnyStyledComponent } from 'styled-components';

import {
  background,
  layout,
  opacity,
  color,
  position,
  zIndex,
  overflow,
} from 'styled-system';

const Box: AnyStyledComponent = styled.div`
  ${background}
  ${layout}
  ${opacity}
  ${color}
  ${position}
  ${zIndex}
  ${overflow}
`;

export default Box;
