import React from "react";
import { connect } from "react-redux";

// display event info

const GuestEvent = ({ event }) => {
  return (
    <div>
      <h1>Event Name Here</h1>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>FOODS ELEMENT HERE?</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

export default connect(mapStateToProps, {})(GuestEvent);
