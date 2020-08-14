import React, { useState } from "react";
import Doctor from "./Doctor";
import { useFetch } from "../hooks";

// reactstrap components
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import data from 'api/doctors.json';


const DoctorList = () => {
  const [doctors, setDoctors] = useState(data);
  
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
                        key={doctor.id}
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
