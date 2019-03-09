import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  saturn: {
    shape: (
    <ellipse
      strokeWidth="1px"
      transform="matrix(0.967 -0.2548 0.2548 0.967 -48.2133 71.1075)"
      cx="25.038"
      cy="22.166"
      rx="6.79"
      ry="0.557"
      />

    ),
    viewBox: '0 0 30 30',
  },
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5"
      />
    ),
    viewBox: '0 0 30 30',
  },
  sunShape: {
    shape: (
      <circle
        cx="5"
        cy="5"
        r="4"
        />
    ),
    viewBox: '0 0 30 30',
  },
  california: {
    shape: (
      <path d="M25.403,21.563c-0.05-0.19-0.82-0.16-1.97,0.03c-0.35-0.97-1.27-1.66-2.35-1.66c-1.38,0-2.5,1.12-2.5,2.5 c0,0.14,0.01,0.28,0.03,0.41c-1.37,0.47-2.26,0.92-2.2,1.13c0.06,0.22,1.11,0.15,2.59-0.15c0.45,0.67,1.21,1.1,2.07,1.1 c1.34,0,2.43-1.05,2.5-2.38C253.36,216.2,254.08,215.82,254.03,215.63z M249.62,217.14c-2.08,0.57-3.81,0.87-3.86,0.68 c-0.05-0.19,1.59-0.81,3.67-1.38c2.08-0.57,3.81-0.87,3.86-0.68C253.35,215.95,251.7,216.57,249.62,217.14z"/>
      ),
  viewBox: '0 0 30 30'
  },
  star: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="11.838,9.993 10.881,8.203 8.864,7.978 10.269,6.514 9.86,4.526 11.687,5.411 13.451,4.407 13.174,6.418 14.674,7.786 12.676,8.144 "/>
    ),
    viewBox: '0 0 30 30'
  },
  ellipse: {
    shape: (
      <ellipse
        strokeWidth="1px"
        cx="20"
        cy="9"
        rx="11"
        ry="4"
        />
    ),
    viewBox: '0 0 30 30'
  },
  steps: {
    shape: (
      <polyline
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="0,4 4,4 4,8 8,8 8,12 12, 12,12,16 16,16 16,20 20,20 20"
        />
    ),
    viewBox: '0 0 30 30'
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
