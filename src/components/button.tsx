"use client"
import { Button, ClearButton } from "@/sylesheets/styles";
import { useState } from "react";

export default function SearchButton({ setIsSearchClicked }: { setIsSearchClicked: any }) {
  const [buttonValue, setButtonValue] = useState<any>();
  return (
    <>
      {buttonValue ?
        <ClearButton
          onClick={() => {
            setIsSearchClicked(false)
            setButtonValue(false)
          }}>
          Clear
        </ClearButton> :
        <Button
          onClick={() => {
            setIsSearchClicked(true)
            setButtonValue(true)
          }}>
          Search
        </Button>}
    </>
  );
}