/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="115px"
      height="67px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Logo")}
      {...rest}
    >
      <Text
        fontFamily="Encode Sans"
        fontSize="50px"
        fontWeight="900"
        color="rgba(2,31,60,1)"
        textTransform="uppercase"
        lineHeight="66.84375px"
        textAlign="center"
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
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="TFT"
        {...getOverrideProps(overrides, "Logo36522987")}
      ></Text>
    </View>
  );
}
