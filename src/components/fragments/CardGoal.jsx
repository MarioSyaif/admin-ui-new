// src/components/fragments/CardGoal.jsx

import React from "react";
import Card from "../elements/Card";

function CardGoal() {
  return (
    <Card
      title="Goals"
      link="/goals"
      desc={<p>Goals placeholder</p>}
    />
  );
}

export default CardGoal;