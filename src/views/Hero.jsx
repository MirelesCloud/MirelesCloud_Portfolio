import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide, LeftRight, ColorChange, ArcRise, SaturnRise } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset}>
      <ColorChange>

        <SVG icon="star" width={12} fill={colors.yellow} left="50%" top="20%"/>
        <SVG icon="saturn" hiddenMobile width={64} fill={colors.purple} left="5%" top="90%" />
      </ColorChange>
      <ArcRise>
          <SVG icon="sunShape" width={24} fill={colors.orange} left="1%" top="50%" />
      </ArcRise>

      <LeftRight>
      <SVG icon="star" width={24} fill={colors.red} left="50%" top="70%" />

      </LeftRight>
      <UpDown>
        <SVG icon="ellipse" hiddenMobile width={6} fill={colors.red} left="10%" top="20%" />
        <SVG icon="star" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="star" hiddenMobile width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="star" width={12} fill={colors.white} left="90%" top="50%" />
        <SVG icon="ellipse" width={60} stroke={colors['grey-darkest']} left="30%" top="55%"/>
        <SaturnRise>
          <SVG icon="sunShape" width={60} fill={colors['red-darkest']} left ="75%" top="65%"/>
        </SaturnRise>
        <SVG icon="star" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="star" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="star" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="star" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="california" hiddenMobile width={36} fill={colors.white} left="5%" top="70%" />
      <SVG icon="star" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="star" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="star" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      <SVG icon="star" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="star" hiddenMobile width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="star" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="star" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="star" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="ellipse" width={6} stroke={colors['grey']} left="10%" top="50%" />
      <SVG icon="star" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
