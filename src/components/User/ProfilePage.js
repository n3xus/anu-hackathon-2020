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
import React, { useEffect, useContext, useState } from "react";
import Datetime from "react-datetime";
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
import Select from "react-select";

// core components
import PanelHeader from "components/PanelHeader";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../User";
import SweetAlert from "react-bootstrap-sweetalert";

const ProfilePage = () => {
  const [state, setState] = useState({});

  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setValue("AboutMe", user.AboutMe);
    setValue("Address", user.Address);
    setValue("City", user.City);
    setValue("Country", user.Country);
    setValue("DoB", user.DoB);
    setValue("Email", user.Email);
    setValue("FirstName", user.FirstName);
    setValue("Gender", user.Gender);
    setValue("LastName", user.LastName);
    setValue("UserName", user.UserName);
    setValue("Zip", user.Zip);
  }, []);

  const { handleSubmit, register, setValue, control } = useForm({
    defaultValues: state,
  });

  const onSubmit = (e) => {
    setUser((prev) => ({ ...prev, ...e }));
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          innerRef={register({ required: true })}
                          placeholder="Username"
                          name="UserName"
                          id="UserName"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input
                          innerRef={register({ required: true })}
                          id="Email"
                          name="Email"
                          placeholder="Email"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Controller
                          as={Datetime}
                          control={control}
                          valueName="selected" // DateSelect value's name is selected
                          onChange={([selected]) => selected}
                          name="DoB"
                          id="DoB"
                          timeFormat={false}
                          inputProps={{
                            placeholder: "Date of Birth",
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          id="FirstName"
                          name="FirstName"
                          placeholder="First Name"
                          type="text"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          id="LastName"
                          name="LastName"
                          innerRef={register}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Gender</label>
                        <Controller
                          as={Select}
                          control={control}
                          valueName="selected"
                          onChange={([selected]) => selected}
                          className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Gender"
                          name="Gender"
                          id="Gender"
                          options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            {
                              value: "no_answer",
                              label: "Prefer not to answer",
                            },
                          ]}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          id="Address"
                          name="Address"
                          placeholder="Home Address"
                          type="text"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          id="City"
                          name="City"
                          placeholder="City"
                          type="text"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          id="Country"
                          name="Country"
                          placeholder="Country"
                          type="text"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          placeholder="ZIP Code"
                          type="number"
                          id="Zip"
                          name="Zip"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          id="AboutMe"
                          name="AboutMe"
                          cols="80"
                          placeholder="About your description"
                          rows="4"
                          type="textarea"
                          innerRef={register}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Button
                        color="primary"
                        size="lg"
                        className="btn-round"
                        type="submit"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;
