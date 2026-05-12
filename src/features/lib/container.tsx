import {Container as MantineContainer} from "@mantine/core";
import type {ReactNode} from "react";

type ContainerProps = {
    children?: ReactNode;
};

export function Container({children}: ContainerProps) {
    return (
        <MantineContainer w={"100%"} size={1120} px="16px">
            {children}
        </MantineContainer>
    );
}