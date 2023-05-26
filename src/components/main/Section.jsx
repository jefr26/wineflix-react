import WineCard from "./WineCard"

const Section = ({ title, sectionData }) => {
	return (
		<section className="category">
			<h2>{ title }</h2>
			<ul>
				{sectionData.map(itemData => (
					<WineCard data={itemData} key={itemData.id} />
				))}
			</ul>
		</section>
	)
}

export default Section
