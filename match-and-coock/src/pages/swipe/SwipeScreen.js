import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "./swipeScreen.module.css";
import data from "../../mockMenues.json";
import SwipeContainer from "../../components/swipeContainer/SwipeContainer";

const { viewTitle } = styles;

function SwipeScreen() {
  const { menues } = data;

  return (
    <>
      <Container>
        <header style={{ backgroundColor: "red", textAlign: "center" }}>
          Header
        </header>
      </Container>

      <h2 className={viewTitle}>Deslizá y matcheá</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SwipeContainer menues={menues} />
      </div>
    </>
  );
}

export default SwipeScreen;
