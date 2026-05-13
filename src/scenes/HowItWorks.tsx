import {Badge, Grid, Image, Marquee, Stack, Text, Title} from "@mantine/core";
import {Container} from "../features/lib/container.tsx";
import {IconCalendarDue, IconCarFilled, IconMapPinFilled} from "@tabler/icons-react";

type HowItWorksProps = {
    isSmall?: boolean;
    isMedium?: boolean;
}

type ImagesResponse = {
    id: number;
    img: string;
}

const images: ImagesResponse[] = [
    {id: 1, img: "/img/honda.svg"},
    {id: 2, img: "/img/jaguar.svg"},
    {id: 3, img: "/img/nissan.svg"},
    {id: 4, img: "/img/valvo.svg"},
    {id: 5, img: "/img/audi.svg"},
    {id: 6, img: "/img/acura.svg"}
]

export const HowItWorks = ({isSmall, isMedium}: HowItWorksProps) => {
    return (
        <Stack gap={160} py={86}>
            <Container>
                <Stack align={"center"} gap={isSmall ? 25 : isMedium ? 40 : 80}>
                    <Stack align={"center"} gap={isSmall ? 18 : isMedium ? 24 : 32}>
                        <Badge py={16} px={32} color={"#1572D3"} c={"#1572D3"} fz={14} fw={500} variant={"light"}
                               bdrs={8}>
                            HOW IT WORKS
                        </Badge>
                        <Title ta={"center"} c={"#333333"} fz={isSmall ? 28 : 32} fw={500}>
                            Rent with following 3 working steps
                        </Title>
                    </Stack>
                    <Grid grow gap={isSmall ? 40 : isMedium ? 60 : 96}>
                        <Grid.Col span={{base: 12, xs: 6, sm: 4}}>
                            <Stack align={"center"} gap={isSmall ? 20 : 40}>
                                <Badge h={112} w={112} bdrs={16} variant={'light'}>
                                    <IconMapPinFilled size={48} color={"#1572D3"}/>
                                </Badge>
                                <Stack align={"center"} gap={isSmall ? 14 : isMedium ? 20 : 24}>
                                    <Text
                                        fz={20}
                                        fw={500}
                                        c={"#000000"}
                                    >
                                        Choose location
                                    </Text>
                                    <Text ta={"center"} fz={14} fw={500} c={"#6D6D6D"}>
                                        Choose your and find
                                        your best car
                                    </Text>
                                </Stack>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{base: 12, xs: 6, sm: 4}}>
                            <Stack align={"center"} gap={isSmall ? 20 : 40}>
                                <Badge h={112} w={112} bdrs={16} variant={'light'}>
                                    <IconCalendarDue size={48} color={"#1572D3"}/>
                                </Badge>
                                <Stack align={"center"} gap={isSmall ? 14 : isMedium ? 20 : 24}>
                                    <Text
                                        fz={20}
                                        fw={500}
                                        c={"#000000"}
                                    >
                                        Pick-up date
                                    </Text>
                                    <Text ta={"center"} fz={14} fw={500} c={"#6D6D6D"}>
                                        Select your pick up date and
                                        time to book your car
                                    </Text>
                                </Stack>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{base: 12, xs: 6, sm: 4}}>
                            <Stack align={"center"} gap={isSmall ? 20 : 40}>
                                <Badge h={112} w={112} bdrs={16} variant={'light'}>
                                    <IconCarFilled size={48} color={"#1572D3"}/>
                                </Badge>
                                <Stack align={"center"} gap={isSmall ? 14 : isMedium ? 20 : 24}>
                                    <Text
                                        fz={20}
                                        fw={500}
                                        c={"#000000"}
                                    >
                                        Book your car
                                    </Text>
                                    <Text ta={'center'} fz={14} fw={500} c={"#6D6D6D"}>
                                        Book your car and we will deliver
                                        it directly to you
                                    </Text>
                                </Stack>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>
            <Marquee duration={17000} gap={isSmall ? 66 : 96} repeat={10}>
                {images.map((image) => (
                    <Image src={image.img}/>
                ))}
            </Marquee>
        </Stack>
    )
}