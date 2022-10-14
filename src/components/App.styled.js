import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

export const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  padding: 5px;
  width: 100px;
  border: 1px solid black;
  border-radius: 7px;
  font-size: 25px;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;

export const ContainerArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 50%;
  height: 100%;
`;

export const OrderArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
`;

export const KitchenArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
`;

export const PickupArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
`;

export const TicketArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
`;

export const Title = styled.div`
  border: 1px solid black;
  border-radius: 7px;
  padding: 5px;
  width: 120px;
  display: flex;
  justify-content: center;
`;

export const Customer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 7px;
  margin-top: 5px;
  background-color: black;
`;

export const Ticket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 7px;
  margin-top: 5px;
  background-color: red;
`;
