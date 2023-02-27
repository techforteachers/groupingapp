import React, {useState, useEffect} from "react";
import { Button } from "@aws-amplify/ui-react";
export function TFTButton () {
  function handleOnClick () {
    window.location.href = 'https://techforteachers.site/'    //redirect to website

  }

  return(
    <Button onClick={handleOnClick}/>
  );
}