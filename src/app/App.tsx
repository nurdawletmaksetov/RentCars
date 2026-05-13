import './styles/App.css'
import {Header} from "../features/components/Header.tsx";
import BackgroudImage from "/public/img/Frame.svg"
import {Image} from "@mantine/core";
import {HeroSection} from "../scenes/HeroSection.tsx";
import {useMediaQuery} from "@mantine/hooks";
import {HowItWorks} from "../scenes/HowItWorks.tsx";
import {Footer} from "../features/components/Footer.tsx";
import {WhyUs} from "../scenes/WhyUs.tsx";
import {PopularRentCars} from "../scenes/PopularRentCars.tsx";

function App() {
    const isMedium = useMediaQuery("(max-width: 970px)");
    const isSmall = useMediaQuery("(max-width: 780px)");

    return (
        <div style={{position: "relative"}}>
            <Header isSmall={isSmall} isMedium={isMedium}/>
            <HeroSection isMedium={isMedium} isSmall={isSmall}/>
            <HowItWorks isMedium={isMedium} isSmall={isSmall}/>
            <WhyUs isMedium={isMedium} isSmall={isSmall}/>
            <PopularRentCars isMedium={isMedium} isSmall={isSmall}/>
            <Footer isSmall={isSmall}/>
            <Image src={BackgroudImage} pos={"absolute"} top={0} right={0} w={isSmall ? 803 : 803}
                   h={isSmall ? 636 : 866} style={{zIndex: -99}}/>
        </div>
    )
}

export default App
