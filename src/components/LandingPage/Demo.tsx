import { Card, CardBody } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import { Carousel as content } from "../../content/main.content";

import { mainshape1, mainshapeBook, stroke1 } from "../../utils/imagePaths";

import Button from "../UI/Button/Button";
import TextInput from "../UI/Input/TextInput";

const Label = tw.div`
  text-sm
  font-bold
  opacity-70
  mt-6
  mb-1
`;

const BlockNFT = tw.div`
  relative
  background-repeat: no-repeat;
  bg-no-repeat
  bg-cover
  bg-center
  rounded-md
  m-auto

  w-64
  h-64
  xsm:w-80
  xsm:h-80
  sm:w-120
  sm:h-120
  md:w-142
  md:h-142
`;


const Subtitle = tw.div`
  text-3xl
  xsm:text-3.25xl
  md:text-[42px]
  lg:text-[35px]
  font-bold
  leading-[63px]
  text-purple-600
  mb-7
  max-w-sm
  sm:max-w-md
  md:max-w-full
`;

const Paragraph = tw.div`
  xsm:text-lg
  md:text-lg
  text-purple-700
  mb-7
  leading-9
  max-w-sm
  sm:max-w-md
  md:max-w-full
`;

const ImageC = styled.div`
  // box-shadow: 0px 12px 48px 6px rgba(75, 134, 205, 0.5);

  border-radius: 12px;
  margin: 20px auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }

  .pic {
    display: block;
    max-width: 210px;
    position: absolute;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .current {
    left: 26.5%;
    opacity:1;
  }

  .current.move {
    left: 0;
    opacity:0;
    transition: all 0.5s ease;
  }

  .next {
    left: 200%;
  }

  .next.move {
    left: 100%;
    transition: all 0.5s ease;
  }
  .pic-wrapper {
    background: transparent;
    position: relative;
    border-radius: 12px;
    height:100%;
    display:flex;
    justify-content:center;
  }

  .mask {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
  }
`;

const Image = styled.div`
  background-image: url(${mainshape1}), url(${stroke1});
  background-repeat: no-repeat;

  // background-size: 81% 139%, 90% 132%;
  // background-position: 19% 51%, 28% 59%;
  background-size: 93%, 100%;
  background-position: left top 45%, center left;

  @media only screen and (max-width: 1024px) {
    // background-size: 34% 88%, 64% 139%, 68% 135%;
    // background-position: 49% 93%, 41% 33%, 48% 33%;
    background-size: 93%, 100%;
    background-position: left top 45%, center left;
  }

  @media only screen and (max-width: 768px) {
    // background-size: 38% 88%, 74% 262%, 80% 101%;
    // background-position: 48% 102%, 39% 47%, 49%;
    background-size: 93%, 100%;
    background-position: left top 45%, center left;
  }

  @media only screen and (max-width: 640px) {
    // background-size: 38% 93%, 68% 142%, 74% 133%;
    // background-position: 49% 107%, 44% 51%, 57% 59%;
    background-size: 93%, 100%;
    background-position: left top 45%, center left;
  }

  @media only screen and (max-width: 420px) {
    // background-size: 40% 93%, 75% 180%, 79% 132%;
    // background-position: 50% 112%, 37% 47%, 53% 46%;
    background-size: 93%, 100%;
    background-position: left top 45%, center left;
  }
`;

