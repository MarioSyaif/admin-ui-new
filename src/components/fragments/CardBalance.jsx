// src/components/fragments/CardBalance.jsx

import React from "react";
import Card from "../elements/Card"; // ✅ Perbaiki path: elements (huruf kecil)
import DotsMobileStepper from "../elements/DotsMobileStepper"; // Pastikan ini benar

function CardBalance(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Total Balance"
        desc={
          <DotsMobileStepper>
            {data.map((item) => (
              <div key={item.id}>{item.bankName}</div>
            ))}
          </DotsMobileStepper>
        }
      />
    </>
  );
}

export default CardBalance;