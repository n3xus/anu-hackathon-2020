import React, { useState } from "react";

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

const Doctor = ({avatar, name, hospital, specialization, available_date }) => {
  return (
    <tr>
      <td>
        <div className="img-container">
          <img alt="..." src={require(`assets/img/default-avatar.png`)} />
        </div>
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">{hospital}</td>
      <td className="text-center">{specialization}</td>
      <td className="text-center">{available_date}</td>
      <td className="text-center" />
      <td td className="text-center">
        {" "}
        <Button color="info" className="btn-round">
          Book Appointment
        </Button>{" "}
      </td>
    </tr>
  );
};

export default Doctor;
