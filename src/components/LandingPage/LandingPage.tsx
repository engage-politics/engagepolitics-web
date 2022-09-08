import { Card, CardBody } from "@material-tailwind/react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import Container from "../../layout/Container";
import {
  downloadApple,
  downloadGoogle,
  mainshape1,
  mainshape2,
  mainshape3,
  mainshape4,
  mainshape6,
  phone1,
  phone2,
  phone3,
  phone4,
  sideshape1,
  sideshape2,
  sideshape3,
  sideshape4,
  sideshape5,
  stroke1,
  stroke2,
  stroke3,
  stroke4,
  stroke6,
  sideshape6,
} from "../../utils/imagePaths";

import Button from "../UI/Button/Button";
import TextInput from "../UI/Input/TextInput";

const Title = tw.h1`
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
  xsm:text-lg
  md:text-lg
  text-purple-700
  mb-7
  leading-9
  max-w-sm
  sm:max-w-md
  md:max-w-full
`;

const LandingContainer = styled.div`
  background-image: url(${sideshape1}), url(${sideshape2}), url(${sideshape3}),
    url(${sideshape4}), url(${sideshape5});
  background-repeat: no-repeat;
  background-size: 7% 77%, 7% 77%, 11% 77%, 193% 11%, 193% 13%;
  background-position: 0% -99%, 103% -50%, -3% 53%, -2% 79%, 99% 85%;

  @media only screen and (max-width: 1024px) {
    background-size: 7% 77%, 7% 77%, 11% 77%, 193% 11%, 216% 13%;
    background-position: 0% -99%, 103% -50%, -3% 53%, -2% 79%, 99% 85%;
  }

  @media only screen and (max-width: 768px) {
    background-size: 7% 77%, 7% 77%, 11% 77%, 193% 11%, 216% 13%;
    background-position: 0% -99%, 103% -50%, -3% 53%, -2% 79%, 99% 85%;
  }

  @media only screen and (max-width: 640px) {
    background-size: 7% 77%, 7% 77%, 11% 77%, 193% 11%, 216% 13%;
    background-position: 0% -99%, 103% -50%, -3% 53%, -2% 79%, 99% 85%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 7% 77%, 7% 77%, 11% 77%, 193% 11%, 240% 13%;
    background-position: 0% -99%, 103% -50%, -3% 53%, -2% 79%, 99% 85%;
  }
  border-radius: 12px;
  margin: 20px auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;

const Image = styled.div`
  background-image: url(${phone1}), url(${mainshape1}), url(${stroke1});
  background-repeat: no-repeat;
  background-size: 48% 95%, 81% 139%, 90% 132%;
  background-position: 41% 54%, 19% 51%, 28% 59%;

  @media only screen and (max-width: 1024px) {
    background-size: 12em 24em, 71% 139%, 79% 135%;
    // background-size: 39% 91%, 71% 139%, 79% 135%;
    background-position: 49% 93%, 41% 33%, 48% 36%;
  }

  @media only screen and (max-width: 768px) {
    background-size: 38% 88%, 74% 262%, 80% 101%;
    background-position: 48% 102%, 39% 47%, 49%;
  }

  @media only screen and (max-width: 640px) {
    background-size: 38% 93%, 68% 142%, 74% 133%;
    background-position: 49% 107%, 44% 51%, 57% 59%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 58% 91%, 93% 182%, 100% 132%;
    background-position: 50% 79%, 37% 47%, 53% 46%;
  }
  border-radius: 12px;
  margin: 20px auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;

const Image2 = styled.div`
  background-image: url(${phone2}), url(${mainshape2}), url(${stroke2});
  background-repeat: no-repeat;
  background-size: 48% 95%, 86% 87%, 88% 121%;
  background-position: 41% 54%, 63% 72%, 83% 14%;

  @media only screen and (max-width: 1024px) {
    background-size: 39% 91%, 72% 139%, 70% 164%;
    background-position: 49% 9%, 42% 39%, 36% 35%;
  }

  @media only screen and (max-width: 768px) {
    background-size: 38% 88%, 72% 262%, 75% 101%;
    background-position: 48% 21%, 48% 51%, 38% -600%;
  }

  @media only screen and (max-width: 640px) {
    background-size: 38% 93%, 68% 142%, 74% 133%;
    background-position: 49% 107%, 44% 51%, 57% 59%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 58% 91%, 94% 98%, 97% 132%;
    background-position: 50% 10%, 16% -52%, -6% 26%;
  }
`;

