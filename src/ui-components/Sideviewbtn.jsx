/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Sideviewbtn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="243px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Sideviewbtn")}
      {...rest}
    >
      <View
        width="247px"
        height="94px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-2.22%"
        bottom="-2.22%"
        left="-0.82%"
        right="-0.82%"
        border="2px SOLID rgba(2,31,60,0.5)"
        borderRadius="22px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Side_view_btn")}
      ></View>
    </View>
  );
}
