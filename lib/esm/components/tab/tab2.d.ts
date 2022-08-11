import React from "react";
import { TypeTabProps } from './types';
declare const Tab2: {
    ({ className, children, active, initialActive, onActiveChange, ...rest }: TypeTabProps): JSX.Element;
    Pane: React.FC<import("./types").TypeTabPaneProps>;
};
export default Tab2;
