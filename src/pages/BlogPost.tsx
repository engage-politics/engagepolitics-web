import React from "react";
import { useParams, Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { postSideShape, postSideShape2 } from "../utils/imagePaths";
import { BlogPosts } from "../content/main.content";
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
md:text-base
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
px-2
sm:w-11/12
md:pr-12
xl:pr-0
`;
const PostImage = tw.img`
block
max-h-[300px]
`
const Subtitle = tw.h6`
text-xs
text-blue-500
`;
function BlogPost() {
  let { id } = useParams<{ id: any }>();
  let pid: number = parseInt(id);
  return (
    <ContainerFluid>
      <img
        className=" absolute h-96 z-10 top-[20%] right-0"
        src={postSideShape}
        alt="post_background"
      />
      <img
        className=" absolute h-96 z-10 top-2/3 right-0"
        src={postSideShape2}
        alt="post_background2"
      />
      <Container>
        <Box>
          <PostImage src={BlogPosts[pid].image} width="100%" heigth="300px"/>
          <Subtitle className="text-left text-sm text-blue-500 mt-5">{BlogPosts[pid].date}</Subtitle>
          <Link to="/blog">
          <Subtitle className="text-left font-bold text-purple-888 mb-2">Back</Subtitle>
          </Link>
          <Title className="text-left sm:mx-0 mb-4">
            {BlogPosts[pid].title}{" "}
          </Title>
          <Paragraph className="text-left md:text-left leading-7 md:leading-7 sm:m-0 ">{BlogPosts[pid].text}</Paragraph>
        </Box>
      </Container>
    </ContainerFluid>
  );
}

export default BlogPost;
