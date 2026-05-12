import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {theme} from "./styles/theme.ts";

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <App/>
    </MantineProvider>
)
