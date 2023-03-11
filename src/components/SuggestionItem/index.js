import './index.css'

const SuggestionItem = props => {
  const {suggestionDetail, oneSuggestion} = props
  const {suggestion} = suggestionDetail

  const displaySuggestion = () => {
    oneSuggestion(suggestion)
  }

  return (
    <li className="suggest-container">
      <p className="statement">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={displaySuggestion}
      />
    </li>
  )
}
export default SuggestionItem
