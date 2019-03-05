import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, #6574CD 0%, #2F365F 80%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="star" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG icon="star" width={8} fill={colors.teal} left="70%" top="20%" />
        <SVG icon="star" width={8} stroke={colors.orange} left="25%" top="5%" />
        <SVG icon="star" hiddenMobile width={24} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="star" hiddenMobile width={16} fill={colors.green} left="20%" top="90%" />
        <SVG icon="star" width={12} stroke={colors.white} left="90%" top="30%" />
        <SVG icon="star" width={16} fill={colors.yellow} left="70%" top="90%" />
        <SVG icon="star" hiddenMobile width={16} stroke={colors.teal} left="18%" top="75%" />
        <SVG icon="star" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="star" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="star" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="star" width={12} fill={colors.pink} left="80%" top="60%" />
      <SVG icon="star" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="star" width={12} fill={colors.yellow} left="29%" top="26%" />
      <SVG icon="star" width={16} stroke={colors.red} left="75%" top="30%" />
      <SVG icon="star" width={8} stroke={colors.yellow} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
