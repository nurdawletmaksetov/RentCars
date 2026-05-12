import {Burger, Button, Flex, Image, List} from "@mantine/core";
import {Container} from "../lib/container.tsx";
import Logo from "/public/img/Logo.svg"
import {useDisclosure} from "@mantine/hooks";

type HeaderProps = {
    isMedium?: boolean
    isSmall?: boolean
}

export const Header = ({isMedium, isSmall}: HeaderProps) => {
    const [opened, {toggle}] = useDisclosure();
    return (
        <Flex py={isMedium ? 20 : 30}>
            <Container>
                <Flex align={"center"} justify={"space-between"}>
                    <Flex w={116} h={26} align={"center"}>
                        <Image src={Logo}/>
                    </Flex>
                    {!isMedium && (
                        <List display={"flex"} style={{justifyContent: "space-between", gap: "40px", fontSize: "16px"}}>
                            <List.Item style={{cursor: "pointer"}}>Become a renter</List.Item>
                            <List.Item style={{cursor: "pointer"}}>Rental deals</List.Item>
                            <List.Item style={{cursor: "pointer"}}>How it work</List.Item>
                            <List.Item style={{cursor: "pointer"}}>Why choose us</List.Item>
                        </List>
                    )}
                    <Flex gap={10}>
                        {!isSmall && (
                            <>
                                <Button c={'#000'} fz={16} fw={500} variant={"transparent"}>
                                    Sign in
                                </Button>
                                <Button bdrs={8} fz={16} fw={500} variant={"filled"}>
                                    Sign up
                                </Button>
                            </>
                        )}
                        {isMedium && (
                            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
                        )}
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}