const Image3 = styled.div`
  background-image: url(${phone3}), url(${mainshape3}), url(${stroke3});
  background-repeat: no-repeat;
  background-size: 48% 95%, 86% 87%, 88% 121%;
  background-position: 58% 51%, 63% 72%, 83% 14%;

  @media only screen and (max-width: 1024px) {
    background-size: 39% 91%, 72% 139%, 72% 177%;
    background-position: 49% 7%, 42% 64%, 59% 39%;
  }

  @media only screen and (max-width: 768px) {
    background-size: 38% 88%, 72% 268%, 69% 101%;
    background-position: 48% 33%, 39% 54%, 43% -1000%;
  }
  @media only screen and (max-width: 640px) {
    background-size: 38% 93%, 68% 142%, 74% 133%;
    background-position: 49% 107%, 44% 51%, 57% 59%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 58% 91%, 94% 98%, 97% 132%;
    background-position: 50% 10%, 16% -52%, -6% 26%;
  }
`;

const Image4 = styled.div`
  background-image: url(${phone4}), url(${mainshape4}), url(${stroke4});
  background-repeat: no-repeat;
  background-size: 48% 93%, 86% 87%, 88% 121%;
  background-position: 58% 51%, 63% 72%, 83% 14%;

  @media only screen and (max-width: 1024px) {
    background-size: 39% 91%, 72% 139%, 70% 135%;
    background-position: 49% 93%, 42% 39%, 36% 35%;
  }

  @media only screen and (max-width: 768px) {
    background-size: 38% 88%, 66% 229%, 76% 101%;
    background-position: 48% 33%, 27% 50%, 45% -200%;
  }

  @media only screen and (max-width: 640px) {
    background-size: 38% 93%, 68% 142%, 74% 133%;
    background-position: 49% 107%, 44% 51%, 57% 59%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 58% 91%, 94% 98%, 99% 124%;
    background-position: 50% 0%, -29% -60%, -6% 32%;
  }
`;

const Image6 = styled.div`
  background-image: url(${mainshape6}), url(${stroke6});
  background-repeat: no-repeat;
  background-size: 101% 100%, 104% 95%;
  background-position: 2em 0em, 3% 105%;
  padding: 3em;
  margin: -3em;
  @media only screen and (max-width: 1024px) {
    // background-size: 86% 99%, 102% 90%;
    // background-position: 63% 72%, 3% 105%;
    background-size: 101% 100%, 104% 95%;
    background-position: 2em 0em, 3% 105%;
    padding: 4em;
    margin: -4em;
  }
  @media only screen and (max-width: 768px) {
    background-size: 86% 99%, 102% 90%;
    background-position: 63% 72%, 3% 105%;
  }

  @media only screen and (max-width: 640px) {
    background-size: 84% 102%, 99% 86%;
    background-position: 41% 80%, 5% 93%;
  }

  @media only screen and (max-width: 420px) {
    background-size: 99% 99%, 100% 89%;
    background-position: 17% 69%, -145% 69%;
  }
`;

const ContributeImage = tw.div`
  background-repeat: no-repeat;
  bg-no-repeat
  bg-contain
  bg-center
  rounded-md

  w-64
  h-44
  xsm:w-96
  xsm:h-80
  sm:w-120
  sm:h-80
  xl:w-140
  xl:h-140
`;

