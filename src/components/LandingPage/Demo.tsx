
import { Card, CardBody } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { Carousel as content } from '../../content/main.content';
import Container from '../../layout/Container';
import { mainshape1, mainshapeBook, stroke1 } from '../../utils/imagePaths';

import Button from '../UI/Button/Button';
import TextInput from '../UI/Input/TextInput';

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

// const Title = tw.h1`
//   text-3xl
//   xsm:text-3.25xl
//   md:text-3.25xl
//   lg:text-4xl
//   xl:text-4xl
//   2xl:text-[52px]
//   font-bold
//   xsm:leading-[63px]
//   text-purple-600
//   mb-7
//   max-w-sm
//   sm:max-w-md
//   md:max-w-full
// `;

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

// const ImageT = styled.div`
//   border-radius: 12px;
//   margin: 20px auto;

//   @media screen and (min-width: 1280px) {
//     margin: 0;
//   }
// `;

const ImageC = styled.div`
  // box-shadow: 0px 12px 48px 6px rgba(75, 134, 205, 0.5);

  border-radius: 12px;
  margin: 20px auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }

  .pic {
    display: inline-block;
    width: 100%;
    position: absolute;

    img {
      width: 50%;
      height: 50%;
    }
  }

  .current {
    left: 125%;
  }

  .current.move {
    left: 0;
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
    background: lightgray;
    left: -100%;
    position: relative;
    border-radius: 12px;
  }

  .mask {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
  }
`;

// const ContributeImage = tw.div`
//   background-repeat: no-repeat;
//   bg-no-repeat
//   bg-contain
//   bg-center
//   rounded-md

//   w-64
//   h-44
//   xsm:w-80
//   xsm:h-52
//   sm:w-120
//   sm:h-80
//   xl:w-140
//   xl:h-140
// `;

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

const BgFormContainer = styled.div`
  background-image: url(${mainshapeBook});
  background-repeat: no-repeat;
  background-size: 70% 94%;
  background-position: -15% 5%;

  @media only screen and (max-width: 1024px) {
    // background-size: 86% 99%;
    // background-position: 12% -1068%;
    background-size: 65%;
    background-position: left 36%;
  }

  @media only screen and (max-width: 768px) {
    // background-size: 86% 99%;
    // background-position: 12% -1068%;
    background-size: 80%;
    background-position: center 3%;
  }

  @media only screen and (max-width: 640px) {
    // background-size: 86% 99%;
    // background-position: 12% -1068%;
    background-size: 90%;
    background-position: center 3%;
  }

  @media only screen and (max-width: 420px) {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    );
    background-size: 323% 199%, 350px 350px;
    background-position: 86% 50%, 100% 95%;
  }
  border-radius: 12px;
  margin: 20px auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
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
        <img key={index} src={content.carouselImageNames[index]} alt="asd" />
      </div>
    </div>
  );
};

// const imageStyleContribute = {
//   backgroundImage: `url(/assets/images/abe-lincoln-contribute.png)`,
// };

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
      }, 2500);

      return () => clearInterval(interval);
    }
    return () => clearInterval('');
  }, [arrowClicked]);

  const move = imageState.move ? 'move' : '';
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
  const [index, setIndex] = React.useState(0);
  const timeoutRef: any = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === content.carouselImageNames.length - 1
            ? 0
            : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const [sliderInitialized, setSliderInitialized] = useState<boolean>(false);
  useEffect(() => {
    if (!sliderInitialized) {
      setTimeout(() => {
        setSliderInitialized(true);
      }, 2800);
    }
  }, [sliderInitialized]);

  return (
    <>
      <Container>
        <div className="m-auto flex flex-col justify-around gap-0 lg:flex-row lg:gap-10">
          <div className="m-auto max-w-2xl text-center lg:text-left">
            <Subtitle className="text-3xl">
              Reach voters where they are, before and on Election Day!
            </Subtitle>
            <Paragraph>
              For little cost and no extra effort, Engage offers you a powerful
              mobile tool to convert votes. Every vote matters!
            </Paragraph>
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
                  {!sliderInitialized && (
                    <div
                      className={`pic-wrapper`}
                      style={{
                        transition: 'all 0.5s',
                        transitionDelay: '300ms',
                      }}
                    >
                      <div
                        className={`current pic move`}
                        style={index === 0 ? { left: '125%' } : { opacity: 0 }}
                      >
                        <img src={content.carouselImageNames[0]} alt="asd" />
                      </div>
                    </div>
                  )}
                  <RightArrow onClick={handleMoveRight} />
                </div>
              </BlockNFT>
            </ImageC>
          </Image>
        </div>
      </Container>

      <BgFormContainer className="lg:pt-32">
        <Container className="min-h-fit pt-12 pb-6 lg:mb-20 xl:pt-0">
          <div className="m-auto flex flex-col justify-around gap-0 lg:flex-row lg:gap-10">
            <FormCard className="mx-auto grow lg:max-w-[50%]">
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
                    <TextInput placeholder=".." />
                  </div>
                </div>

                <Button className="mt-5 !px-14" $secondary>
                  Book Demo
                </Button>
              </FormCardBody>
            </FormCard>
            <div className="m-auto max-w-2xl flex-1 sm:pl-10 md:mt-12  lg:text-left">
              <Subtitle>
                Get a free demo of Engage today, and see how we:
              </Subtitle>
              <Paragraph>
                <li>Grow your contact list</li>
                <li>Keep your voters informed and ready to vote</li>
                <li>Motivate voters to invite their network to support you</li>
                <li>Use data to target potential voters</li>
                <li>Turn supporters into donors</li>
              </Paragraph>
            </div>
          </div>
        </Container>
      </BgFormContainer>
    </>
  );
};

export default Join;
