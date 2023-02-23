/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideviewbtnOverridesProps = {
    Sideviewbtn?: PrimitiveOverrideProps<ViewProps>;
    Side_view_btn?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SideviewbtnProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SideviewbtnOverridesProps | undefined | null;
}>;
export default function Sideviewbtn(props: SideviewbtnProps): React.ReactElement;
