import {Box, NumberInput, Stack, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";

export const RentRegistrationModal = () => {
    return (
        <Box bdrs={12}>
            <Stack>
                <TextInput
                    label={"Full Name"}
                    placeholder={"Full Name"}
                    required
                    withAsterisk
                    bdrs={8}
                />
                <NumberInput
                    allowNegative={false}
                    label={"Age"}
                    description={"Age must be greater than 18"}
                    placeholder={"Age"}
                    required
                    withAsterisk
                    bdrs={8}
                    trimLeadingZeroesOnBlur
                    hideControls
                />
                <TextInput
                    required
                    withAsterisk
                    leftSectionPointerEvents="none"
                    leftSection={<IconAt size={16}/>}
                    label="Your email"
                    placeholder="Your email"
                />
            </Stack>
        </Box>
    )
}