import styled from 'styled-components';
import Data from '../data/data.json';

const ProjectContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 36px;
		font-weight: 700;
	}

	.Card {
		background-color: var(--color-secondary);
		border-radius: 5px;
		margin-top: 40px;
		display: flex;
		padding: 20px;
	}
`;

const Projects = () => {
	return (
		<>
			<ProjectContainer>
				{Data.map(({ id, title, year, description, image }) => (
					<div className="Card" key={id}>
						<div className="projectImage">
							<img src={image} alt="projectimages" />
						</div>
						<div className="projText">
							<div className="projectTitle">
								<h2>{title}</h2>
							</div>
							<p>{description}</p>
							<h3>{year}</h3>
						</div>
					</div>
				))}
			</ProjectContainer>
		</>
	);
};

export default Projects;
