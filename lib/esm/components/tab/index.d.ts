import React from "react";
import { TypeTabProps } from './types';
declare const Tab: {
    ({ className, children, active, initialActive, onActiveChange, theme, ...rest }: TypeTabProps): JSX.Element;
    Pane: React.FC<import("./types").TypeTabPaneProps>;
};
export default Tab;
