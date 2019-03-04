import tw from 'tailwind.macro'
import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const leftRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
`
const colorChange = keyframes`
  from {
    background-color: ##191E38;
  }
  to {
    background-color: #5661B3;
  }
`

const arcRise = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
const arcAnimation = css`
  ${arcRise} 30s linear infinite;
`

const colorChangeAnimation = css`
  ${colorChange} 15s ease-in-out infinite alternate;
`

const leftRightAnimation = css`
  ${leftRight} 18s ease-in-out infinite alternate;
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const ArcRise = styled.div`
  animation: ${arcAnimation};
  ${tw`pin absolute`};
`

export const ColorChange = styled.div`
  animation: ${colorChangeAnimation};
  ${tw`pin absolute`};
`

export const LeftRight = styled.div`
  animation: ${leftRightAnimation};
  ${tw`pin absolute`};
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