const LeftArrow = styled.div`
  height: 20px;
  width: 20px;
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%) rotate(225deg);
  left: 20%;
  z-index: 9;
`;
const RightArrow = styled.div`
  height: 20px;
  width: 20px;
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%) rotate(45deg);
  right: 20%;
`;
const FormCardBody = styled(CardBody)`
  // box-shadow: 5px 5px 9px 0px #9333ea;
`;
const FormCard = styled(Card)`
  box-shadow: 5px 5px 9px 0px rgba(184, 167, 240, 0.47);
  border-radius: 30px;
`;
const ContainerX = tw.div`
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
lg:flex
lg:items-start
min-h-[55vh]
z-20
relative
`;
const AnnonBack = styled.div`
width:65%;
background-image: url(${mainshapeBook});
background-repeat: no-repeat;
background-size:contain;
background-position:center;
height:100%;
position:absolute;
top:-10%;
left:-8%;
z-index:0;

@media only screen and (max-width: 920px) {
  width:100%;
  top: -20%;
  left: -7%;
}
`;
const List = styled.div`
  &>li::marker{
    color:#A421ED;
  }
`;
const AnimatedImage: React.FC<{
  index: any;
  move: any;
  innerRef: any;
  arrowUsed: boolean;
}> = ({ index, move, innerRef, arrowUsed }) => {
  useEffect(() => {}, [index, arrowUsed]);

  return (
    <div className={`pic-wrapper`}>
      <div ref={innerRef} className={`current pic ${move}`}>
        <img
          key={index}
          src={content.carouselImageNames[index]}
          alt={"asd" + index}
        />
      </div>
    </div>
  );
};


