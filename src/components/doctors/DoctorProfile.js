/*!

=========================================================
* Now UI Dashboard PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react component used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, Row, Col, Button } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { events } from "variables/general.js";

const localizer = momentLocalizer(moment);

class DoctorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={(e) => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      ),
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    this.setState({
      alert: null,
      events: newEvents,
    });
  }
  hideAlert() {
    this.setState({
      alert: null,
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  }
  render() {
    return (
      <>
        <PanelHeader
          
        />
        <div className="content">
          {this.state.alert}
          <Row>
            <Col xs={12} md={8} className="ml-auto mr-auto">
              <Card className="card-calendar">
                <CardBody>
                  <BigCalendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    defaultView="month"
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={(event) => this.selectedEvent(event)}
                    onSelectSlot={(slotInfo) => this.addNewEventAlert(slotInfo)}
                    eventPropGetter={this.eventColors}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/bg5.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/doctors/1.jpg")}
                      />
                      <h5 className="title">Janet Andrew</h5>
                    </a>
                    <p className="description">General Practitioner</p>
                  </div>
                  <p className="description text-center">
                    Midway Hospital <br />
                    Sydney, Australia <br />
                    15+ years of experience in health industry.<br /><br />

                    0431-854-345
                  </p>
                </CardBody>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-icon btn-round"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="neutral"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DoctorProfile;
