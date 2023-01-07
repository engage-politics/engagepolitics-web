import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Card, CardBody } from "@material-tailwind/react";
import { Carousel as content } from "../../content/main.content";
import * as Yup from "yup";
import { mainshape1, mainshapeBook, stroke1 } from "../../utils/imagePaths";
import Button from "../UI/Button/Button";
import TextInput from "../UI/Input/TextInput";
import axios from "axios";

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
		opacity: 1;
	}

	.current.move {
		left: 0;
		opacity: 0;
		// transition: all 0.5s ease;
	}

	.next {
		left: 200%;
	}

	.next.move {
		left: 100%;
		// transition: all 0.5s ease;
	}
	.pic-wrapper {
		background: transparent;
		position: relative;
		border-radius: 12px;
		height: 100%;
		display: flex;
		justify-content: center;
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
	width: 65%;
	background-image: url(${mainshapeBook});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	height: 100%;
	position: absolute;
	top: -10%;
	left: -8%;
	z-index: -10;

	@media only screen and (max-width: 920px) {
		width: 100%;
		top: -20%;
		left: -7%;
	}
`;
const List = styled.div`
	& > li::marker {
		color: #a421ed;
	}
`;

const TextFieldError = styled(ErrorMessage)`
	color: #e63946;
	font-size: 0.8rem;
	margin-top: 0.3rem;
`;

const Alert = styled.div``;

const Truck = styled.div`
	img.ph {
		width: 100%;
		height: auto;
		max-width: 50%;
		display: block;
		margin: 0 auto;
		z-index: 1;
	}
`;

const Demo = (): JSX.Element => {
	const [arrowClicked, setArrowClicked] = useState<boolean>(false);
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [successAlert, setSuccessAlert] = React.useState(true);

	const formRef = useRef();

	const slideNext = (e: any) => {
		setCurrentSlide(prev => {
			setArrowClicked(true);
			return prev + 1 === content.carouselImageNames.length
				? 0
				: currentSlide + 1;
		});
	};
	const slidePrev = (e: any) => {
		setCurrentSlide(prev => {
			setArrowClicked(true);
			return prev === 0
				? content.carouselImageNames.length - 1
				: currentSlide - 1;
		});
	};
	const scrollToForm = () => {
		if (formRef) {
			const curr: any = formRef.current;
			if (curr) {
				curr.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}
	};

	React.useEffect(() => {
		if (!arrowClicked) {
			const intervalId = setInterval(() => {
				setCurrentSlide(prev => {
					return prev + 1 === content.carouselImageNames.length
						? 0
						: prev + 1;
				});
			}, 2000);
			return () => {
				clearInterval(intervalId);
			};
		}
	}, [arrowClicked]);

	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const DemoSchema = Yup.object().shape({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		workEmail: Yup.string().required("Email is required"),
		phone: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("Phone is required"),
		organizationName: Yup.string().required(
			"Organization Name is required"
		),
		organizationType: Yup.string().required(
			"Organization Type code is required"
		),
		website: Yup.string().required("Website is required"),
		whyInterested: Yup.string().required(
			"Reason of your interest is required"
		),
	});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			workEmail: "",
			phone: "",
			organizationName: "",
			organizationType: "",
			website: "",
			whyInterested: "",
		},
		validationSchema: DemoSchema,
		onSubmit: (values, { setSubmitting, resetForm }) => {
			axios
				.post(
					"https://sheet.best/api/sheets/5b0e0b79-45f1-4078-bc5d-ea00753de28c",
					formik.values
				)
				.then(response => {
					if (response.status == 200) {
						setSubmitting(false);
						setSuccessAlert(false);
						resetForm();
						setTimeout(() => {
							setSuccessAlert(true);
						}, 3000);
					}
				});
			// submitReviewHandler(values);
		},
	});

	const {
		errors,
		touched,
		handleBlur,
		values,
		handleSubmit,
		isSubmitting,
		getFieldProps,
		isValid,
		dirty,
	} = formik;

	return (
		<div className="p-2">
			<ContainerX className="mt-32 justify-center md:!items-center lg:mt-0 max-h-fit relative z-30 ">
				<div className="mx-auto  text-center lg:text-left w-full xl:w-[50%] xl:ml-0 xl:pl-4">
					<p className="font-bold font-sans text-3.25xl md:text-4xl leading-10 md:leading-snug mb-7  mx-auto text-purple-888 font-bold ">
						Reach voters where they are, before and on Election Day!
					</p>
					<p className="font-sans text-purple-889 text-lg mb-7 font-medium">
						For little cost and no extra effort, Engage offers you a
						powerful mobile tool to convert votes. Every vote
						matters!
					</p>
					<div className="mx-auto flex justify-center lg:block">
						<Button $secondary>Download App</Button>
					</div>
				</div>
				<Image className="xxs:p-2 xsm:p-2 sm:p-20 md:p-20 lg:p-0 xl:p-0 ">
					<ImageC>
						<BlockNFT>
							<div className="mask">
								<LeftArrow
									className="hover:cursor-pointer"
									onClick={slidePrev}
								/>
								<Truck className="img-wrapper">
									<img
										src={
											content.carouselImageNames[
												currentSlide
											]
										}
										alt=""
										className="ph"
									/>
								</Truck>
								<RightArrow
									className="hover:cursor-pointer"
									onClick={slideNext}
								/>
							</div>
						</BlockNFT>
					</ImageC>
				</Image>
			</ContainerX>

			<ContainerX className="mt-20 justify-center md:!items-center lg:mt-20 max-h-fit relative z-30 gap-8">
				<div className="lg:hidden block mx-auto  text-center lg:text-left w-full xl:w-[50%] xl:ml-0 xl:pl-4">
					<p className="font-bold font-sans text-3.25xl md:text-4xl leading-10 md:leading-snug mb-7  mx-auto text-purple-888 font-bold">
						<span>Save up to 25%</span>{" "}
						<br className="block xsm:hidden" />
						on credit card contributions
					</p>
					<p className="font-sans text-purple-889 text-lg mb-7 font-medium">
						Political donation processors are unresponsive and way
						too expensive. We’ll set up your donation page for free
						and save you up to 25% per donation! We aim to be the
						best fundraising platform at the lowest cost.
					</p>
					<div className="mx-auto flex justify-center lg:block">
						<Button $secondary onClick={scrollToForm}>
							Free Demo
						</Button>
					</div>
				</div>
				<Image className="xxs:p-2 xsm:p-2 sm:p-20 md:p-20 lg:p-0 xl:p-0 ">
					<ImageC>
						<BlockNFT>
							<div className="mask flex items-center">
								<Truck className="img-wrapper">
									<img src={content.abeLincolnImage} alt="" />
								</Truck>
							</div>
						</BlockNFT>
					</ImageC>
				</Image>
				<div className="hidden lg:block mx-auto  text-center lg:text-left w-full xl:w-[50%] xl:pl-4">
					<p className="font-bold font-sans text-3.25xl md:text-4xl leading-10 md:leading-snug mb-7  mx-auto text-purple-888 font-bold ">
						Save up to 25% on credit card contributions
					</p>
					<p className="font-sans text-purple-889 text-lg mb-7 font-medium">
						Political donation processors are unresponsive and way
						too expensive. We’ll set up your donation page for free
						and save you up to 25% per donation! We aim to be the
						best fundraising platform at the lowest cost.
					</p>
					<div className="mx-auto flex justify-center lg:block">
						<Button $secondary onClick={scrollToForm}>
							Free Demo
						</Button>
					</div>
				</div>
			</ContainerX>

			{/* <BgFormContainer className="pb-2 !m-auto"> */}
			<ContainerX
				ref={formRef}
				className="mt-12 min-h-fit lg:mt-32 pb-6 lg:mb-20 xl:pt-0 relative"
			>
				<div className="flex items-center lg:justify-between flex-col lg:flex-row w-full relative">
					<div className="im mt-12 pl-0 w-full max-w-[100%] lg:max-w-[55%]">
						<AnnonBack />

						<FormCard className="  w-full text-left">
							<FormCardBody className="pt-0">
								<FormikProvider value={formik}>
									<Form
										autoComplete="off"
										noValidate
										onSubmit={handleSubmit}
									>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>First Name</Label>
												<TextInput
													placeholder="Abe"
													className={
														errors.firstName &&
														touched.firstName
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"firstName"
													)}
												/>
												<TextFieldError
													name="firstName"
													component="span"
													className="error"
												/>
											</div>
											<div className="flex-1">
												<Label>Last Name</Label>
												<TextInput
													placeholder="Lincoln"
													className={
														errors.lastName &&
														touched.lastName
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"lastName"
													)}
												/>
												<TextFieldError
													name="lastName"
													component="span"
													className="error"
												/>
											</div>
										</div>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>Work Email</Label>
												<TextInput
													placeholder="Abe.Lincoln@us.gov"
													type="email"
													className={
														errors.workEmail &&
														touched.workEmail
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"workEmail"
													)}
												/>
												<TextFieldError
													name="workEmail"
													component="span"
													className="error"
												/>
											</div>
											<div className="flex-1">
												<Label>Phone</Label>
												<TextInput
													placeholder="+1(123) 123-1234"
													className={
														errors.phone &&
														touched.phone
															? "input-error"
															: ""
													}
													{...getFieldProps("phone")}
												/>
												<TextFieldError
													name="phone"
													component="span"
													className="error"
												/>
											</div>
										</div>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>Organization Name</Label>
												<TextInput
													placeholder="US GOV"
													className={
														errors.organizationName &&
														touched.organizationName
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"organizationName"
													)}
												/>
												<TextFieldError
													name="organizationName"
													component="span"
													className="error"
												/>
											</div>
										</div>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>Organization Type</Label>
												<TextInput
													placeholder="Government"
													className={
														errors.organizationType &&
														touched.organizationType
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"organizationType"
													)}
												/>
												<TextFieldError
													name="organizationType"
													component="span"
													className="error"
												/>
											</div>
										</div>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>Website</Label>
												<TextInput
													placeholder="us.gov"
													className={
														errors.website &&
														touched.website
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"website"
													)}
												/>
												<TextFieldError
													name="website"
													component="span"
													className="error"
												/>
											</div>
										</div>
										<div className="flex flex-col xsm:flex-row xsm:gap-5">
											<div className="flex-1">
												<Label>
													Why are you interested in
													Engage?
												</Label>
												<TextInput
													placeholder="..."
													className={
														errors.whyInterested &&
														touched.whyInterested
															? "input-error"
															: ""
													}
													{...getFieldProps(
														"whyInterested"
													)}
												/>
												<TextFieldError
													name="whyInterested"
													component="span"
													className="error"
												/>
											</div>
										</div>

										<Alert
											hidden={successAlert}
											className="bg-green-100 rounded-lg py-5 px-6 mb-2 text-base text-green-700 my-3"
											role="alert"
										>
											Your response has been recorded;
											we'll get back to you shortly.
										</Alert>

										<Button
											type="submit"
											className="mt-5 !px-14"
											$secondary
										>
											Book Demo
										</Button>
									</Form>
								</FormikProvider>
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
								<li>
									Keep your voters informed and ready to vote
								</li>
								<li>
									Motivate voters to invite their network to
									support you
								</li>
								<li>Use data to target potential voters</li>
								<li>Turn supporters into donors</li>
							</List>
						</Paragraph>
					</div>
				</div>
			</ContainerX>
		</div>
	);
};

export default Demo;
