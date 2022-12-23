import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import GlobalStyles from '../../styles/GlobalStyles.jsx';
import { ThemeProvider } from "styled-components";
import { one } from "../../styles/ThemeStyles.jsx";
import Home from "../../pages/Home"
import About from "../../pages/About.jsx";

function HomeLayout() {
    const containerRef = useRef(null)
    return (
        <React.Fragment>
            <GlobalStyles />
            <ThemeProvider theme={one}>

                <LocomotiveScrollProvider
                    options={
                        {
                            smooth: true,
                            // ... all available Locomotive Scroll instance options 
                        }
                    }
                    watch={
                        [
                            //..all the dependencies you want to watch to update the scroll.
                            //  Basicaly, you would want to watch page/location changes
                            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                        ]
                    }
                    containerRef={containerRef}
                >
                    <main data-scroll-container ref={containerRef}>
                        <Home />
                        <About />
                    </main>
                </LocomotiveScrollProvider>
                
            </ThemeProvider>
        </React.Fragment >
    )
}

export default HomeLayout