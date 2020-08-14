import React, { useState, useEffect } from "react";

// reactstrap components
import { Button } from "reactstrap";

const Doctor = ({ name, hospital, specialization, available_date, avatar }) => {
  // const [state, setState] = useState({});

  // useEffect(() => {
  //   require(avatar).then((image) => {
  //     setState({ url: image });
  //   });
  // }, []);

  return (
    <tr>
      <td>
        <div className="img-container">
          {/* <img alt="..." src={require(`assets/img/default-avatar.png`)} /> */}
          <img alt="..." src={avatar} />
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
