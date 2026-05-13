import {Badge, Button, Flex, Grid, Stack, Title} from "@mantine/core";
import {Container} from "../features/lib/container.tsx";
import {RentCarCard} from "../features/components/RentCarCard.tsx";
import {IconArrowRight} from "@tabler/icons-react";
import {modals} from "@mantine/modals";
import {RentRegistrationModal} from "../features/components/RentRegistrationModal.tsx";

type PopularRentCarsProps = {
    isMedium?: boolean;
    isSmall?: boolean;
}

type rentCarsResponse = {
    id: number
    img: string;
    name: string;
    starRate: string;
    reviews: string;
    passangers: string;
    airCondition: boolean;
    gearbox: boolean;
    doors: string;
    price: string;
}

const rentCars: rentCarsResponse[] = [
    {
        id: 1,
        img: "/img/JaguarXE.svg",
        name: "Jaguar XE L P250",
        starRate: "4.8",
        reviews: "2.436",
        passangers: "4",
        gearbox: false,
        airCondition: false,
        doors: "4",
        price: "$1,800",
    },
    {
        id: 2,
        img: "/img/AudiR8.svg",
        name: "Audi R8",
        starRate: "4.6",
        reviews: "2.936",
        passangers: "2",
        gearbox: true,
        airCondition: true,
        doors: "2",
        price: "$2,100",
    },
    {
        id: 3,
        img: "/img/BMWm3.svg",
        name: "BMW M3",
        starRate: "4.5",
        reviews: "2.036",
        passangers: "4",
        gearbox: true,
        airCondition: true,
        doors: "4",
        price: "$1,600",
    },
    {
        id: 4,
        img: "/img/LamborghiniHuracan.svg",
        name: "Lamborghini Huracan",
        starRate: "4.3",
        reviews: "2.236",
        passangers: "2",
        gearbox: true,
        airCondition: true,
        doors: "2",
        price: "$2,300",
    }
]

export const PopularRentCars = ({isSmall, isMedium}: PopularRentCarsProps) => {

    const handleOpenModal = () => {
        modals.openConfirmModal({
            title: "Rent Car",
            children: (
                <RentRegistrationModal/>
            ),
            labels: {confirm: 'Send', cancel: 'Cancel'},
        })
    }
    return (
        <Flex py={84}>
            <Container>
                <Stack align={"center"} gap={isSmall ? 44 : isMedium ? 54 : 64}>
                    <Stack gap={24} align={"center"}>
                        <Badge py={16} px={32} color={"#1572D3"} c={"#1572D3"} fz={14} fw={500}
                               variant={"light"}
                               bdrs={8}>
                            WHY CHOOSE US
                        </Badge>
                        <Title c={"#333333"} fz={isSmall ? 28 : 32} fw={500} ta="center">
                            Most popular cars rental deals
                        </Title>
                    </Stack>
                    <Grid gap={32}>
                        {rentCars.map((car) => (
                            <Grid.Col span={{base: 12, sm: 6, md: 3}}>
                                <RentCarCard
                                    img={car.img}
                                    name={car.name}
                                    starRate={car.starRate}
                                    reviews={car.reviews}
                                    passangers={car.passangers}
                                    airCondition={car.airCondition}
                                    gearbox={car.gearbox}
                                    doors={car.doors}
                                    price={car.price}
                                    onClick={handleOpenModal}
                                />
                            </Grid.Col>
                        ))}
                    </Grid>
                    <Button
                        color={"#E0E0E0"}
                        c={"#4E4E4E"}
                        variant={"outline"}
                        bdrs={8}
                        h={48}
                        fw={400}
                        fz={14}
                        rightSection={
                            <IconArrowRight size={20} color={"#4E4E4E"}/>
                        }
                    >
                        Show all vehicles
                    </Button>
                </Stack>
            </Container>
        </Flex>
    )
}