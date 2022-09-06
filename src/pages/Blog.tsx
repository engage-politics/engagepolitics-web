import tw from "tailwind-styled-components";
import { blogSideShape, blogSideShape2 } from "../utils/imagePaths";
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
md:items-start
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

const Box = tw.div`
w-full
md:pr-12
xl:pr-0
`;
const CardsWrapper = tw.div`
flex
flex-wrap
w-full
justify-center
sm:justify-between
`;
const Card = tw.div`
max-w-[255px] rounded-[20px] overflow-hidden shadow-lg mt-10
min-w-[255px]
`;
const CardImage = tw.img`
w-full max-h-[169px]
`;
const CardBody = tw.div`
px-6 py-4 pb-12
`;
const CardTitle = tw.div`
font-bold text-xl mb-2 text-sm text-ellipsis overflow-hidden whitespace-nowrap
`;
// const CardContent = tw.p`
// text-gray-700 text-base
// max-h-[]
// `;
const CardSubtitle = tw.h6`
text-xs
text-blue-500
`;
function Blog() {
  return (
    <ContainerFluid>
      <img
        className=" absolute h-80 z-10 top-0"
        src={blogSideShape}
        alt="blog_background"
      />
      <img
        className=" absolute h-96 z-10 top-1/2 right-0"
        src={blogSideShape2}
        alt="blog_background_2"
      />
      <Container>
        <Box>
          <Title className="mb-8">Blog</Title>
          <CardsWrapper>
            {BlogPosts.map((post, index)=>{
             return <Card key={index}>
              <CardImage
                src={post.image}
                alt="post_image"
              />
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.date}</CardSubtitle>
              </CardBody>
            </Card>
            })}
            
          </CardsWrapper>
        </Box>
      </Container>
    </ContainerFluid>
  );
}

export default Blog;
