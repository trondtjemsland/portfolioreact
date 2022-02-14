import styled from 'styled-components';
import Data from '../data/data.json';
import media from 'styled-media-query';

const ProjectHeading = styled.div``;

const ProjectsContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-top: 155px;

	h2 {
		font-size: 36px;
		font-weight: 700;
	}

	.descText {
		font-size: 20px;
	}

	.Card {
		background-color: var(--color-secondary);
		border-radius: 5px;
		margin-top: 40px;
		display: flex;
		padding: 50px;

		${media.lessThan('large')`
			display:flex;
			flex-direction:column;
			align-items:center;
			
		`}
	}

	.iconImg {
		padding: 15px;
	}
`;

const Projects = () => {
	return (
		<>
			<ProjectsContainer id="projects">
				<ProjectHeading>
					<p className="headingText">
						02 <span>PRJOECTS</span>
					</p>
				</ProjectHeading>
				{Data.map(
					({
						id,
						title,
						description,
						image,
						htmlIcon,
						cssIcon,
						figmaIcon,
						githubIcon,
						vscodeIcon,
						jsIcon,
					}) => (
						<div className="Card" key={id}>
							<div className="projectImage">
								<img src={image} alt="projectimages" />
							</div>
							<div className="cardText">
								<div className="projectTitle">
									<h2>{title}</h2>
								</div>
								<p className="descText">{description}</p>
								<img className="iconImg" src={htmlIcon} alt="Icons" />
								<img className="iconImg" src={cssIcon} alt="Icons" />
								<img className="iconImg" src={figmaIcon} alt="Icons" />
								<img className="iconImg" src={githubIcon} alt="Icons" />
								<img className="iconImg" src={vscodeIcon} alt="Icons" />
								<img className="iconImg" src={jsIcon} alt="Icons" />
							</div>
						</div>
					)
				)}
			</ProjectsContainer>
		</>
	);
};

export default Projects;
