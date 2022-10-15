import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputsArea } from "./Interval.styled";

export const Interval = ({
  setOrderInterval,
  setPickupInterval,
  setKitchenInterval,
  setTicketInterval,
  setFinalInterval,
}) => {
  return (
    <InputsArea>
      <InputGroup
        onChange={(e) => setOrderInterval(e.target.value)}
        className="mb-3"
      >
        <InputGroup.Text>Order</InputGroup.Text>
        <Form.Control placeholder="1000ms" />
      </InputGroup>
      <InputGroup
        onChange={(e) => setKitchenInterval(e.target.value)}
        className="mb-3"
      >
        <InputGroup.Text>Kitchen</InputGroup.Text>
        <Form.Control placeholder="3000ms" />
      </InputGroup>
      <InputGroup
        onChange={(e) => setPickupInterval(e.target.value)}
        className="mb-3"
      >
        <InputGroup.Text>Pickup</InputGroup.Text>
        <Form.Control placeholder="3000ms" />
      </InputGroup>
      <InputGroup
        onChange={(e) => setTicketInterval(e.target.value)}
        className="mb-3"
      >
        <InputGroup.Text>Ticket</InputGroup.Text>
        <Form.Control placeholder="5000ms" />
      </InputGroup>
      <InputGroup
        onChange={(e) => setFinalInterval(e.target.value)}
        className="mb-3"
      >
        <InputGroup.Text>Final</InputGroup.Text>
        <Form.Control placeholder="6000ms" />
      </InputGroup>
    </InputsArea>
  );
};
