import {Box, Button, Divider, Flex, Image, Stack, Text} from "@mantine/core";
import {
    IconArrowRight,
    IconCarDoor,
    IconManualGearboxFilled,
    IconSnowflake,
    IconStarFilled,
    IconUser
} from "@tabler/icons-react";


type RentCarCardProps = {
    img: string;
    name: string;
    starRate: string;
    reviews: string;
    passangers: string;
    airCondition: boolean;
    gearbox: boolean;
    doors: string;
    price: string;
    onClick: () => void;
}

export const RentCarCard = ({
                                img,
                                name,
                                starRate,
                                reviews,
                                passangers,
                                airCondition,
                                gearbox,
                                doors,
                                price,
                                onClick
                            }: RentCarCardProps) => {
    return (
        <Box style={{boxShadow: "0px 12px 24px 0px #104C8B16"}} h={"100%"} bdrs={16} p={24}>
            <Stack gap={24} h={"100%"} justify={"space-between"}>
                <Stack gap={0} align={"center"} justify={"center"}>
                    <Image src={img}/>
                </Stack>
                <Stack gap={12}>
                    <Text fz={16} c={"#262626"} fw={500}>
                        {name}
                    </Text>
                    <Flex gap={6} align={"center"}>
                        <IconStarFilled color={"#EFBF14"} size={16}/>
                        <Text c={"#000000"} fz={12} fw={400}>{starRate}</Text>
                        <Text c={"#808080"} fz={12} fw={400}>{`(${reviews} reviews)`}</Text>
                    </Flex>
                </Stack>
                <Stack gap={8}>
                    <Flex align={"center"} justify={"space-between"}>
                        <Flex gap={4}>
                            <IconUser size={20} color={"#959595"}/>
                            <Text c={"#959595"} fz={12}>{passangers} Passagers</Text>
                        </Flex>
                        <Flex gap={4}>
                            <IconManualGearboxFilled size={20} color={"#959595"}/>
                            <Text c={"#959595"} fz={12}>{gearbox === true ? "Auto" : "Manual"}</Text>
                        </Flex>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"}>
                        <Flex gap={4}>
                            <IconSnowflake size={20} color={"#959595"}/>
                            <Text c={"#959595"}
                                  fz={12}>{airCondition === true ? "Air Conditioning" : "No Air Condition"}</Text>
                        </Flex>
                        <Flex gap={4}>
                            <IconCarDoor size={20} color={"#959595"}/>
                            <Text c={"#959595"} fz={12}>{doors} doors</Text>
                        </Flex>
                    </Flex>
                </Stack>
                <Divider color={'#E0E0E0'}/>
                <Flex align={"center"} justify={"space-between"}>
                    <Text>
                        Price
                    </Text>
                    <Text fz={16} c={"#292929"} fw={500}>
                        {price} <Text component={"span"} fw={400} c={"#9c9c9c"} fz={14}>/day</Text>
                    </Text>
                </Flex>
                <Button
                    color={"#1572D3"}
                    c={"#FFFFFF"}
                    bdrs={8}
                    h={40}
                    fw={400}
                    fz={14}
                    onClick={onClick}
                    rightSection={
                        <IconArrowRight size={20} color={"#FFFFFF"}/>
                    }
                >
                    Rent Now
                </Button>
            </Stack>
        </Box>
    )
}