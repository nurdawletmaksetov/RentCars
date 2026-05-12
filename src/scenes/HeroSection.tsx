import {Button, Divider, Flex, Grid, Image, Paper, Stack, Text, Title} from "@mantine/core";
import {Container} from "../features/lib/container.tsx";
import Easy from "/public/img/easyly.svg"
import GooglePlay from "/public/img/GooglePlay.svg"
import AppStore from "/public/img/AppStore.svg"
import Porche from "/public/img/porche.svg"
import {IconCalendarDue, IconMapPin} from "@tabler/icons-react";

type HeroSectionProps = {
    isMedium?: boolean
    isSmall?: boolean
}

export const HeroSection = ({isMedium, isSmall}: HeroSectionProps) => {
    return (
        <Flex pt={110} align={"center"} pos={"relative"}>
            <Container>
                <Stack gap={isSmall ? 100 : 280} justify={'space-between'}>
                    <Flex>
                        <Flex w={isSmall ? "100%" : isMedium ? "50%" : '40%'} align={"center"}>
                            <Stack gap={20} justify={"center"}>
                                <Title fz={isSmall ? 40 : 48} fw={650}>
                                    Find, book and
                                    rent a car <span style={{color: "#1572D3", position: "relative"}}>
                        Easily
                                    <Image src={Easy} pos={"absolute"} w={141} h={32} right={0} bottom={-20}/>
                    </span>
                                </Title>
                                <Text fz={18} c={"#272727"} fw={400}>
                                    Get a car wherever and whenever you
                                    need it with your IOS and Android device.
                                </Text>
                                <Flex gap={12}>
                                    <Image w={124} src={GooglePlay}/>
                                    <Image w={124} src={AppStore}/>
                                </Flex>
                            </Stack>
                        </Flex>
                        <Image display={isSmall ? "none" : "block"} style={{zIndex: -50}} src={Porche}
                               pos={"absolute"} right={0} w={isMedium ? 500 : 800}/>
                    </Flex>
                    <Paper p={"17px 32px"} shadow={"0 6px 12px 0 #135EAC12"} bg={"#FFFFFF"} bdrs={12}>
                        <Grid justify="space-between" align="center" grow>
                            <Grid.Col span={{base: 12, xs: 6, md: 2}}>
                                <Flex gap={16} align={"center"}>
                                    <IconMapPin color={"#747474"} stroke={2}/>
                                    <Stack gap={0}>
                                        <Text c={"#3E3E3E"} fz={16} fw={500}>Location</Text>
                                        <Text c={"#B6B6B6"} fz={16} fw={500}>Search your location</Text>
                                    </Stack>
                                </Flex>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, xs: 6, md: 2}}>
                                <Flex gap={16} align={"center"}>
                                    {!isSmall && (
                                        <Divider orientation="vertical" size={"sm"}/>
                                    )}
                                    <IconCalendarDue color={"#747474"} stroke={2}/>
                                    <Stack gap={0}>
                                        <Text c={"#3E3E3E"} fz={16} fw={500}>Pickup date</Text>
                                        <Text c={"#B6B6B6"} fz={16} fw={500}>Tue 15 Feb, 09:00</Text>
                                    </Stack>
                                </Flex>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, xs: 6, md: 2}}>
                                <Flex gap={16} align={"center"}>
                                    {!isMedium && (
                                        <Divider orientation="vertical" size={"sm"}/>
                                    )}
                                    <IconCalendarDue color={"#747474"} stroke={2}/>
                                    <Stack gap={0}>
                                        <Text c={"#3E3E3E"} fz={16} fw={500}>Return date</Text>
                                        <Text c={"#B6B6B6"} fz={16} fw={500}>Thu 16 Feb, 11:00</Text>
                                    </Stack>
                                </Flex>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, xs: 6, md: 2}}>
                                <Flex gap={16} align={"center"}>
                                    <Button bdrs={8} h={48} w={"100%"} fw={400} color={"#1572D3"}>
                                        Search
                                    </Button>
                                </Flex>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Stack>
            </Container>
        </Flex>
    )
}