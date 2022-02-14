import styled from 'styled-components';
import Data from '../data/data.json';

const ProjectHeading = styled.div`
|	
`;

const ProjectsContainer = styled.div`
	width: 1027px;
	display: flex;
	flex-direction: column;
	margin-top: 300px;

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
	}

	.iconImg {
		padding: 15px;
	}
`;

const Projects = () => {
	return (
		<>
			<ProjectsContainer>
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
