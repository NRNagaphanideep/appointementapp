// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  start = {
    appointmentsList: [],
    titleName: '',
    date: '',
    starFilterActive: false,
  }

  activeStarFilter = () => {
    const {starFilterActive} = this.state
    this.setState({starFilterActive: !starFilterActive})
  }

  getStarAppointments = () => {
    const {appointmentsList, starFilterActive} = this.state

    if (starFilterActive) {
      return appointmentsList.filter(
        eachAptItem => eachAptItem.starFilterActive === true,
      )
    }
    return appointmentsList
  }

  isStarredItem = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAptItem => {
        if (id === eachAptItem.id) {
          return {
            ...eachAptItem,
            starFilterActive: !eachAptItem.starFilterActive,
          }
        }
        return eachAptItem
      }),
    }))
  }

  onChangeTitleName = event => {
    this.setState({titleName: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleName, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      titleName,
      date,
      starFilterActive: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleName: '',
      date: '',
    }))
  }

  render() {
    const {titleName, date, appointmentsList} = this.state
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="form-container">
            <form className="form">
              <label className="label-container" htmlFor="title">
                Title
              </label>
              <input
                className="inputs"
                value={titleName}
                id="title"
                onChange={this.onChangeTitleName}
              />
              <label className="label-container" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                className="inputs"
                value={date}
                id="date"
                onChange={this.onChangeDate}
              />
              <button
                className="add-button"
                type="submit"
                onClick={this.onAddAppointment}
              >
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="appointment-image"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointments-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              className="star-button"
              type="button"
              onClick={this.activeStarFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list-container">
            {appointmentsList.map(eachAptItem => (
              <AppointmentItem
                key={eachAptItem.id}
                appointmentDetails={eachAptItem}
                isStarredItem={this.isStarredItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
