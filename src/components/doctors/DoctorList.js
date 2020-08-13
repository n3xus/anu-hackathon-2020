import React, { useState } from "react";
import Doctor from "./Doctor";

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

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

const DoctorList = () => {
  const [doctors, setState] = useState([
    {
      avatar: "assets/img/doc1.png",
      name: "A",
      hospital: "XYZ",
      specialization: "ENT",
      available_date: "14/04/2020",
      id: 1,
    },
    {
      avatar: "assets/img/default-avatar.png",
      name: "D",
      hospital: "XYZ",
      specialization: "ENT",
      available_date: "14/3/2020",
      id: 2,
    },
    {
      avatar: "assets/img/default-avatar.png",
      name: "E",
      hospital: "XYZ",
      specialization: "ENT",
      available_date: "14/04/2020",
      id: 3,
    },
  ]);
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Doctor's List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="table-shopping" responsive>
                  <thead>
                    <tr>
                      <th className="text-center" />
                      <th className="text-center">Name</th>
                      <th className="text-center">Hospital</th>
                      <th className="text-center">Specialization</th>
                      <th className="text-center">Earliest Available Date</th>
                      <th className="text-center" />
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <Doctor
                        avatar={doctor.avatar}
                        name={doctor.name}
                        hospital={doctor.hospital}
                        specialization={doctor.specialization}
                        available_date={doctor.available_date}
                      />
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DoctorList;
