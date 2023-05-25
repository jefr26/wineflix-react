import { heroContent } from "../../misc/data";
import Hero from "./Hero"
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";

const Header = () => {
	return (
		<header className="hero">
			<Hero />
			<Navigation />
			<HeroContent content={ heroContent } />
		</header>
	)
}

export default Header
