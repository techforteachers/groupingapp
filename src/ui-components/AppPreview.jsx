/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function AppPreview(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="442px"
      height="570px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AppPreview")}
    >
      <View
        width="450px"
        height="578px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.7%"
        bottom="-0.7%"
        left="-0.9%"
        right="-0.9%"
        border="4px SOLID rgba(201,213,224,0.22)"
        borderRadius="31px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(2,31,60,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="35px"
        fontWeight="600"
        color="rgba(254,252,251,1)"
        lineHeight="46.79062271118164px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="45.96%"
        bottom="45.79%"
        left="26.02%"
        right="25.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="App Preview"
        {...getOverrideProps(overrides, "App Preview")}
      ></Text>
    </View>
  );
}
