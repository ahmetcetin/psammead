import styled from '@emotion/styled';

import { C_PEBBLE } from '@bbc/psammead-styles/colours';

const CardLink = styled.a`
  color: unset;
  text-decoration: none;
  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    overflow: hidden;
    z-index: 1;
  }
  &:visited {
    .podcast-promo--visited {
      color: ${C_PEBBLE};
    }
  }
  &:focus {
    .podcast-promo--focus {
      text-decoration: underline;
    }
  }
`;

export default CardLink;
