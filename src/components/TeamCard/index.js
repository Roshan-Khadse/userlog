import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamName, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="ipl-team-container">
        <img src={teamImageUrl} alt={teamName} className="team-image-url" />
        <h1 className="team-name">{teamName}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
