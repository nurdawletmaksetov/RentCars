import {createTheme} from "@mantine/core";

export const theme = createTheme({
    breakpoints: {
        xs: '400px',
        sm: '780px',
        md: '970px',
        lg: '1200px'
    },
    components: {
        Title: {
            defaultProps: {
                fontSize: {base: 28, sm: 32},
            },
            styles: {
                root: {
                    fontSize: {base: 28, sm: 32},
                }
            }
        }
    }
})