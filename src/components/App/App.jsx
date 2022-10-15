import React, { useState } from "react";
import { Area } from "../Area/Area";
import { Interval } from "../Interval/Interval";
import { Main, StartButton } from "./App.styled";

export const App = () => {
  const [gameState, updateGameState] = useState(false);
  const [orderInterval, setOrderInterval] = useState(1000);
  const [pickupInterval, setPickupInterval] = useState(3000);
  const [kitchenInterval, setKitchenInterval] = useState(3000);
  const [ticketInterval, setTicketInterval] = useState(5000);
  const [finalInterval, setFinalInterval] = useState(6000);

  const checkValidInput = () => {
    if (!orderInterval) setOrderInterval(1000);
    if (!pickupInterval) setPickupInterval(3000);
    if (!kitchenInterval) setKitchenInterval(3000);
    if (!ticketInterval) setTicketInterval(5000);
    if (!finalInterval) setFinalInterval(6000);
    if (
      isNaN(orderInterval) ||
      isNaN(pickupInterval) ||
      isNaN(kitchenInterval) ||
      isNaN(ticketInterval) ||
      isNaN(finalInterval)
    )
      return false;
    return true;
  };

  const handleGameStart = () => {
    if (!checkValidInput()) return alert("Not valid input");
    updateGameState(!gameState);
  };

  return (
    <Main>
      <StartButton onClick={() => handleGameStart()}>
        {gameState ? "Stop" : "Start"}
      </StartButton>
      <Interval
        setOrderInterval={setOrderInterval}
        setPickupInterval={setPickupInterval}
        setKitchenInterval={setKitchenInterval}
        setTicketInterval={setTicketInterval}
        setFinalInterval={setFinalInterval}
      />
      <Area
        gameState={gameState}
        orderInterval={orderInterval}
        pickupInterval={pickupInterval}
        kitchenInterval={kitchenInterval}
        ticketInterval={ticketInterval}
        finalInterval={finalInterval}
      />
    </Main>
  );
};