const Label = tw.div`
  text-sm
  font-bold
  opacity-70
  mt-6
  mb-1
`;
// new start
const ContainerNew = tw.div`
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
// new end
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  .image-inner-wrapper {
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
    margin-right: 0;
  }
  img.stroke_layer {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  img.fill_layer {
    width: 90%;
    height: 100%;
    position: absolute;
  }
  .phone {
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 500px;
    margin: 0 auto;
    z-index: 10;
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    .phone.phone-sec-2 {
      // max-height: 375px;
      // max-width: 200px;
      max-height: 400px;
      max-width: 200px;
      left: 15px;
    }
    .phone.ph-sec-3{
      max-width: 200px;
      max-height: 400px;
    }
  }
  @media only screen and (max-width: 920px) {
    .phone {
      max-width: 200px;
    }
    .phone.phone-sec-2 {
      // max-height: 316px;
      // max-width: 171px;
    }
    .ph-sec-4{
      max-width: 200px;
      max-height: 400px;
    }
    .image-inner-wrapper.sec-4{
      width: 90%;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 640px) {
  }

  @media only screen and (max-width: 420px) {
  }
`;
const LandingPage = (): JSX.Element => {
  return (
    <ContainerFluid>
      <ContainerFluid>
        <img
          className="absolute bottom-1/2 md:bottom-[-40%] left-[-2%]"
          src={sideshape1}
          alt=""
        />
        {/* <img className="absolute right-0" src={sideshape2} alt="" />
      <img className="absolute left-0" src={sideshape3} alt="" />
      <img className="absolute right-0" src={sideshape4} alt="" />
      <img className="absolute left-0" src={sideshape5} alt="" /> */}
        {/* SECTION - 1 */}
        <ContainerNew className="lg:items-start">
          <div className="w-full px-4 mx-auto md:px-0 md:m-auto md:max-w-xl lg:text-left">
            <Title className="text-left">
              Democracy needs engaged citizens more than ever before. We’re here
              to help.
            </Title>
            <Paragraph className="text-left">
              Participating in democracy has never been more important, but it
              seems harder than ever to keep up with everything. Designed by
              policy experts and software engineers who care deeply about
              democracy and civic health, the Engage app gives you all the
              election information you need in five minutes or less, and helps
              you get your friends and family to the polls as well!
            </Paragraph>
            <div className=" flex flex-col md:flex-row">
              <img
                className="ml-0 h-12 md:mr-3 md:ml-0 w-fit md:w-auto"
                src={downloadApple}
                alt="store_icon"
              />
              <img
                className="ml-0 h-12 mt-4 md:mt-0 md:m-0 w-fit md:w-auto"
                src={downloadGoogle}
                alt="store_icon"
              />
            </div>
          </div>
          <ImageWrapper className="mt-16 px-4 md:px-0 md:mt-0 h-full relative">
            <div className="image-inner-wrapper relative">
              <img src={stroke1} alt="" className="stroke_layer " />
              <img src={mainshape1} alt="" className="fill_layer " />
              <img src={phone1} alt="" className="phone" />
            </div>
          </ImageWrapper>
        </ContainerNew>
      </ContainerFluid>
      {/* SECTION - 2 */}
      <ContainerFluid>
        <img className="absolute right-0" src={sideshape2} alt="" />
        <ContainerNew className="mt-24 md:mt-56  flex flex-col-reverse md:flex-row justify-around">
          <ImageWrapper className="mt-16 px-4 md:px-0 md:pr-16 md:mt-0 h-full relative">
            <div className="image-inner-wrapper relative  w-m-[500px]">
              <img
                src={stroke2}
                alt=""
                className="stroke_layer_2 absolute w-fit top-[15%]"
              />
              <img
                src={mainshape2}
                alt=""
                className="fill_layer_2 absolute top-[10%] w-fit"
              />
              <img
                src={phone2}
                alt=""
                className="phone phone-sec-2 top-0 absolute"
              />
            </div>
          </ImageWrapper>
          <div className="m-auto lg:text-left w-full">
            <Title className="!m-0 mr-0 w-full max-w-full">
              Find your district, <br></br> candidates & voting<br></br>{" "}
              location
            </Title>
          </div>
        </ContainerNew>
      </ContainerFluid>
      {/* SECTION - 3 */}
      <ContainerFluid>
        <img className="absolute left-0" src={sideshape3} alt="" />
        <ContainerNew className="mt-60 md:mt-32 items-center  flex flex-col md:flex-row justify-around">
          <div className="m-auto md:m-auto  w-full px-4 md:px-0 md:pr-16">
            <Title className="m-0 text-center md:text-right">
              Elections synced to your calendar so you never miss a vote!
            </Title>
          </div>
          <ImageWrapper className=" xsm:scale-1 mt-16  md:mt-0 h-full relative">
            <div className="image-inner-wrapper relative  w-m-[500px]">
              <img
                src={stroke3}
                alt=""
                className="stroke_layer_2 absolute w-fit top-[15%]"
              />
              <img
                src={mainshape3}
                alt=""
                className="fill_layer_2 absolute top-[5%] w-fit"
              />
              <img src={phone3} alt="" className="phone ph-sec-3 top-0 absolute" />
            </div>
          </ImageWrapper>
        </ContainerNew>
      </ContainerFluid>
      {/* SECTION - 4 */}
      <ContainerFluid>
        <img className="absolute right-0" src={sideshape4} alt="" />
        <ContainerNew className=" md:mt-64  flex flex-col-reverse md:flex-row justify-around">
          <ImageWrapper className="mt-16 px-4 md:px-0 md:pr-16 md:mt-0 h-full relative">
            <div className="image-inner-wrapper relative  w-m-[500px]">
              <img
                src={stroke4}
                alt=""
                className="stroke_layer_2 absolute w-fit top-[15%]"
              />
              <img
                src={mainshape4}
                alt=""
                className="fill_layer_2 absolute top-[10%] w-fit"
              />
              <img
                src={phone4}
                alt=""
                className="phone phone-sec-2 top-0 absolute"
              />
            </div>
          </ImageWrapper>
          <div className="m-auto lg:text-left w-full">
            <Title className="m-0">
              Be a more active citizen, right from your smartphone!
            </Title>
          </div>
        </ContainerNew>
      </ContainerFluid>
      {/* SECTION - 5 */}
      <ContainerFluid>
        <img className="absolute left-0" src={sideshape5} alt="" />
        <ContainerNew className="mt-64 md:mt-24  flex flex-col md:flex-row justify-around">
          <div className="m-auto  w-full px-4 md:px-0 md:pr-16">
            <Title className="m-0 text-center md:text-right">
              We make it easy to mobilize your friends and family
            </Title>
          </div>
          <ImageWrapper className=" mt-16  md:mt-0 h-full relative">
            <div className="image-inner-wrapper sec-4 relative  w-m-[500px]">
              <img
                src={stroke3}
                alt=""
                className="stroke_layer_2 absolute w-fit top-0 rotate-[177deg]"
              />
              <img
                src={mainshape3}
                alt=""
                className="fill_layer_2 absolute top-[5%] w-fit"
              />
              <img src={phone3} alt="" className="phone ph-sec-4 top-0 absolute" />
            </div>
          </ImageWrapper>
        </ContainerNew>
      </ContainerFluid>
      {/* SECTION - 5 */}
      <ContainerFluid>
        <img className="absolute right-0" src={sideshape6} alt="" />
        <ContainerNew className="mt-24 md:mt-24  flex flex-col-reverse md:flex-row justify-around mb-32">
          <div className="form-wrapper relative ">
            <div className="form-background ">
              <img className="relative w-full z-20 max-w-[400px] xl:max-w-none"  src={mainshape6} alt="" />
              <img className="absolute w-full top-[15%] z-10" src={stroke6} alt="" />
            </div>
            <Card
              className="absolute z-30  top-[55%] left-[50%] mx-auto xxs:w-64 xsm:w-72 sm:w-80 md:w-80 lg:w-80 xl:w-96 rounded-[30px]"
              style={{ boxShadow: " 0 0 34px 0 rgba(184,167,240,0.47)", transform:'translate(-50%,-50%)' }}
            >
              <CardBody>
                <Label>Name</Label>
                <TextInput placeholder="Abe" />
                <Label>Email</Label>
                <TextInput placeholder="Abe.Lincoln@us.gov" />
                <Button className="mt-5 !px-14" $secondary>
                  Sign Up
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="m-auto max-w-xl flex-1 lg:text-left pl-0 md:pl-8">
            {/* md:pl-28 */}
            <Title>Stay informed</Title>
            <Paragraph>
              Please sign up here for early access to our app, and join the
              movement for a better democracy today!
            </Paragraph>
          </div>
        </ContainerNew>
      </ContainerFluid>
    </ContainerFluid>
  );
};

export default LandingPage;
