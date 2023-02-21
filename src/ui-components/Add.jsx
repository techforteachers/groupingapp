/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Add(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="361px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Add")}
      {...rest}
    >
      <View
        width="369px"
        height="76px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-5.88%"
        bottom="-5.88%"
        left="-1.11%"
        right="-1.11%"
        border="4px SOLID rgba(201,213,224,0.22)"
        borderRadius="44px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(2,31,60,1)"
        {...getOverrideProps(overrides, "Rectangle 35")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="35px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
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
        top="14.71%"
        bottom="16.18%"
        left="26.04%"
        right="26.32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add Class"
        {...getOverrideProps(overrides, "Add Class")}
      ></Text>
    </View>
  );
}
