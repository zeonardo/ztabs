import React from 'react';
declare type TabDefaultProps = React.HTMLAttributes<HTMLElement> & {
    children: [TypeTabPaneChild, ...TypeTabPaneChild[]];
    theme?: TypeThemeProps;
};
declare type TabControlledProps = TabDefaultProps & {
    active: number;
    onActiveChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    initialActive?: never;
};
declare type TabUncontrolledProps = TabDefaultProps & {
    initialActive: number;
    active?: never;
    onActiveChange?: never;
};
export interface TypeThemeProps {
    breakpoint?: {
        small?: {
            min?: string;
            mid?: string;
            max?: string;
        };
        medium: {
            min?: string;
            mid?: string;
            max?: string;
        };
        large?: {
            min?: string;
            mid?: string;
            max?: string;
        };
    };
    color?: {
        white?: string;
        black?: string;
        primary?: string;
        secondary?: string;
        gray?: string;
        graylight?: string;
        graydark?: string;
    };
}
export declare type TypeTabProps = TabControlledProps | TabUncontrolledProps;
export declare type TypeTabPaneProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    index?: number;
    active?: boolean;
    theme?: TypeThemeProps;
};
export declare type TypeTabPaneChild = React.ReactElement<TypeTabPaneProps>;
export declare type TypeTabButtonProps = {
    active: boolean;
};
export declare type TypeTabListProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
    tabs: string[];
    active: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    theme?: TypeThemeProps;
};
export {};
