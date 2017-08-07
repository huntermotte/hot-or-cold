import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

export function Feedback(props) {

// giveFeedback() {
//   this.props.dispatch(actions.giveFeedback)
// }

  return (
    <div className="feedback">
      <h1>{props.feedback}</h1>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  feedback: state.feedback
})

export default connect(mapStateToProps)(Feedback);
