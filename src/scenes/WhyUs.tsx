import {Badge, Center, Flex, Image, Stack, Text, Title} from "@mantine/core";
import {Container} from "../features/lib/container.tsx";
import Vector from '/public/img/Vector.svg'
import AudiCar from "/public/img/audi-car.svg"
import {IconBrandLine, IconCash, IconClock24, IconUserCheck} from "@tabler/icons-react";
import type {ReactNode} from "react";

type WhyUsProps = {
    isSmall?: boolean;
    isMedium?: boolean;
}

const offers: { id?: number, title?: string, text?: string, icon?: ReactNode }[] = [
    {
        id: 1,
        title: "Best price guaranteed",
        text: "Find a lower price? We’ll refund you 100% of the difference.",
        icon: <IconCash size={24}/>
    },
    {
        id: 1,
        title: "Experience driver",
        text: "Don’t have driver? Don’t worry, we have many experienced driver for you.",
        icon: <IconUserCheck size={24}/>
    },
    {
        id: 1,
        title: "24 hour car delivery",
        text: "Book your car anytime and we will deliver it directly to you.",
        icon: <IconClock24 size={24}/>
    },
    {
        id: 1,
        title: "24/7 technical support",
        text: "Have a question? Contact Rentcars support any time when you have problem.",
        icon: <IconBrandLine size={24}/>
    }
]

export const WhyUs = ({isSmall, isMedium}: WhyUsProps) => {
    return (
        <Flex h={"100vh"} pos={"relative"} py={35}>
            <Image w={700} display={isMedium ? "none" : "flex"} src={Vector} pos={'absolute'} bottom={0} left={0}/>
            <Image pos={"absolute"} display={isMedium ? 'none' : "flex"} w={{base: 500, lg: 650}} style={{zIndex: -999}}
                   left={0} top={"20%"}
                   src={AudiCar}/>
            <Container>
                <Flex justify={"end"}>
                    <Flex justify={"center"} w={isMedium ? "100%" : "50%"}>
                        <Stack align={"center"} gap={isSmall ? 20 : isMedium ? 40 : 56}>
                            <Stack align={isMedium ? "center" : "start"} gap={isSmall ? 18 : isMedium ? 24 : 32}>
                                <Badge py={16} px={32} color={"#1572D3"} c={"#1572D3"} fz={14} fw={500}
                                       variant={"light"}
                                       bdrs={8}>
                                    WHY CHOOSE US
                                </Badge>
                                <Title c={"#333333"} fz={isSmall ? 28 : 32} fw={500} ta={isSmall ? "center" : "start"}>
                                    We offer the best experience with our rental deals
                                </Title>
                            </Stack>
                            <Stack gap={isSmall ? 16 : isMedium ? 25 : 40}>
                                {offers.map((offer) => (
                                    <Flex align={"center"} gap={{base: 18, sm: 24}}>
                                        <Badge w={64} h={64} bdrs={16}
                                               color={"#1572D3"} c={"#1572D3"} variant={"light"}>
                                            <Center>
                                                {offer.icon}
                                            </Center>
                                        </Badge>
                                        <Stack w={"100%"} gap={0}>
                                            <Text fz={20} fw={500}>
                                                {offer.title}
                                            </Text>
                                            <Text fz={16} c={"#6D6D6D"} fw={400}>
                                                {offer.text}
                                            </Text>
                                        </Stack>
                                    </Flex>
                                ))}
                            </Stack>
                        </Stack>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}