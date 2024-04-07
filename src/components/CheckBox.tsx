import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function CheckBox() {
  return (
    <CheckboxGroup
      label="Select cities"
      defaultValue={[""]}
    >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup>
  );
}
