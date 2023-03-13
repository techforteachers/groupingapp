/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PorfilebtnOverridesProps = {
    Porfilebtn?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2336523001"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    Intersect?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2336523005"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PorfilebtnProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PorfilebtnOverridesProps | undefined | null;
}>;
export default function Porfilebtn(props: PorfilebtnProps): React.ReactElement;
