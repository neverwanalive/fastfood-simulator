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
  const [order, setOrder] = useState([0]);
  const [kitchen, setKitchen] = useState([0]);
  const [pickup, setPickup] = useState([0]);
  const [ticket, setTicket] = useState([0]);

  const spawnItem = (interval, func) => {
    const intervalName = setInterval(() => {
      if (gameState) func((currArr) => [...currArr, currArr.slice(-1)[0] + 1]);
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
    setOrder([0]);
    setPickup([0]);
    setKitchen([0]);
    setTicket([0]);
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
        {order.slice(1, order.length).map((value) => (
          <Customer>{value}</Customer>
        ))}
      </OrderArea>
      <KitchenArea>
        <Title>Kitchen Area</Title>
        {kitchen.slice(1, order.length).map((value) => (
          <Ticket>{value}</Ticket>
        ))}
      </KitchenArea>
      <PickupArea>
        <Title>Pickup Area</Title>
        {pickup.slice(1, order.length).map((value) => (
          <Customer>{value}</Customer>
        ))}
      </PickupArea>
      <TicketArea>
        <Title>Ticket Area</Title>
        {ticket.slice(1, order.length).map((value) => (
          <Ticket>{value}</Ticket>
        ))}
      </TicketArea>
    </ContainerArea>
  );
};
