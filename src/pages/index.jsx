import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

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
import Skills from '../views/Skills'
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

const SkillsDesc = styled.div`
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
    <Parallax pages={6}>
      <Hero offset={0}>
        <BigTitle>Alex Mireles</BigTitle>
        <Subtitle>Developer, Husband, casual guitarrero</Subtitle>
        <a href="mailto:mirelescloud@gmail.com" aria-label="e-mail">
          <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/alex-mireles-0a79999a/" aria-label="linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
        </a>
        <a href="https://github.com/MirelesCloud" aria-label="Github">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
        <a href="https://twitter.com/AlexMireles310" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
        </a>
      </Hero>
      <Projects offset={1}>
        <Title>My Work</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Century Custom Coach"
            link="https://www.centurycustomcoach.com"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            Automotive Mechanic, Paint & Body Shop in West L.A.
          </ProjectCard>
          <ProjectCard
            title="The Yellow Smoke Shop"
            link="https://www.theyellowsmokeshop.com"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            Smoke shop in Redondo Beach, CA.
          </ProjectCard>
          <ProjectCard
            title="El Nogal Crop Monitor"
            link="https://nifty-neumann-9cf365.netlify.app"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            A crop and water managment application with a Nodejs/Apollo Graphql backend. In current development.
          </ProjectCard>
          <ProjectCard
            title="Go Live Well"
            link="https://www.golivewell.com"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            Holistic Health Practitioner. Just launched in production.
          </ProjectCard>
          <ProjectCard
            title="White Raven"
            link="https://flamboyant-shirley-46de22.netlify.com//"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            Artist Web App in current development.
          </ProjectCard>
          <ProjectCard
            title="NY Times Book Reviews"
            link="https://mirelescloud.github.io/mirelescloud-nytimes-book-review/"
            bg="linear-gradient(-45deg, #22292F 15%, #3D4852, #22292F)"
          >
            A react-app using REST API
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Skills offset={3}>
        <Title>TECHNOLOGIES I WORK WITH</Title>
        <SkillsDesc>
          <strong>Mostly</strong>
          <p>
            Javascript/ReactJS, ES6/Typescript, HTML/CSS(Boostrap, styled-components, emotion, reacstrap),
            npx/Gatsbyjs/Webpack/Parcel/Babel, NodeJS, Apollo/Graphql, REST API, Linux/OSX, Git, CLI/SSH.
          </p>
          <strong>Sometimes</strong>
          <p>
            MongoDB, Python, Jest, Mocha, Enzyme, AWS (EC2, S3, Cloudfront, Codebuild, Codepipeline, Lambda, SNS, SES,
            SES, Cloudwatch, Route53, DynamoDB) .
          </p>
          <strong>In the past</strong>
          <p>AWS/VPC/VPN/Cloudformation, Ruby on Rails, C++, JQuery.</p>
        </SkillsDesc>
      </Skills>
      <About offset={4}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar
            src={avatar}
            alt="Alex Mireles"
            style={{
              filter: 'grayscale(100%)',
            }} />
          <AboutSub>
            I live in Southern California, I am a UCLA graduate, speak German and Spanish, beer lover - hell raiser. In
            a previous life, I worked in the financial services industry and business; primarily in analytical and
            managerial roles. Now I'm doing what I want and love to do.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those
          who think differently. <br />
          <small>-- F. W. Nietzsche, The Dawn, 1881</small>
        </AboutDesc>
      </About>
      <Contact offset={5}>
        <Inner>
          <Title>Contact Me</Title>
          <ContactText>
            <a href="mailto:mirelescloud@gmail.com" aria-label="e-mail">
              <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/alex-mireles-0a79999a/" aria-label="linkedin">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
            <a href="https://github.com/MirelesCloud" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
            <a href="https://twitter.com/AlexMireles310" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 <a href="https://mirelescloud.com">MirelesCloud</a>.{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
