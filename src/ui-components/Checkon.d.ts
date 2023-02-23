/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckonOverridesProps = {
    Checkon?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<ViewProps>;
    "\u2713"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CheckonOverridesProps | undefined | null;
}>;
export default function Checkon(props: CheckonProps): React.ReactElement;
