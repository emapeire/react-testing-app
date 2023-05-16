import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer with a passion for learning and creating new things. I am currently looking for a new opportunity to grow and learn as a developer.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>About me</Button>
    </LeftSection>
  </Section>
);

export default Hero;