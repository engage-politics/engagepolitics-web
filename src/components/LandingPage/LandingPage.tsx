import { Card, CardBody } from '@material-tailwind/react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Container from '../../layout/Container';
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
} from '../../utils/imagePaths';

import Button from '../UI/Button/Button';
import TextInput from '../UI/Input/TextInput';

// const TitleWrapper = tw.div`
//   mb-8
//   md:my-20
//   lg:my-auto
//   w-140
// `;

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

// const Subtitle = tw.div`
//   text-3xl
//   xsm:text-3.25xl
//   md:text-4xl
//   lg:text-4.5xl
//   xsm:leading-10
//   md:leading-11
//   lg:leading-12
//   text-purple-800
//   mb-7
//   max-w-sm
//   sm:max-w-md
//   md:max-w-full
// `;

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

// const Disclaimer = tw.div`
//   flex
//   w-full
//   justify-center
//   text-center

//   px-8
//   xsm:px-10
//   pb-8

//   text-sm
//   text-red-500
// `;

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
    background-size: 39% 91%, 71% 139%, 79% 135%;
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
  // background-size: 86% 99%, 102% 90%;
  // background-position: 63% 72%, 3% 105%;
  background-size: 101% 100%,104% 95%;
  background-position: 2em 0em,3% 105%;
  padding: 3em;
  margin: -3em;
  @media only screen and (max-width: 1024px) {
    // background-size: 86% 99%, 102% 90%;
    // background-position: 63% 72%, 3% 105%;
    background-size: 101% 100%,104% 95%;
    background-position: 2em 0em,3% 105%;
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

// const FormBgImage1 = styled.img`
//   height: 516px;
//   width: 534px;
//   position: absolute;
//   top: -80px;
//   left: 7px;
// `;
// const FormBgImage2 = styled.img`
//   height: 516px;
//   width: 534px;
//   position: absolute;
//   top: -140px;
//   left: 7px;
// `;

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

const LandingPage = (): JSX.Element => {
  // const imageStyleContribute = {
  //   backgroundImage: `url(/assets/images/abe-lincoln-contribute.png)`,
  // };
  // const imageStyleDefi = {
  //   backgroundImage: `url(/assets/images/defi-public.jpeg)`,
  // };
  // const downloadApple = {
  //   backgroundImage: `url(/assets/images/download-apple.svg)`,
  // };
  // const imageStyleDonations = {
  //   backgroundImage: `url(/assets/images/secure-donations.jpeg)`,
  // };

  return (
    <LandingContainer>
      <Container className="flex min-h-screen xsm:px-1 xxs:px-1">
        <div className="m-auto flex flex-col justify-around gap-0 lg:flex-row lg:gap-10">
          <div className="w-full px-4 mx-auto md:px-0 md:m-auto md:max-w-xl lg:text-left">
            <Title>
              Democracy needs engaged citizens more than ever before. We’re here
              to help.
            </Title>
            <Paragraph>
              Participating in democracy has never been more important, but it
              seems harder than ever to keep up with everything. Designed by
              policy experts and software engineers who care deeply about
              democracy and civic health, the Engage app gives you all the
              election information you need in five minutes or less, and helps
              you get your friends and family to the polls as well!
            </Paragraph>
            <div className=" flex ">
              <img className="mr-3" src={downloadApple} />
              <img src={downloadGoogle} />
            </div>
          </div>
          <Image className="xxs:py-24 xxs:px-6 xsm:p-4 sm:p-20 md:p-20 lg:p-0 xl:p-0">
            <ContributeImage />
          </Image>
        </div>
      </Container>

      <Container className="flex  xsm:px-1 xxs:px-1">
        <div className="m-auto  flex flex-col-reverse justify-around gap-0 lg:flex-row lg:gap-10">
          <Image2 className="xxs:py-24 xxs:px-6 xsm:p-20 sm:p-24 md:p-24 lg:p-0 xl:p-0">
            <ContributeImage />
          </Image2>
          <div className="m-auto max-w-xl lg:text-left">
            <Title>
              Find your district, <br></br> candidates & voting<br></br>{' '}
              location
            </Title>
          </div>
        </div>
      </Container>

      <Container className="flex  xsm:px-1 xxs:px-1">
        <div className="m-auto flex flex-col justify-around gap-0 lg:flex-row lg:gap-10">
          <div className="m-auto max-w-xl  lg:text-left">
            <Title>
              Elections synced to your calendar so you never miss a vote!
            </Title>
          </div>
          <Image3 className="xxs:py-24 xxs:px-6 xsm:p-20 sm:p-20 md:p-20 lg:p-0 xl:p-0">
            <ContributeImage />
          </Image3>
        </div>
      </Container>

      <Container className="flex  xsm:px-1 xxs:px-1">
        <div className="m-auto flex flex-col-reverse justify-around gap-0 lg:flex-row lg:gap-10">
          <Image4 className="xxs:py-24 xxs:px-6 xsm:p-20 sm:p-20 md:p-20 lg:p-0 xl:p-0">
            <ContributeImage />
          </Image4>
          <div className="m-auto max-w-xl flex-1 lg:text-left">
            <Title>Be a more active citizen, right from your smartphone!</Title>
          </div>
        </div>
      </Container>

      <Container className="flex  xsm:px-1 xxs:px-1">
        <div className="m-auto flex flex-col justify-around gap-0 lg:flex-row lg:gap-10">
          <div className="m-auto max-w-xl  lg:text-left">
            <Title>We make it easy to mobilize your friends and family</Title>
          </div>
          <Image3 className="xxs:py-24 xxs:p-4 xsm:p-4 sm:p-20 md:p-20 lg:p-0 xl:p-0">
            <ContributeImage />
          </Image3>
        </div>
      </Container>

      <Container className="flex pt-12 pb-6 lg:mb-20 xl:pt-0  xsm:px-1 xxs:px-1">
        <div className="m-auto flex flex-col-reverse justify-around gap-0 lg:flex-row lg:gap-10">
          <Image6 className="xxs:py-24 xxs:px-6 xsm:p-20 sm:p-20 md:p-20 lg:p-0 xl:p-0">
            <Card className="mx-auto xxs:w-64 xsm:w-72 sm:w-96 md:w-96 rounded-[30px]" style={{boxShadow:" 0 0 34px 0 rgba(184,167,240,0.47)"}}>
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
          </Image6>
          <div className="m-auto max-w-xl flex-1 lg:text-left">
            <Title>Stay informed</Title>
            <Paragraph>
              Please sign up here for early access to our app, and join the
              movement for a better democracy today!
            </Paragraph>
          </div>
        </div>
      </Container>
    </LandingContainer>
  );
};

export default LandingPage;
