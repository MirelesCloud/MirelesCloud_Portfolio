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
      <path d="M219.5,451.4c-7.1-18.1-10.1-31.6-17.1-42.6c-7.6-11.9-21.9-19.9-27.6-32.2c-8.2-17.8-15.7-38-15.4-57 c0.4-28.1-6.4-49.6-28.8-67c-16.5-12.9-10.7-29.5-3.9-45.5c12.3-28.5,22.6-57.4,15.5-89.4c-2.5-11.1-4-22.3-6.3-35.6h295.3 c0,25.8-0.2,50.7,0,75.5c0.5,58.5,0.6,117,2.3,175.4c0.3,9.6,5.4,22,12.5,28.1c119.6,101.9,239.7,203.2,360.1,304.1 c21.7,18.2,41.3,37.7,52.1,64.8c1.9,4.7,6.8,8.6,11,11.9c13.6,10.4,15,22,1,31s-17.6,18.7-13.9,34.7c1.8,7.7-3.5,17.1-5.7,25.7 c-2.3,9-4.8,18.1-7.2,27.1l6.8-1.6c5.2,8.8,15.5,18.5,14.3,26.3c-1.1,7-14.2,15.4-23.2,17.3c-55.7,11.6-111.7,21.6-167.6,32.1 c-16.9,3.1-29.5-10-32.8-26.9c-2.8-14.4-8.2-31.3-18.4-40.6c-17.5-16.1-32.9-39.1-62.2-36.2c-1.7,0.2-5.1-1.8-5.1-2.8 c-0.7-25.7-20.9-18.5-35.5-22.8c-11.5-3.3-21-13.1-31.9-19.1c-9.2-5.1-18.8-10.6-28.9-13c-22.2-5.2-46.6,5.2-67.6-11.2 c-8-6.3-12-9.4-8.5-21.3c4.1-14.3,6.4-32-14-39.5c-3.4-30.6-38.4-38.7-46.8-65.9c-1-3.1-3-7.6-5.4-8.2 c-31.5-7.6-29.2-35.6-36.3-58.2c-3.7-11.7-10.6-22.4-14.3-34c-6-18.7-11.3-37.8-15.4-57C246,456.8,228.1,455.3,219.5,451.4z"/>
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
        cy="8"
        rx="10"
        ry="5"
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
