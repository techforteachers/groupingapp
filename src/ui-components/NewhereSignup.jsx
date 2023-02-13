/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function NewhereSignup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="219px"
      height="33px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      opacity="0.4000000059604645"
      {...rest}
      {...getOverrideProps(overrides, "NewhereSignup")}
    >
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="600"
        color="rgba(254,252,251,0.7)"
        lineHeight="33.421875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        textDecoration="underline"
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
        children="New here, Sign up"
        {...getOverrideProps(overrides, "New here, Sign up")}
      ></Text>
    </View>
  );
}
