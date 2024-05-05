"use client"
import { Button, ClearButton } from "@/sylesheets/styles";
import { useState } from "react";

export default function SearchButton({ setIsSearchClicked, setSearchValue }: { setIsSearchClicked: any, setSearchValue: any }) {
  const [buttonValue, setButtonValue] = useState<any>();
  return (
    <>
      {buttonValue ?
        <ClearButton
          onClick={() => {
            setIsSearchClicked(false)
            setButtonValue(false)
            setSearchValue('')
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