const Join = (): JSX.Element => {
  const getNextIndex = (idx: number) => {
    if (idx >= content.carouselImageNames.length - 1) {
      return 0;
    }
    return idx + 1;
  };

  const [imageState, setImageState] = useState({
    index: 0,
    next: getNextIndex(0),
    move: true,
  });

  const imageStateRef: any = useRef<HTMLDivElement>(null);
  imageStateRef.current = imageState;

  const setIndexes = (idx: number) => {
    setImageState((prevState) => {
      return {
        ...prevState,
        index: idx,
        next: getNextIndex(idx),
      };
    });
  };
  const [arrowClicked, setArrowClicked] = useState<boolean>(false);

  useEffect(() => {
    if (imageState.move && !arrowClicked) {
      const interval = setInterval(() => {
        // on
        setImageState((prev) => {
          return {
            ...prev,
            move: true,
          };
        });

        // off
        setTimeout(() => {
          setImageState((prev) => {
            return {
              ...prev,
              move: false,
            };
          });

          setIndexes(getNextIndex(imageStateRef.current.index));
        }, 600); // same delay as in the css transition here
      }, 2000);

      return () => clearInterval(interval);
    }
    return () => clearInterval("");
  }, [arrowClicked]);

  const move = imageState.move ? "move" : "";
  const MAX_IMAGES = content.carouselImageNames.length - 1;
  const handleMoveLeft = () => {
    const indexToMove =
      imageState.index - 1 >= 0 ? imageState.index - 1 : MAX_IMAGES;
    setIndexes(indexToMove);
    setArrowClicked(true);
  };
  const handleMoveRight = () => {
    const indexToMove =
      imageState.index + 1 <= MAX_IMAGES ? imageState.index + 1 : 0;
    setIndexes(indexToMove);
    setArrowClicked(true);
  };
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef: any = React.useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === content.carouselImageNames.length - 1
  //           ? 0
  //           : prevIndex + 1
  //       ),
  //     2500
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);
  // const [sliderInitialized, setSliderInitialized] = useState<boolean>(false);
  // useEffect(() => {
  //   if (!sliderInitialized) {
  //     setTimeout(() => {
  //       setSliderInitialized(true);
  //     }, 2800);
  //   }
  // }, [sliderInitialized]);

  return (
    <div className="p-2">
      <ContainerX className="mt-32 justify-center md:!items-center lg:mt-0 max-h-fit ">
        <div className="mx-auto  text-center lg:text-left w-full xl:w-[50%] xl:ml-0 xl:pl-4">
          <p className="font-bold font-sans text-3.25xl md:text-4xl leading-10 md:leading-snug mb-7  mx-auto text-purple-888 font-bold ">
            Reach voters where they are, before and on Election Day!
          </p>
          <p className="font-sans text-purple-889 text-lg mb-7 font-medium">
            For little cost and no extra effort, Engage offers you a powerful
            mobile tool to convert votes. Every vote matters!
          </p>
          <div className="mx-auto flex justify-center lg:block">
            <Button $secondary>Download App</Button>
          </div>
        </div>
        <Image className="xxs:p-2 xsm:p-2 sm:p-20 md:p-20 lg:p-0 xl:p-0 ">
          {/* <ContributeImage /> */}
          {/* {content.carouselImageNames[index]} */}
          <ImageC>
            <BlockNFT>
              <div className="mask">
                <LeftArrow onClick={handleMoveLeft} />
                <AnimatedImage
                  innerRef={imageStateRef}
                  move={move}
                  index={imageState.index}
                  arrowUsed={arrowClicked}
                />
                {/* {!sliderInitialized && (
                  <div
                    className={`pic-wrapper`}
                    style={{
                      transition: "all 0.5s",
                      transitionDelay: "300ms",
                    }}
                  >
                    <div
                      className={`current pic move`}
                      style={index === 0 ? { left: "125%" } : { opacity: 0 }}
                    >
                      <img src={content.carouselImageNames[0]} alt="asd" />
                    </div>
                  </div>
                )} */}
                <RightArrow onClick={handleMoveRight} />
              </div>
            </BlockNFT>
          </ImageC>
        </Image>
      </ContainerX>

      {/* <BgFormContainer className="pb-2 !m-auto"> */}
      <ContainerX className="mt-4 min-h-fit lg:mt-32 pb-6 lg:mb-20 xl:pt-0 relative">
        <div className="flex items-center lg:justify-between flex-col lg:flex-row w-full relative">
          <div className="im mt-12 pl-0 w-full max-w-[100%] lg:max-w-[55%]">
          <AnnonBack />
          <FormCard className="  w-full text-left">
            <FormCardBody className="pt-0">
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>First Name</Label>
                  <TextInput placeholder="Abe" />
                </div>
                <div className="flex-1">
                  <Label>Last Name</Label>
                  <TextInput placeholder="Lincoln" />
                </div>
              </div>
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>Work Email</Label>
                  <TextInput placeholder="Abe.Lincoln@us.gov" />
                </div>
                <div className="flex-1">
                  <Label>Phone</Label>
                  <TextInput placeholder="+1(123) 123-1234" />
                </div>
              </div>
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>Organization Name</Label>
                  <TextInput placeholder="US GOV" />
                </div>
              </div>
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>Organization Type</Label>
                  <TextInput placeholder="Government" />
                </div>
              </div>
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>Website</Label>
                  <TextInput placeholder="us.gov" />
                </div>
              </div>
              <div className="flex flex-col xsm:flex-row xsm:gap-5">
                <div className="flex-1">
                  <Label>Why are you interested in Engage?</Label>
                  <TextInput placeholder="..." />
                </div>
              </div>

              <Button className="mt-5 !px-14" $secondary>
                Book Demo
              </Button>
            </FormCardBody>
          </FormCard>
          </div>
          <div className="m-auto lg:pl-10 md:mt-12 md:pt-7 xsm:mt-10 lg:text-left z-10">
            <h4 className=" text-left pl-4 mt-4 mb-2 md:my-0 text-3.5xl md:text-[32px] text-purple-888 font-bold leading-[1.23em]">
              Get a free demo of Engage today, and see how we:
            </h4>
            <Paragraph className="text-left font-medium font-sans mt-4 pl-4   md:text-lg leading-relaxed sm:leading-loose">
              <List>
              <li>Grow your contact list</li>
              <li>Keep your voters informed and ready to vote</li>
              <li>Motivate voters to invite their network to support you</li>
              <li>Use data to target potential voters</li>
              <li>Turn supporters into donors</li>
              </List>
            </Paragraph>
          </div>
        </div>
      </ContainerX>
      {/* </BgFormContainer> */}
    </div>
  );
};

export default Join;
