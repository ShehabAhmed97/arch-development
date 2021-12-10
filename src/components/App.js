import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/Header"
import { Fragment } from "react";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { ThemeProvider } from '@mui/material/styles'
import theme from "./ui/theme";
import Typography  from "@mui/material/Typography"

//FIXING JSS STYLING ORDER
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@mui/styles';

const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point',
});

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}
function App(props) {
  const headerMargin = {marginTop: "64px"}
  return (
    <div>
    <Fragment>
      <StylesProvider jss={jss}>

        <ThemeProvider theme={theme}>

          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Typography variant="h3" sx={headerMargin}>Home</Typography>} />
              <Route path="/services" component={()=> <div>services</div>} />
              <Route path="/Customesoftware" component={()=> <div>Customesoftware</div>} />
              <Route path="/mobileapps" component={()=> <div>mobileapps</div>} />
              <Route path="/websites" component={()=> <div>websites</div>} />
              <Route path="/revolutions" component={()=> <div>revolutions</div>} />
              <Route path="/about" component={()=> <div>aboute</div>} />
              <Route path="/contact" component={()=> <div>contact</div>} />
              <Route path="/estimate" component={()=> <div>estimate</div>} />
            </Routes>
          </BrowserRouter>

          <Toolbar id="back-to-top-anchor" />

          <ScrollTop {...props}>

            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>

          </ScrollTop>

        </ThemeProvider>

      </StylesProvider>
    </Fragment>
    </div>
  );
}

export default App;
