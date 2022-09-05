import React from "react";
import tw from "tailwind-styled-components";
import { aboutBlob,aboutBlobStroke,aboutSideShape } from "../utils/imagePaths";
const Container = tw.div`
container
text-center
m-auto
mt-20
md:text-left
flex-none
md:flex
`;

const Title = tw.div`
text-3xl
xsm:text-3.25xl
md:text-4xl
lg:text-2.5xl
font-bold
xsm:leading-[43px]
text-purple-600
mb-7
max-w-sm
sm:max-w-md
md:max-w-full
`;
const Paragraph = tw.div`
text-center
md:text-left
xsm:text-lg
md:text-lg
text-purple-700
mb-7
leading-9
max-w-sm
sm:max-w-md
md:max-w-full
`;
const Box = tw.div`
w-full
`;
const AboutImageWrapper = tw.div`
h-96
w-full
relative
`
function About() {
  return (
    <Container>
      <Box>
        <Title>Our Vision</Title>
        <Paragraph>
          Engage is a laboratory for democracy. Technology has radically changed
          every aspect of our lives, including politics and civic engagement.
          Many originally hoped that the internet and social media would
          inaugurate a golden age for democracy. Sadly, so far in the
          information age, we’ve seen the opposite. The internet has made it
          easier than ever to silo yourself in echo chambers, to see the other
          side as your enemy, and to view democracy through the lens of
          clickbait and hot takes.
          <br />
          Engage aims to change all that. Starting with simple, straightforward
          technology that keeps you updated on important policies and elections
          at the local, state, and federal levels, Engage is building tools that
          can help you be a better, more effective citizen. If we get this
          right, together, we can find ways to use the awesome power of
          technology to truly restore the health of our democracy and civic
          society
        </Paragraph>
      </Box>
      <AboutImageWrapper>
        <img className=" absolute z-10" style={{left:'12%',top:'10%'}} src={aboutBlobStroke} alt="about_blob_2"/>
        <img className=" absolute z-1 top-0" src={aboutBlob} alt="about_blob_1" />
        </AboutImageWrapper>
    </Container>
  );
}
export default About;
