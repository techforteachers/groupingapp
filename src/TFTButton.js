import React, {useState, useEffect} from "react";
import { Button } from "@aws-amplify/ui-react";
export function TFTButton () {
  function handleOnClick () {
    //redirect to website
  }

  return(
    <Button onClick={handleOnClick}/>
  );
}