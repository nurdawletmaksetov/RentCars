import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";
import '@mantine/core/styles.css';
import {theme} from "./styles/theme.ts";
import '@mantine/notifications/styles.css';

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <ModalsProvider>
            <App/>
        </ModalsProvider>
    </MantineProvider>
)
