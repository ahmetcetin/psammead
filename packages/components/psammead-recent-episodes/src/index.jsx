import React from 'react';
import styled from 'styled-components';
import { C_SHADOW, C_METAL, C_EBON, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';

import PlayButton from './playButtonJoro';

import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

// Wrapping Grid + adds the dividers
const RecentEpisodes = styled.ul`
  list-style: none;
  li {
    padding: 16px 0;
  }
  a:not(:last-child) li {
    border-bottom: 1px ${C_CLOUD_LIGHT} solid;
  }
`;

// Get SVG
// Align to top
const PlayIcon = styled.div`
  padding-top: 2px;
  padding-right: 16px;
  display: inline-block;
  vertical-align: top;
  @media(min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 8px;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

// Most stuff goes
RecentEpisodes.Episode = ({ children, Link, script, service}) => {
  return (
    <li>
      <Link>
        <PlayIcon><PlayButton /></PlayIcon>
        <Wrapper>
          {children.map(child => React.cloneElement(child, { script, service }))}
        </Wrapper>
      </Link>
    </li>
  );
};

const base = styled.span`
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
`; 

RecentEpisodes.BrandTitle = styled(base)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  @media(min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 16px;
  }
`;

RecentEpisodes.EpisodeTitle = styled(base)`
  font-size: 15px;
  line-height: 18px;
  @media(min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    font-size: 14px;
  }
  margin: 4px 0;
`;

RecentEpisodes.Duration = styled(base)`
  font-size: 14px;
  line-height: 18px;
  color: ${C_METAL};
`;

RecentEpisodes.Date = styled(base)`
  font-size: 14px;
  line-height: 18px;
`;

RecentEpisodes.propTypes = {};

RecentEpisodes.defaultProps = {};

const StyledSVG = styled.svg``

export default RecentEpisodes;
