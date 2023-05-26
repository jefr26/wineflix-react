import Image from "../common/Image"
import HeroButtons from "./HeroButtons"

const HeroContent = ({ content }) => {
	return (
		<div className="hero-content">
			<h2>
				<Image alt={ content.title } src={ content.imageUrl } />
			</h2>
			<h3>{ content.subtitle }</h3>
			<p>{ content.description }</p>
			<HeroButtons />
		</div>
	)
}

export default HeroContent
