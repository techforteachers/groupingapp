/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Otherbtn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="79px"
      height="37px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Otherbtn")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="28px"
        fontWeight="700"
        color="rgba(3,10,17,1)"
        lineHeight="37.432498931884766px"
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
        children="Other"
        {...getOverrideProps(overrides, "Other_btn")}
      ></Text>
    </View>
  );
}
