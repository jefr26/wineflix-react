import { heroContent } from "../../misc/data";
import Navigation from "./Navigation";
import Hero from "../hero/Hero"
import HeroContent from "../hero/HeroContent";

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
