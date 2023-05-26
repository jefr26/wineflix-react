import "./App.css";
import { winesDrinkAgain, winesKeepDrinking } from "./misc/data";
import Header from "./components/header/Header";
import Section from "./components/main/Section";

const App = () => {
  return (
  <div className="App">
		<header className="hero">
			<Header />
		</header>
    <main>
			<Section title="Drink Again" sectionData={winesDrinkAgain} />
			<Section title="Keep Drinking" sectionData={winesKeepDrinking} />
    </main>
  </div>
  )
}

export default App
