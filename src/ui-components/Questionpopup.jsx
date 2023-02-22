/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Questionpopup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="206px"
      height="251px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Questionpopup")}
    >
      <View
        width="206px"
        height="251px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 30")}
      ></View>
    </View>
  );
}
