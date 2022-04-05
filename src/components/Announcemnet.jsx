import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  font-weight: 500;
  font-size: 14px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcemnet = () => {
  return <Container>Super Deal! Free Shipping on Orders above $50</Container>;
};

export default Announcemnet;
