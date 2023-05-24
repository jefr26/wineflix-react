import Hero from "./Hero"
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";

const Header = () => {
	return (
		<header className="hero">
			<Hero />
			<Navigation />
			<HeroContent />
		</header>
	)
}

export default Header
