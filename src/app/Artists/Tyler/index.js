import { useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";


import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const theme = createTheme({
  typography: {
    fontFamily: 'CircularStd-Black',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CircularStd-Black';
          font-style: bold;
          font-display: swap;
          font-weight: 700;
          src: local('CircularStd-Black'), url(../fonts/Circular/CircularStd-Black.otf) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'CircularStd-Medium';
          font-style: medium;
          font-display: swap;
          font-weight: 500;
          src: local('CircularStd-Medium'), url(../fonts/Circular/CircularStd-Medium.otf) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const Tyler = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <>
    <NavLink to="/purpose"><div className="left-page-icon"><FontAwesomeIcon icon={faChevronLeft} size="2x"/></div></NavLink>
    <div className="song-container">
      <div className="song">
        <iframe style={{ borderRadius : "12px" }} src="https://open.spotify.com/embed/track/1nXZnTALNXiPlvXotqHm66?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className="lyrics">
        <Card sx={{ maxWidth: 700, maxHeight: "20em", overflow: "auto", marginTop: "9.5em", textTransform: "uppercase", borderRadius: "1em"}}>
          <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              No, don't shoot me down (yeah) <br/>
              No, don't shoot me down (okay) <br/>
              No, don't shoot me down <br/>
              You so motherfuckin' dangerous (you started with a mere hello) <br/>

              <Typography variant="h5" color="#eea4bb" sx={{ cursor: "pointer"}} onClick={handleClickOpen}>
                You so motherfuckin' dangerous <br/>
                You got me by my neck (a boy is a gun) <br/>
              </Typography>
              <Dialog
                open={open}
                onClose={handleClose}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    A gun is dangerous and a potential threat if not treated correctly, but are also strong, powerful, and make you feel safe.
                    This second part of the idiom (safety) will come later.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              That's why these other niggas lame to us <br/>
              'Cause all these other niggas lame as fuck <br/>
              We show 'em no respect <br/>
              When the time's right, yeah <br/>
              When the time's right, baby <br/>
              When the time's right (a boy is a gun) <br/>
              (Turn me up a little bit) <br/>
              No, don't shoot me down <br/>
              Take your hoodie off, why you hide your face from me? <br/>
              Make your fuckin' mind up, I am sick of waitin' patiently <br/>
              How come you the best to me? I know you the worst for me <br/>

              <Typography variant="h5" color="#eea4bb" sx={{ cursor: "pointer"}} onClick={handleClickOpen2}>
                Boy, you sweet as sugar, diabetic to the first degree <br/>
              </Typography>
              <Dialog
                open={open2}
                onClose={handleClose2}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Often, men are not referred to or called (or expected to be) "sweet," subverting this gender stereotype and expectation.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              My spidey sensies, got me on the fencies <br/>
              Whole squad in Ginza, travel bag by Balenci' <br/>
              Big dawg hittin' big wheelies on the six speed <br/>
              No, don't shoot me down <br/>
              You so motherfuckin' dangerous (you started with a mere hello) <br/>
              You so motherfuckin' dangerous <br/>
              You got me by my neck (a boy is a gun) <br/>
              That's why these other niggas lame to us <br/>
              'Cause all these other niggas lame as fuck <br/>
              They showin' no respect <br/>
              When the time's right, yeah <br/>
              When the time's right, baby <br/>
              When the time's right (I said a boy is a gun) <br/>
              (Look) No, don't shoot me down <br/>
              Oh, you passive-aggressive? (You started with a mere hello) <br/>
              Oh, you fakin' you're mad? <br/>
              Oh, you wanna go home? Cool, you better call you a cab <br/>
              I ain't takin' you home, yeah, I'm brushin' you off <br/>

              <Typography variant="h5" color="#eea4bb" sx={{ cursor: "pointer"}} onClick={handleClickOpen3}>
                'Cause this parka is Comme, you're my favorite garçon <br/>
              </Typography>
              <Dialog
                open={open3}
                onClose={handleClose3}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Comme des Garçons is a high-end Japanese fashion brand; in French, Garçon means "boy," relating to his queer identity and also the same lyricism he used in a previous song, Garden Shed.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              Don't leave, stay right here, yeah, I want you right near (you started with a mere hello) <br/>
              You invited me to breakfast, why the fuck your ex here? <br/>
              Well, let's see if you 'round the God around this time next year <br/>
              No, don't shoot me down <br/>
              No, don't shoot me down (fucked up) <br/>
              No, don't shoot me down <br/>
              No, don't shoot me down <br/>
              You so motherfuckin' dangerous (you started with a mere hello) <br/>
              You so motherfuckin' dangerous <br/>
              You got me by my neck (a boy is a gun) <br/>
              That's why I start to think it's lame as fuck <br/>
              (Well, I'm here for you) <br/>
              When the time's right <br/>
              When the time's right, baby <br/>
              When the time's right (a boy is a gun) <br/>
              No, don't shoot me down <br/>

              <Typography variant="h5" color="#eea4bb" sx={{ cursor: "pointer"}} onClick={handleClickOpen4}>
                you're a gun 'cause <br/>
                I like you on my side <br/>
                At all times <br/>
                Keep me safe (No, don't shoot me down) <br/>
                Wait, wait, depending on, you know (all the time) <br/>
                You could be dangerous to me (time, time) <br/>
                Or anyone else <br/>              
              </Typography>
              <Dialog
                open={open4}
                onClose={handleClose4}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    This is the "safety" part of the idiom alluded to earlier, where this "gun" (the boy), is keeping his safe despite his danger.
                    While the original idiom empowers women, its male version takes a contrasting approach, aligning with societal expectations and stereotypes of men.
                    But in this case, it is not a physical danger, but psychological, a danger to his heart. Taking this stereotype, he shifts the meaning to love, a softer and more sensitive feeling. 
                    He shows vulnerability, challenging the societal expectations of men to be limited in emotional expression.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              Look, they be bringin' us up (you started with a mere hello) <br/>
              Yeah, like now and again <br/>
              Give a fuck what they talkin' 'bout, I see you as a ten <br/>
              I'ma leave it at that, I'ma leave us as friends <br/>
              'Cause the irony is I don't wanna see you again <br/>
              Stay the fuck away from me <br/>
              Stay the fuck away from me <br/>
              Stay the fuck away from me <br/>
              I ain't gon' repeat myself, but stay the fuck away from me <br/>
              No, don't shoot me down <br/>
              (You started with a mere hello) <br/>
              (A boy is a gun)
            </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button sx={{ marginLeft: "0.5em" }} size="small" variant="outlined" href="https://genius.com/Tyler-the-creator-a-boy-is-a-gun-lyrics">Lyrics</Button>
          </CardActions>
        </Card>
      </div>
    </div>
    <div className="blurb">Originally a popular feminist idiom, Tyler flips it into the context of his own love with a boy, an example of linguistic gender subversion.</div>
    <NavLink to="/sza"><div className="right-page-icon"><FontAwesomeIcon icon={faChevronRight} size="2x"/></div></NavLink>
    </>
  )
}

export default Tyler;