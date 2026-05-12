import {Anchor, Flex, Image, Stack, Text} from "@mantine/core";
import Logo from "/public/img/white-logo.svg"
import {Container} from "../lib/container.tsx";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconMail,
    IconMapPin,
    IconPhone
} from "@tabler/icons-react";

type FooterProps = {
    isSmall?: boolean
}

export const Footer = ({isSmall}: FooterProps) => {
    return (
        <Flex bg={'#051C34'} py={40}>
            <Container>
                <Flex gap={20} direction={isSmall ? "column" : "row"} align={"start"} justify={'space-between'}>
                    <Stack gap={isSmall ? 16 : 32}>
                        <Image w={116} h={25} src={Logo}/>
                        <Stack gap={24}>
                            <Flex gap={8} align={"center"}>
                                <IconMapPin color={'#D6D6D6'} size={24}/>
                                <Text c={'#D6D6D6'} fz={14} fw={400}>
                                    25566 Hc 1, Glenallen, <br/> Alaska, 99588, USA
                                </Text>
                            </Flex>
                            <Flex gap={8} align={"center"}>
                                <IconPhone color={'#D6D6D6'} size={24}/>
                                <Text c={'#D6D6D6'} fz={14} fw={400}>
                                    +603 4784 273 12
                                </Text>
                            </Flex>
                            <Flex gap={8} align={"center"}>
                                <IconMail color={'#D6D6D6'} size={24}/>
                                <Text c={'#D6D6D6'} fz={14} fw={400}>
                                    rentcars@gmail.com
                                </Text>
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack gap={isSmall ? 16 : 32}>
                        <Text c={"#FFFFFF"} fz={16} fw={500}>
                            Our Product
                        </Text>
                        <Stack gap={16}>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Career
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Car
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Packages
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Features
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Priceline
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack gap={isSmall ? 16 : 32}>
                        <Text c={"#FFFFFF"} fz={16} fw={500}>
                            Resources
                        </Text>
                        <Stack gap={16}>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Download
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Help Centre
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Guides
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Partner Network
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Cruises
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Developer
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack gap={isSmall ? 16 : 32}>
                        <Text c={"#FFFFFF"} fz={16} fw={500}>
                            About Rentcars
                        </Text>
                        <Stack gap={16}>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Why choose us
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Our Story
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Investor Relations
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Press Center
                            </Text>
                            <Text c={'#D6D6D6'} fz={14} fw={400}>
                                Advertise
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack gap={isSmall ? 16 : 32}>
                        <Text c={"#FFFFFF"} fz={16} fw={500}>
                            Follow Us
                        </Text>
                        <Flex gap={16}>
                            <Anchor href={'https://www.instagram.com/when_its_n/'}>
                                <IconBrandFacebook size={24} color={"#D6D6D6"}/>
                            </Anchor>
                            <Anchor href={'https://www.instagram.com/m_nurdawlet/'}>
                                <IconBrandInstagram size={24} color={"#D6D6D6"}/>
                            </Anchor>
                            <Anchor href={'https://www.youtube.com/@m_nurdawlet'}>
                                <IconBrandYoutube size={24} color={"#D6D6D6"}/>
                            </Anchor>
                        </Flex>
                    </Stack>
                </Flex>
            </Container>
        </Flex>
    )
}