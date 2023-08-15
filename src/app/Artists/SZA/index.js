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

const SZA = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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

  return (
    <>
    <NavLink to="/tyler"><div className="left-page-icon"><FontAwesomeIcon icon={faChevronLeft} size="2x"/></div></NavLink>
    <div className="song-container">
      <div className="song">
        <iframe style={{borderRadius : "12px"}} src="https://open.spotify.com/embed/track/1Y7tMWKvFZLCpoX0SINyhP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className="lyrics">
        <Card sx={{ maxWidth: 700, maxHeight: "20em", overflow: "auto", marginTop: "9.5em", textTransform: "uppercase", borderRadius: "1em"}}>
          <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">

                Uh, you love the way I pop my top or how I lose my cool <br/>
                Or how I look at you <br/>
                Say, why? <br/>
                It ain't no fightin', no, I can't stop it <br/>
                This took a while (Yeah) <br/>
                Love the way I pump my fist or how I bust my hip <br/>
                For your affection, tryna be down <br/>
                No fightin' and no stoppin' <br/>
                Stick around <br/>


                <Typography variant="h5" color="#385830" sx={{ cursor: "pointer"}} onClick={handleClickOpen}>
                  Wish I was the type of girl that you take over to mama <br/>
                  The type of girl, I know my daddy, he'd be proud of (Yeah) <br/>
                  Be proud of (Yeah) <br/>
                  Be proud of, be proud, you know, you know <br/>
                  Wanna be the type of girl you take home to your mama <br/>
                  The type of girl, I know your fellas, they'd be proud of <br/>
                  Be proud of, be proud of, be proud of, boy, you know <br/>
                  Normal girl, oh <br/>
                  I wish I was a normal girl, oh, my <br/>
                </Typography>
                <Dialog
                  open={open}
                  onClose={handleClose}
                >
                  <DialogContent>
                    <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                      SZA tackles what it means to really be a "normal girl", facing the traditional and societal views of women, and the expectations that come from it in the context of her loved ones. 
                      She asserts her desires to match the expectations of her love interest, his family and friends, and her own family
                    </DialogContentText>
                  </DialogContent>
                </Dialog>

                How do I be, how do I be your baby? <br/>
                Normal girl, oh <br/>
                I wish I was a normal girl <br/>
                I'll never be, no, never be a, oh <br/>

                <Typography variant="h5" color="#385830" sx={{ cursor: "pointer"}} onClick={handleClickOpen2}>
                  You like it (You like it), when I be (When I be), aggressive (Aggre—) <br/>
                  You like when I say to you <br/>
                  "Get it if you got it, I'm ready and waitin' for it <br/>
                  I'm callin' to put it on," yeah <br/>
                </Typography>
                <Dialog
                  open={open2}
                  onClose={handleClose2}
                >
                  <DialogContent>
                    <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                      We can see this repeated desire of being a normal girl, which in this case is one that the people in her love interests’ life would approve of, but she indicates that he only likes her sexual aspects.
                    </DialogContentText>
                  </DialogContent>
                </Dialog>

                Like it (Like it), when I be (When I be), aggressive <br/>
                Love when I say to you <br/>
                "Get it if you want it, I'm waitin', I'm gonna find you <br/>
                I'm ready to put it on you," yeah, yeah <br/>
                Type of girl you wanna take home to mama <br/>
                Wanna be the type of girl, my daddy, he'd be proud of <br/>
                Be proud of, be proud of, be proud, you know, you know <br/>
                The type of girl you wanna take her home right up to mama <br/>
                The kind of girl, I know your fellas, they'd be proud of <br/>
                I'll be probably, I'll be proud like, I'll be probably a problem <br/>
                Normal girl, oh, ah <br/>
                (No magazine, no fantasy) <br/>
                I really wish I was a normal girl <br/>
                How do I be, how do I be your baby? <br/>
                Normal girl, oh <br/>
                I wish I was a normal girl, oh, babe <br/>
                I'll never be, no, never be a, oh <br/>
                This time next year, I'll be livin' so good <br/>
                Won't remember your name, I swear <br/>
                Livin' so good, livin' so good, livin' so good <br/>
                This time next year, I'll be livin' so good <br/>
                Won't remember no pain, I swear <br/>

                <Typography variant="h5" color="#385830" sx={{ cursor: "pointer"}} onClick={handleClickOpen3}>
                  Before that you figured out that I was just a normal girl <br/>
                  Normal girl, what do you say now? <br/>
                  Quit on the world 'cause it ain't going your way now <br/>
                  Quit on yourself 'cause you can't figure your way out <br/>
                  Normal girl <br/>
                  How do you be?
                </Typography>
                <Dialog
                  open={open3}
                  onClose={handleClose3}
                >
                  <DialogContent>
                    <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                      Heartbreaking outro at the end here. Still so very hung up on the idea of being a "normal girl," but in the perspective of a man's eyes (her love interest),
                      She became a "normal girl" for this guy, but now doesn't have full control of her life and feels down since she gave up her identity for a guy that didn't deserve her.
                    </DialogContentText>
                  </DialogContent>
                </Dialog>


            </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button sx={{ marginLeft: "0.5em" }} size="small" variant="outlined" href="https://genius.com/27545514">Lyrics</Button>
          </CardActions>
        </Card>
      </div>
    </div>
    <div className="blurb">This song delves into themes of self-perception, expectations, and authenticity in the eyes of what it means to be a woman, or “girl,” and a song certainly meant for other women.</div>
    <NavLink to="/frank"><div className="right-page-icon"><FontAwesomeIcon icon={faChevronRight} size="2x"/></div></NavLink>
    </>
  )
}

export default SZA;