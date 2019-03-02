import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/me-dtla.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Alex Mireles
        </BigTitle>
        <Subtitle>Developer, Husband, casual guitarrero</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>My Work</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Century Custom Coach"
            link="https://www.centurycustomcoach"
            bg="linear-gradient(to right, #EF5753 0%, #CC1F1A 100%)"
          >
            Automotive Mechanic, Paint & Body Shop. Just lunched in prod.
          </ProjectCard>
          <ProjectCard
            title="The Yellow Smoke Shop"
            link="https://www.theyellowsmokeshop.com"
            bg="linear-gradient(to right, #F2D024 0%, #684F1D 100%)"
          >
            Head shop in Redondo Beach, CA.
          </ProjectCard>
          <ProjectCard
            title="Vapeplace CBD"
            link="https://vibrant-ptolemy-971c71.netlify.com/"
            bg="linear-gradient(to right, #51D88A 0%, #1F9D55 100%)"
          >
            CBD Shop in West Los Angeles, CA.  Work in progress.
          </ProjectCard>
          <ProjectCard
            title="Heather Watson"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #7886D7 0%, #5661B3 100%)"
          >
            Holistic Health Practitioner.  Just got started on this one.
          </ProjectCard>
          <ProjectCard
            title="Class of '68"
            link="http://gemstateclassof68.com.s3-website-us-east-1.amazonaws.com/"
            bg="linear-gradient(to right, #A779E9 0%, #794ACF 100%)"
          >
            One of my first ReactJs based projects.
          </ProjectCard>
          <ProjectCard
            title="Ruby on Rails"
            link="https://sleepy-mountain-30199.herokuapp.com/welcome"
            bg="linear-gradient(to right, #FA7EA8 0%, #EB5286 100%)"
          >
           An older portfolio based on RoR showing various projects.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Mireles" style={{
              filter:"grayscale(100%)"
            }} />
          <AboutSub>
            The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently. <br/>
          <small>-Friedrich Wilhelm Nietzsche, The Dawn, 1881</small>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I live in Southern California, I am UCLA graduate, speak German and Spanish, and drink beer. In a previous life I worked in the financial services industry and business; primarily in analytical and managerial roles. Now I'm doing what I want and love to do.

        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 <a href="https://mirelescloud.com">MirelesCloud</a>.{' '}
            Design by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
