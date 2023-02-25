/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Porfilebtn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="66px"
      height="66px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Porfilebtn")}
    >
      <View
        width="70px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-3.03%"
        bottom="-3.03%"
        left="-3.03%"
        right="-3.03%"
        border="2px SOLID rgba(2,31,60,1)"
        borderRadius="107px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(2,31,60,1)"
        {...getOverrideProps(overrides, "Rectangle 2336523001")}
      ></View>
      <View
        width="25px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15.15%"
        bottom="46.97%"
        left="31.82%"
        right="30.3%"
        borderRadius="105px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(246,248,255,1)"
        {...getOverrideProps(overrides, "Rectangle 24")}
      ></View>
      <Icon
        width="48.84px"
        height="27px"
        viewBox={{ minX: 0, minY: 0, width: 48.8359375, height: 27 }}
        paths={[
          {
            d: "M48.8351 15.8179C42.7881 22.6748 33.9373 27 24.0762 27C14.58 27 6.02071 22.9889 0 16.5686C3.92966 6.8537 13.4526 0 24.5762 0C35.4111 0 44.7273 6.50249 48.8351 15.8179Z",
            fill: "rgba(246,248,255,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59.09%"
        bottom="0%"
        left="13.52%"
        right="12.49%"
        {...getOverrideProps(overrides, "Intersect")}
      >
        <View
          width="66px"
          height="66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-59.09%"
          bottom="59.09%"
          left="-13.52%"
          right="13.52%"
          borderRadius="105px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(2,31,60,1)"
          {...getOverrideProps(overrides, "Rectangle 5")}
        ></View>
        <View
          width="53px"
          height="53px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="19.7%"
          left="-2.91%"
          right="22.61%"
          borderRadius="105px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(246,248,255,1)"
          {...getOverrideProps(overrides, "Rectangle 2336523005")}
        ></View>
      </Icon>
    </View>
  );
}
