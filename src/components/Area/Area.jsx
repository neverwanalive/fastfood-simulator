import React, { useState, useEffect } from "react";
import {
  ContainerArea,
  OrderArea,
  PickupArea,
  KitchenArea,
  TicketArea,
  Title,
  Customer,
  Ticket,
} from "./Area.styled";

export const Area = ({
  gameState,
  orderInterval,
  pickupInterval,
  kitchenInterval,
  ticketInterval,
  finalInterval,
}) => {
  const [order, setOrder] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [pickup, setPickup] = useState([]);
  const [ticket, setTicket] = useState([]);

  const spawnItem = (interval, func) => {
    const intervalName = setInterval(() => {
      if (gameState) func((currArr) => [...currArr, currArr.length + 1]);
    }, interval);
    return intervalName;
  };

  const deleteItem = (interval, func) => {
    const intervalName = setInterval(() => {
      if (gameState) func((currArr) => currArr.slice(1, currArr.length));
    }, interval);
    return intervalName;
  };

  const spawnAll = () => {
    const orderTime = spawnItem(orderInterval, setOrder);
    const pickupTime = spawnItem(pickupInterval, setPickup);
    const kitchenTime = spawnItem(kitchenInterval, setKitchen);
    const ticketTime = spawnItem(ticketInterval, setTicket);
    const deleteOrderTime = deleteItem(pickupInterval, setOrder);
    const deletePickupTime = deleteItem(finalInterval, setPickup);
    const deleteKitchenTime = deleteItem(ticketInterval, setKitchen);
    const deleteTicketTime = deleteItem(finalInterval, setTicket);
    return [
      orderTime,
      pickupTime,
      kitchenTime,
      ticketTime,
      deleteOrderTime,
      deleteKitchenTime,
      deletePickupTime,
      deleteTicketTime,
    ];
  };

  const clearAll = (intervalArr) => {
    setOrder([]);
    setPickup([]);
    setKitchen([]);
    setTicket([]);
    intervalArr.map((interval) => clearInterval(interval));
  };

  useEffect(() => {
    const intervalArr = spawnAll();

    return () => {
      clearAll(intervalArr);
    };
  }, [gameState]);

  return (
    <ContainerArea>
      <OrderArea>
        <Title>Order Area</Title>
        {order.map((_) => (
          <Customer></Customer>
        ))}
      </OrderArea>
      <KitchenArea>
        <Title>Kitchen Area</Title>
        {kitchen.map((_) => (
          <Ticket></Ticket>
        ))}
      </KitchenArea>
      <PickupArea>
        <Title>Pickup Area</Title>
        {pickup.map((_) => (
          <Customer></Customer>
        ))}
      </PickupArea>
      <TicketArea>
        <Title>Ticket Area</Title>
        {ticket.map((_) => (
          <Ticket></Ticket>
        ))}
      </TicketArea>
    </ContainerArea>
  );
};
