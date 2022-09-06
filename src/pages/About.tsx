import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { aboutBlob,aboutBlobStroke,aboutSideShape } from "../utils/imagePaths";
const Container = tw.div`
container
text-center
mx-auto
mt-32
lg:mt-24
px-0
md:px-10
lg:px-24
xl:px-14
2xl:px-36
md:text-left
flex-none
md:flex
md:items-center
min-h-[55vh]
z-20
relative
`;
// xl:px-14
const ContainerFluid = tw.div`
w-full
relative
`
const Title = tw.div`
text-3xl
xsm:text-3.25xl
md:text-4xl
lg:text-2.5xl
font-bold
xsm:leading-[43px]
text-purple-600
mb-2
max-w-sm
sm:max-w-md
md:max-w-full
mx-auto
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
mx-auto
`;
const Box = tw.div`
w-full
md:pr-12
xl:pr-0
`;
const AboutImageWrapper = tw.div`
h-auto
relative
w-auto
`
const  AboutImageWrapperNew = styled(AboutImageWrapper)`
width: 75%;
height: 400px;
img {
  height:350px;
  width:100%;
  object-fit: contain;
}
@media only screen and (max-width: 640px) {
  margin: 0 auto;
  img {
    height:250px;
  }
}

`
function About() {
  return (
    <ContainerFluid>
      <img className=" absolute h-80 z-10 top-1/4" src={aboutSideShape} alt="about_background"/>
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
      <AboutImageWrapperNew>
        <img className=" absolute z-10 right-0 top-4"  src={aboutBlobStroke} alt="about_blob_2"/>
        <img className=" absolute z-1 top-0 right-8" src={aboutBlob} alt="about_blob_1" />
        </AboutImageWrapperNew>
    </Container>
    </ContainerFluid>
  );
}
export default About;
