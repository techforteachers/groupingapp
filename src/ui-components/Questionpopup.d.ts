/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionpopupOverridesProps = {
    Questionpopup?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type QuestionpopupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: QuestionpopupOverridesProps | undefined | null;
}>;
export default function Questionpopup(props: QuestionpopupProps): React.ReactElement;
