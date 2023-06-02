const LatestMatch = props => {
  const {latestMatchDetailsData} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    firstInning,
    secondInning,
    manOfTheMatch,
    umpires,
    result,
  } = latestMatchDetailsData

  return (
    <div>
      <h1>{competingTeam}</h1>
      <img src={competingTeamLogo} alt="" />
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <p>{firstInning}</p>
      <p>{secondInning}</p>
      <p>{manOfTheMatch}</p>
      <p>{umpires}</p>
    </div>
  )
}
export default LatestMatch
