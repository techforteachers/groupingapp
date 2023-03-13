import React, {useState, useEffect} from "react";
import { Button } from "@aws-amplify/ui-react";
export function TFTButton () {
  function handleOnClick () {
    window.open("https://techforteachers.site/", '_blank'); //redirect to website
  }

  return(
    <Button onClick={handleOnClick}>TechForTeachers</Button>
  );
}