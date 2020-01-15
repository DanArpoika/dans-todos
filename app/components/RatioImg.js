/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cover, size } from 'polished';

const makePercent = (part, whole, round = false) => {
  const percent = (part / whole) * 100;

  return round ? `${Math.round((percent * 10) / 10)}%` : `${percent}%`;
};

const makeMediaQueries = (pictures) => {
  if (!pictures) return;

  return pictures.map((picture) => {
    if (!picture.media || !picture.width || !picture.height) return '';

    return `
      @media${picture.media} {
        padding-bottom: ${makePercent(picture.height, picture.width)}
      }
    `;
  });
};

const Picture = ({ pictures, children }) => (
  pictures
    ?
      <picture>
        {pictures.map((pic, i) => (
          <source
            srcSet={pic.srcSet}
            media={pic.media}
            type={pic.type}
            key={i} // eslint-disable-line react/no-array-index-key
          />
        ))}
        {children}
      </picture>
    :
      <Fragment>
        {children}
      </Fragment>
);

const Img = styled.img`
  ${props => props.styles && css`
    ${props.styles}
  `}
`;

const Wrapper = styled.div`
  position: relative;

  &::after,
  ${Img} {
    display: block;
  }

  ${props => props.width && props.height && css`
    &::after {
    content: "";
    width: 100%;
    padding-bottom: ${makePercent(props.height, props.width)};

      ${props.picture && css`
        ${makeMediaQueries(props.picture)}
      `}
    }

    ${Img} {
      ${size('100%')}
      ${cover()}
      object-fit: cover;
    }
  `}
`;

const RatioImg = ({
  src,
  srcSet,
  picture,
  width,
  height,
  className,
  innerRef,
  imageStyles,
  style,
  as,
  ...rest
}) => (
  <Wrapper
    width={width}
    height={height}
    className={className}
    picture={picture}
    ref={innerRef}
    as={as}
    style={style}
  >
    <Picture pictures={picture}>
      <Img
        src={src}
        srcSet={srcSet}
        styles={imageStyles}
        {...rest}
      />
    </Picture>
  </Wrapper>
);

RatioImg.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  style: PropTypes.object,
  optionalArrayOf: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  imageStyles: PropTypes.string,
};

export default RatioImg;
