/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddclassOverridesProps = {
    Addclass?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "+"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AddclassProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddclassOverridesProps | undefined | null;
}>;
export default function Addclass(props: AddclassProps): React.ReactElement;
