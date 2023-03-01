/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Logingin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="516px"
      height="66px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Logingin")}
      {...rest}
    >
      <View
        width="516px"
        height="66px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(239,247,255,1)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="600"
        color="rgba(239,247,255,1)"
        lineHeight="33.421875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24.24%"
        bottom="25.76%"
        left="43.02%"
        right="42.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log in"
        {...getOverrideProps(overrides, "Log in")}
      ></Text>
    </View>
  );
}
