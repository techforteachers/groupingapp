/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Checkon(props) {
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
      {...getOverrideProps(overrides, "Checkon")}
      {...rest}
    >
      <View
        width="29px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.88%"
        bottom="8.82%"
        left="0%"
        right="0%"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(2,31,60,1)"
        {...getOverrideProps(overrides, "Rectangle 37")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(246,248,255,1)"
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
