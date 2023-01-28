// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isStarredItem} = props
  const {id, titleName, date, starFilterActive} = appointmentDetails
  const onClickButton = () => {
    isStarredItem(id)
  }
  const starImage = starFilterActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointments-list">
      <div className="list-container">
        <p className="appointment-title">{titleName}</p>
        <p className="appointment-date">{formatDate}</p>
      </div>
      <button className="star-button" type="button" onClick={onClickButton}>
        <img alt="star" className="star-image" src={starImage} />
      </button>
    </li>
  )
}

export default AppointmentItem
