import Image from "../common/Image"
import Progess from "./Progress"

const WineCard = ({ data }) => {
	return (
		<li>
			<div className="wine">
				<Image src={data.imageUrl} alt={data.label} />
				{data?.isNew &&
					<span className="new-badge">New!</span>
				}
				{data?.progress &&
					<Progess value={data.progress} />
				}
			</div>
		</li>
	)
}

export default WineCard
