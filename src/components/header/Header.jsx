import { heroContent } from "../../misc/data";
import Navigation from "./Navigation";
import Hero from "../hero/Hero"
import HeroContent from "../hero/HeroContent";

const Header = () => {
	return (
		<>
			<Hero />
			<Navigation />
			<HeroContent content={ heroContent } />
		</>
	)
}

export default Header
