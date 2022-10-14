import React, { useState, useEffect } from "react";
import {
  Main,
  StartButton,
  ContainerArea,
  OrderArea,
  KitchenArea,
  PickupArea,
  TicketArea,
  Title,
  Customer,
  Ticket,
} from "./App.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const App = () => {
  const [gameState, updateGameState] = useState(false);
  const [order, setOrder] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [pickup, setPickup] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [orderInterval, setOrderInterval] = useState(1000);
  const [pickupInterval, setPickupInterval] = useState(3000);
  const [kitchenInterval, setKitchenInterval] = useState(3000);
  const [ticketInterval, setTicketInterval] = useState(5000);

  const handleGameStart = () => {
    if (
      isNaN(orderInterval) ||
      isNaN(pickupInterval) ||
      isNaN(kitchenInterval) ||
      isNaN(ticketInterval)
    )
      return alert("Incorrect Interval");
    updateGameState(!gameState);
  };

  useEffect(() => {
    const orderInterval1 = setInterval(() => {
      if (gameState)
        setOrder((currOrder) => [...currOrder, currOrder.length + 1]);
    }, orderInterval);

    const orderClearInterval1 = setInterval(() => {
      if (gameState)
        setOrder((currOrder) => currOrder.slice(1, currOrder.length));
    }, pickupInterval);

    const pickupInterval1 = setInterval(() => {
      if (gameState)
        setPickup((currPickup) => [...currPickup, currPickup.length + 1]);
    }, pickupInterval);

    const kitchenInterval1 = setInterval(() => {
      if (gameState)
        setKitchen((currKitchen) => [...currKitchen, currKitchen.length + 1]);
    }, kitchenInterval);

    const kitchenClearInterval1 = setInterval(() => {
      if (gameState)
        setKitchen((currKitchen) => currKitchen.slice(1, currKitchen.length));
    }, ticketInterval);

    const ticketInterval1 = setInterval(() => {
      if (gameState)
        setTicket((currTicket) => [...currTicket, currTicket.length + 1]);
    }, ticketInterval);

    const ticketClearInterval1 = setInterval(() => {
      if (gameState)
        setTicket((currTicket) => currTicket.slice(1, currTicket.length));
    }, 6000);

    const pickupClearInterval1 = setInterval(() => {
      if (gameState)
        setPickup((currPickup) => currPickup.slice(1, currPickup.length));
    }, 6000);

    return () => {
      setKitchen([]);
      setOrder([]);
      setPickup([]);
      setTicket([]);
      clearInterval(pickupClearInterval1);
      clearInterval(ticketClearInterval1);
      clearInterval(ticketInterval1);
      clearInterval(kitchenClearInterval1);
      clearInterval(kitchenInterval1);
      clearInterval(pickupInterval1);
      clearInterval(orderClearInterval1);
      clearInterval(orderInterval1);
    };
  }, [gameState]);

  return (
    <Main>
      <StartButton onClick={() => handleGameStart()}>
        {gameState ? "Stop" : "Start"}
      </StartButton>
      <ContainerArea>
        <OrderArea>
          <InputGroup
            onChange={(e) => setOrderInterval(e.target.value)}
            className="mb-3"
          >
            <Form.Control placeholder="1000ms" />
          </InputGroup>
          <Title>Order Area</Title>
          {order.map((_) => (
            <Customer></Customer>
          ))}
        </OrderArea>
        <KitchenArea>
          <InputGroup
            onChange={(e) => setKitchenInterval(e.target.value)}
            className="mb-3"
          >
            <Form.Control placeholder="3000ms" />
          </InputGroup>
          <Title>Kitchen Area</Title>
          {kitchen.map((_) => (
            <Ticket></Ticket>
          ))}
        </KitchenArea>
        <PickupArea>
          <InputGroup
            onChange={(e) => setPickupInterval(e.target.value)}
            className="mb-3"
          >
            <Form.Control placeholder="3000ms" />
          </InputGroup>
          <Title>Pickup Area</Title>
          {pickup.map((_) => (
            <Customer></Customer>
          ))}
        </PickupArea>
        <TicketArea>
          <InputGroup
            onChange={(e) => setTicketInterval(e.target.value)}
            className="mb-3"
          >
            <Form.Control placeholder="5000ms" />
          </InputGroup>
          <Title>Ticket Area</Title>
          {ticket.map((_) => (
            <Ticket></Ticket>
          ))}
        </TicketArea>
      </ContainerArea>
    </Main>
  );
};
