/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddedclassOverridesProps = {
    Addedclass?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Class #1"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AddedclassProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddedclassOverridesProps | undefined | null;
}>;
export default function Addedclass(props: AddedclassProps): React.ReactElement;
