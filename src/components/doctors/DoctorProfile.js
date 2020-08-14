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
import React, {useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";
import { events } from "../../variables/general.js";


const localizer = momentLocalizer(moment);
const DoctorProfile = (props) => {
  let doctorId = props.match.params.doctorId;
  console.log(doctorId);

  const [state, setState] = useState({
    events: events,
    alert: null,
  })

  const selectedEvent = (event) => {
    alert(event.title);
  }

  const addNewEventAlert = (slotInfo) => {
    setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={(e) => addNewEvent(e, slotInfo)}
          onCancel={() => hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      ),
    });
  }

  const addNewEvent = (e, slotInfo) => {
    var newEvents = state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setState({
      alert: null,
      events: newEvents,
    });
  }

  const hideAlert = () => {
    setState({
      alert: null,
    });
  }
  const eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12} md={8} className="ml-auto mr-auto">
            <Card className="card-calendar">
              <CardBody>
                <BigCalendar
                  selectable
                  localizer={localizer}
                  events={state.events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={(event) => selectedEvent(event)}
                  onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
                  eventPropGetter={eventColors}
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
                  {'"'}Lamborghini Mercy <br />
                  Your chick she so thirsty <br />
                  I'm in that two seat Lambo{'"'}
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
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-square" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DoctorProfile;
