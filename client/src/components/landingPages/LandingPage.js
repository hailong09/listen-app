import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Background from "../../images/Background.jpg";

const LandingPage = () => {
	return (
		<Container>
			<Banner bg={Background}>
				<Header />
				<BannerCotent>
					<Content>
						<h1>World's best music app</h1>
						<p>
							More than 10 millions free music &amp; 15 millions paid music
							track. Listen now!
						</p>
					</Content>
				</BannerCotent>
			</Banner>
		</Container>
	);
};

export default LandingPage;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vh;
	overflow-x: hidden;
`;

const Banner = styled.div`
	width: inherit;
	height: inherit;
	position: relative;
	background-image: ${(props) => `url(${props.bg})`};
	background-size: cover;
	background-position: center center;
	z-index: 1;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.3);
	}
	&::after {
		content: "";
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 10rem;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0) 0,
			#fff 78%,
			#fff 100%
		);
	}
`;

const BannerCotent = styled.div`
	position: absolute;
	top: 30%;
	left: 15px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const Content = styled.div`
	padding: 0 10px;
	margin: 0 50px;
	h1 {
		font-size: 3rem;
	}
	p {
		font-size: 1.8rem;
		padding: 10px 30px;
	}
`;
