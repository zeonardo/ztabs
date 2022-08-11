import { TypeTabButtonProps, TypeThemeProps } from '../types';
declare type StyleThemeProps = {
    theme?: TypeThemeProps;
};
export declare const TabList: import("styled-components").StyledComponent<"ul", any, TypeThemeProps, never>;
export declare const TabListItem: import("styled-components").StyledComponent<"li", any, StyleThemeProps, never>;
export declare const TabListButton: import("styled-components").StyledComponent<"button", any, StyleThemeProps & TypeTabButtonProps, never>;
export {};
