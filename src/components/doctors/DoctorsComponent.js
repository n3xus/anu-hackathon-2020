import React from "react";

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

class DoctorsComponent extends React.Component {
  render() {
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
                      <tr> 
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/default-avatar.png")}
                            />
                          </div>
                        </td>                      
                        <td className="text-center">Dr. ABC</td>
                        <td className="text-center">XYZ Hospital</td>
                        <td className="text-center">Eye</td>
                        <td className="text-center">15/08/2020</td>
                        <td className="text-center" /> 
                        <td td className="text-center"> <Button color="info" className="btn-round">
                        Book Appointment
                        </Button> </td>
                        
                      </tr>
                      <tr> 
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/default-avatar.png")}
                            />
                          </div>
                        </td>                      
                        <td className="text-center">Dr. ABC</td>
                        <td className="text-center">XYZ Hospital</td>
                        <td className="text-center">Eye</td>
                        <td className="text-center">15/08/2020</td>
                        <td className="text-center" /> 
                        <td td className="text-center"> <Button color="info" className="btn-round">
                        Book Appointment
                        </Button> </td>
                        
                      </tr>
                      <tr> 
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/default-avatar.png")}
                            />
                          </div>
                        </td>                      
                        <td className="text-center">Dr. ABC</td>
                        <td className="text-center">XYZ Hospital</td>
                        <td className="text-center">Eye</td>
                        <td className="text-center">15/08/2020</td>
                        <td className="text-center" /> 
                        <td td className="text-center"> <Button color="info" className="btn-round">
                        Book Appointment
                        </Button> </td>
                        
                      </tr>

                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DoctorsComponent;