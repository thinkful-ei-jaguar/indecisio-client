import React, { Component } from 'react'
import ActivityContext from './contexts/ActivityContext'

export default class Dashboard extends Component {
  static contextType = ActivityContext;
  constructor(props) {
    super(props);

    this.state = {
      activityGenerated: false
    }
  }



  toggleActivityGenerated = () => {
    this.setState({
      activityGenerated: true
    })
  }

  getRandomActivity = () => {
    console.log(this.props.state.activities)
    this.toggleActivityGenerated()
  }

  acceptRandomActivity = () => {
    console.log('Random activity accepted :)')
    this.setState({
      activityGenerated: false
    })
  }

  declineRandomActivity = () => {
    console.log('Random activity declined :(')
    this.setState({
      activityGenerated: false
    })
  }

  componentDidMount() {
    this.setState({
      activityGenerated: false
    })
    this.context.fetchActivities()
  }
  
  render() {
    let randomActivityIndex = 0;
    randomActivityIndex = this.props.state ? [Math.floor(Math.random() * this.props.state.activities.length)] : 0;
    console.log('inside the component:',this.context.activities)
    
    return (
      <div>
        <h1>Indecisio</h1>
        <div className="test-context">
          Hi, this will have context if it is working:
          {this.context.activities[0] ? this.context.activities[0].name : 'context is not working'}
        </div>
        <button onClick={this.getRandomActivity}>
          Random Activity Please!
        </button>
        <div className="display-random-activity">
          <p>{this.props.state.activities && this.state.activityGenerated
          ? `Your random activity is: ${this.props.state.activities[randomActivityIndex].name}`        
          : ''}</p>
          <p>
          {this.props.state.activities && this.state.activityGenerated
          ? `The description is: ${this.props.state.activities[randomActivityIndex].description}`        
          : ''}
          </p>
        {this.state.activityGenerated && <button onClick={this.acceptRandomActivity}>Accept</button>}
        {this.state.activityGenerated && <button onClick={this.declineRandomActivity}>Decline</button>}
        </div>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  activities: []
}
