import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import {
  podcastFill,
  podcastStroke,
  podcastSideShape,
} from "../utils/imagePaths";
const Container = tw.div`
container
text-center
mx-auto
mt-32
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
const ContainerFluid = tw.div`
w-full
relative
`;
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
`;
const AboutImageWrapperNew = styled(AboutImageWrapper)`
  width: 75%;
  max-width: 430px;
  margin:0 auto;
  height:430px;
  position:relative;
  background-image: url(${podcastStroke});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
    img{
      display:block;
      margin:auto auto;
      height:100%;
      max-height:430px;
      width: 80%;
      position: absolute;
      top: -32px;
      right: 11%;
      max-width:430px;

    }
`;
function Podcast() {
  return (
    <ContainerFluid>
      <img
        className=" absolute h-80 z-10 top-1/4"
        src={podcastSideShape}
        alt="podcast_background"
      />
      <Container>
        <Box>
          <Title>Listen in to Explore Democracy</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            luctus ac risus elementum semper. Maecenas dapibus commodo accumsan.
            In dapibus orci quis urna ultricies, ut tempor risus aliquet.
            Quisque a consectetur nunc. Nullam dignissim purus a diam pulvinar,
            mollis aliquet erat tempus. Proin pellentesque iaculis justo, at
            vulputate ex efficitur in. Sed ultrices augue sodales felis
            fermentum congue. Sed quis quam id turpis tristique rutrum. Praesent
            condimentum libero tellus, in bibendum est scelerisque vulputate.
          </Paragraph>
        </Box>
        <AboutImageWrapperNew>
          <img
            className="bg1 absolute z-10 right-0 top-4"
            src={podcastFill}
            alt="about_blob_2"
          />
          <div className="podcast-container">
          <h3 className="text-2xl text-purple-600 text-bold font-bold" style={{zIndex:100,position:'absolute',top:'60px',transform:'translateY(35%)'}}>Lastest Episode</h3>
          <iframe style={{"borderRadius":"12px",zIndex:110,position:'absolute',top:'35%',transform:'translateY(-35%)'}} src="https://open.spotify.com/embed/playlist/0ER0lIlzwvxtKp59B4d2bR?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </AboutImageWrapperNew>
      </Container>
    </ContainerFluid>
  );
}

export default Podcast;
