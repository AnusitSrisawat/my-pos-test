import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

const menu = [
  { label: "Cat" },
  { label: "Dog" },
  { label: "Elephant" },
];

export default function RadioGroups() {
  return (
    <RadioGroup
      label="Select your favorite city"
    >
      {menu.map((item: any) => (
        <Radio key={item.label} value={item.label}>{item.label}</Radio>

      ))}
    </RadioGroup>
  );
}
