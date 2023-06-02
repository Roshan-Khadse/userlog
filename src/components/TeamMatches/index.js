import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {urlTeamBanner: '', latestDetailsMatch: {}, recentMatchDetails: {}}

  componentDidMount() {
    this.getTeamMachesData()
  }

  getTeamMachesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedTeamMatchesData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMaches: data.recent_matches,
    }

    this.setState({
      urlTeamBanner: updatedTeamMatchesData.teamBannerUrl,
      latestDetailsMatch: updatedTeamMatchesData.latestMatchDetails,
      recentMatchDetails: updatedTeamMatchesData.recentMaches,
    })
  }

  recentMatch = () => {
    const {recentMatchDetails} = this.state

    console.log(recentMatchDetails)

    return (
      <ul>
        {recentMatchDetails.map(eachMatchData => (
          <MatchCard matchDataDetails={eachMatchData} key={eachMatchData.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {urlTeamBanner, latestDetailsMatch} = this.state
    const updatedLatestMatchDetails = {
      competingTeam: latestDetailsMatch.competing_team,
      competingTeamLogo: latestDetailsMatch.competing_team_logo,
      date: latestDetailsMatch.date,
      venue: latestDetailsMatch.venue,
      firstInning: latestDetailsMatch.first_innings,
      secondInning: latestDetailsMatch.second_innings,
      manOfTheMatch: latestDetailsMatch.man_of_the_match,
      umpires: latestDetailsMatch.umpires,
      result: latestDetailsMatch.result,
    }

    return (
      <div className="team-matches-container">
        <img src={urlTeamBanner} alt="" />
        <ul>
          <LatestMatch
            latestMatchDetailsData={updatedLatestMatchDetails}
            key={updatedLatestMatchDetails.id}
          />
        </ul>
        <div>{this.recentMatch()}</div>
      </div>
    )
  }
}

export default TeamMatches
