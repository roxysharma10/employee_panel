import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Employee Detail</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="emp-title">Name</Label>
              <Input
                type="text"
                id="emp-title"
                name="emp_name"
                value={this.state.activeItem.emp_name}
                onChange={this.handleChange}
                placeholder="Enter Employee Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="emp-designation">Designation</Label>
              <Input
                type="text"
                id="emp-designation"
                name="designation"
                value={this.state.activeItem.designation}
                onChange={this.handleChange}
                placeholder="Enter Employee designation"
              />
            </FormGroup>
            <FormGroup>
              <Label for="emp-experience">Experience Detail</Label>
              <Input
                type="text"
                id="emp-experience"
                name="experience_details"
                value={this.state.activeItem.experience_details}
                onChange={this.handleChange}
                placeholder="Enter Employee experience details"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="onboard_completed"
                  checked={this.state.activeItem.onboard_completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
