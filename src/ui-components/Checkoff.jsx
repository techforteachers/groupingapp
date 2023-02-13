/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Checkoff(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="29px"
      height="34px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Checkoff")}
    >
      <View
        width="31px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.94%"
        bottom="5.88%"
        left="-3.45%"
        right="-3.45%"
        border="1px SOLID rgba(2,31,60,1)"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(2,31,60,1)"
        lineHeight="33.537498474121094px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="17.24%"
        right="20.69%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="✓"
        {...getOverrideProps(overrides, "\u2713")}
      ></Text>
    </View>
  );
}
