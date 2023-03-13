/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChosefromfilesOverridesProps = {
    Chosefromfiles?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "chose from files"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChosefromfilesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChosefromfilesOverridesProps | undefined | null;
}>;
export default function Chosefromfiles(props: ChosefromfilesProps): React.ReactElement;
