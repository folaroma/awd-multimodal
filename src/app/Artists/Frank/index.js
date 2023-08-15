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

const Frank = () => {
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
    <NavLink to="/sza"><div className="left-page-icon"><FontAwesomeIcon icon={faChevronLeft} size="2x"/></div></NavLink>
    <div className="song-container">
      <div className="song">
        <iframe style={{ borderRadius : "12px"}} src="https://open.spotify.com/embed/track/6Nle9hKrkL1wQpwNfEkxjh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className="lyrics">
        <Card sx={{ maxWidth: 700, maxHeight: "20em", overflow: "auto", marginTop: "9.5em", textTransform: "uppercase", borderRadius: "1em"}}>
          <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">

              <Typography variant="h5" color="#cc9e41" sx={{ cursor: "pointer"}} onClick={handleClickOpen}>
                My guy pretty like a girl <br/>
                And he got fight stories to tell <br/>
                I see both sides like Chanel <br/>
                See on both sides like Chanel <br/>
              </Typography>
              <Dialog
                open={open}
                onClose={handleClose}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    In the first line, he immediately challeneges traditional notions of gender, and recognizes that appearance and expression are not fixed to gender, rather that it can be a spectrum than a strict dichotomy. 
                    By starting with “my guy,” he acknowledges his sexuality, and breaks traditional views of men that are otherwise viewed negatively, but then caters back to these stereotypes immediately with the next line, “And he got fight stories to tell,” pandering to this theme of two sides.
                    It happens again, in the next lines "I see both sides like Chanel / I see on both sides like Chanel.” This can be interpreted in three different ways. “C on both sides like Chanel,” the Chanel logo has two C’s back-to-back. “I see on both sides,” a reference to his bisexuality and fluidity. “Sea on both sides like channel [his album],” a channel has a sea on both sides.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              Swimming laps through pool water <br/>
              Heated like I'm underworld <br/>
              Hide my tattoos in Shibuya <br/>
              Police think I'm of the underworld <br/>
              12 treat a nigga like he twelve <br/>
              How you looking up to me and talking down? (Yeah) <br/>
              Can't you see I am the big man? (Big man) <br/>
              God level, I am the I am (Woah) <br/>
              Now film it with that drone cam, in the pink like Killa Cam <br/>
              Put a zoom on that stick, Noé, up so close I'm on that kill <br/>
              Remote controller on your lower back, yes, the good <br/>
              Dick could roll the eyes back in the skull <br/>
              Rolling when you ride, popping <br/>
              Rolling when you ride, ride the Rodman <br/>
              Got one that's straight acting <br/>
              Turnt out like some dirty plastic (Ride) <br/>
              2016: burnt some discs (Dope) <br/>
              2017: ideas playing off a Walkman <br/>
              This a cult, not a clique on the net <br/>
              With a cup in a cup, Actavis <br/>

              <Typography variant="h5" color="#cc9e41" sx={{ cursor: "pointer"}} onClick={handleClickOpen2}>
                That's a double edge, "issa knife" (Knife) <br/>
              </Typography>
              <Dialog
                open={open2}
                onClose={handleClose2}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Again, this idea of duality and "two sides."
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              And I don't like to fight 'til I'm fighting (Fighting) <br/>
              Revenge in the air makes my lungs sick <br/>
              Chopper in the sky like a gun trick (Pow) <br/>
              Clips on clips like Mikey (Hello) <br/>
              It's really all <br/>

              I see both sides like Chanel <br/>
              See on both sides like Chanel <br/>

              It's really you on my mind <br/>
              It's really you on my mind <br/>
              It's really you <br/>
              It's really you on my mind <br/>

              <Typography variant="h5" color="#cc9e41" sx={{ cursor: "pointer"}} onClick={handleClickOpen3}>
                V both sides of the 12 <br/>
                Steam both sides of the L <br/>
              </Typography>
              <Dialog
                open={open3}
                onClose={handleClose3}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Here as well.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              Freeze smoke rings and they hail <br/>
              Sleet snow grind for the wealth <br/>
              Whole team diamonds is real <br/>
              Showed 'em how to shine by theirselves <br/>
              You need a cosign for your health <br/>
              I need that bitch to grind on my belt <br/>
              I know you need to try for my belt <br/>
              I know you seen it driving itself <br/>
              No matte black on the ride 'cause it's stale <br/>
              But it's stealth <br/>

              I see both sides like Chanel <br/>
              I see both sides like Chanel <br/>
              My pockets snug, they can't hold my 7 <br/>
              They banned my Visa, my Amex and Mastercards <br/>
              I got new money, and it's all cash <br/>
              I got new bags, and they all collabs <br/>
              I rubber band a bunch of thousand-dollar Delta gift cards <br/>

              <Typography variant="h5" color="#cc9e41" sx={{ cursor: "pointer"}} onClick={handleClickOpen4}>
                (I mean my baby bi) <br/>
              </Typography>
              <Dialog
                open={open4}
                onClose={handleClose4}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Instead of creating another metaphor, he just outright says it here.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              Amazing, the cash online unknown <br/>
              (I mean my baby bi) <br/>
              Blazing the dash, counting money at home <br/>
              My pockets snug, they can't hold my 7 <br/>
              They banned my Visa, my Amex and Mastercards <br/>
              I got new money, and it's all cash <br/>
              I got new bags, and they all collabs <br/>
              I rubber band a bunch of thousand-dollar Delta gift cards <br/>
              (I mean my baby bi) <br/>
              Amazing, the cash online unknown <br/>
              (I mean my baby bi) <br/>
              Blazing the dash, counting money at home <br/>


            </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button sx={{ marginLeft: "0.5em" }} size="small" variant="outlined" href="https://genius.com/Frank-ocean-chanel-lyrics">Lyrics</Button>
          </CardActions>
        </Card>
      </div>
    </div>
    <div className="blurb">At exactly 1:45, a shouting chorus begins, exactly halfway through the song.</div>
    <NavLink to="/csh"><div className="right-page-icon"><FontAwesomeIcon icon={faChevronRight} size="2x"/></div></NavLink>
    </>
  )
}

export default Frank;