/// <reference types="react" />
import { TypeThemeProps } from "../types";
declare const StyledTabPane: import("styled-components").StyledComponent<"div", any, import("react").HTMLAttributes<HTMLDivElement> & {
    title: string;
    index?: number | undefined;
    active?: boolean | undefined;
    theme?: TypeThemeProps | undefined;
} & TypeThemeProps, never>;
export default StyledTabPane;
