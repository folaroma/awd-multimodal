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

const CSH = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);


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

  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  return (
    <>
    <NavLink to="/frank"><div className="left-page-icon"><FontAwesomeIcon icon={faChevronLeft} size="2x"/></div></NavLink>
    <div className="song-container">
      <div className="song">
        <iframe style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/track/27aQH9DIJ3ozx3dC91Hhjg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className="lyrics">
        <Card sx={{ maxWidth: 700, maxHeight: "20em", overflow: "auto", marginTop: "9.5em", textTransform: "uppercase", borderRadius: "1em"}}>
          <CardContent>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
            <Typography variant="h4"> Part 1 </Typography> <br/>
              Last- Last night I drove to Harper's Ferry and I thought about you <br/>
              There were signs on the road that warned me of stop signs <br/>
              The speed limit kept decreasing by ten <br/>
              As we entered a town about halfway there <br/>
              It was almost raining at the train station <br/>
              We put our hoods on our heads at the train station <br/>
              We threw rocks into the river <br/>
              The river underneath the train tracks <br/>


              <Typography variant="h5" color="#3f543d" sx={{ cursor: "pointer"}} onClick={handleClickOpen}>
                And when the train came it was so big and powerful <br/>
                When it came into the little station <br/>
                I wanted to put my arms around it <br/>
                But the conductor looked at me funny <br/>
              </Typography>
              <Dialog
                open={open}
                onClose={handleClose}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    It is heavily implied throughout the album that this love interest is a man, and perhaps an older man with experience seen in this first line.
                    The line, “big and powerful,” relates to gender stereotypes and roles, where men are often viewed as such. But here, it is instead used in the context of a queer relationship, rather than the usual heteronormativity. 
                    The line at the end, “But the conductor looked at me funny,” can be seen as judgement of this relationship and for his homosexuality, alluding to the struggles of navigating society in a queer relationship.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              So we had to say goodbye and leave <br/>
              The Monopoly board still in the backseat <br/>
              Took that nightmare left turn to get out of town <br/>
              Ran into the decreasing speed limits again <br/>

              What should I do? (Eat breakfast) <br/>
              What should I do? (Eat lunch) <br/>
              What should I do? (Eat dinner) <br/>
              What should I do? (Go to bed) <br/>
              Where can I go? (Go to the store) <br/>
              Where can I go? (Apply for jobs) <br/>
              Where can I go? (Go to a friend's) <br/>
              Where can I go? (Go to bed) <br/>
              I wrote "Beach Death" when I thought you were taken <br/>
              I wrote "Beach Funeral" when I knew you were taken <br/>
              I wrote "Beach Fagz"—well it wasn't about you <br/>
              But it could've been—well, no, it couldn't have <br/>
              I spent a week in Ocean City <br/>
              And came back to find you were gone <br/>
              I spent a week in Illinois <br/>
              And came back to find you were still gone <br/>


              <Typography variant="h5" color="#3f543d" sx={{ cursor: "pointer"}} onClick={handleClickOpen2}>
                I pretended I was drunk when I came out to my friends <br/>
                I never came out to my friends <br/>
                We were all on Skype <br/>
                And I laughed and I changed the subject <br/>
                She said, "what's with this dog motif?" <br/>
                I said,​ "do you have something against dogs?" <br/>
              </Typography>
              <Dialog
                open={open2}
                onClose={handleClose2}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    He tried disclosing his sexuality to his peers but felt embarrassed and played it off as a joke. 
                    The process of self-discovery and coming to term with one’s identity is a struggle, especially when it contradicts the typical beliefs and expectations of men of having traits of, “…aggression, self-affirmation, social dominance, and a lack of consideration for others” (Malonda-Vidal, 2021). 
                    Gender is complex and fluid—discovering your identity is certainly no joke, and can definitely be terrifying.
                    In this second half about the dog motif, there is a Tumblr post out there, where the narrator (Will), in a conversation with a friend, changes the subject only to end up back where he started–with an embarrassing topic.
                    Dogs, or inhumans, could refer to a literal sexual fixation–or metaphorically to queer people; therefore, he may also asking his friend if she is okay with gay people.
                  </DialogContentText>
                </DialogContent>
              </Dialog>



              I am almost completely soulless <br/>
              I am incapable of being human <br/>
              I am incapable of being inhuman <br/>
              I am living uncontrollably <br/>

              It should be called anti-depression <br/>
              As a friend of mine suggested <br/>
              Because it's not the sadness that hurts you <br/>
              It's the brain's reaction against it <br/>
              It's not enough to love the unreal <br/>
              I am inseparable from the impossible <br/>
              I want gravity to stop for me <br/>
              My soul yearns for a fugitive from the laws of nature <br/>
              I want a cut scene <br/>
              I want a cut from your face to my face <br/>
              I want a cut I want <br/>
              The next related video <br/>

              I don't want to go insane <br/>
              I don't want to have schizophrenia <br/>
              <br/>
              <Typography variant="h4"> Part 2 </Typography>
              <br/>
              Oh oh oh oh oh oh <br/>
              Oh oh oh oh oh oh <br/>
              Oh oh oh oh oh oh oh oh oh oh oh oh oh <br/>

              Last night I dreamed he was trying to kill you <br/>
              I woke up and I was trying to kill you <br/>

              <Typography variant="h5" color="#3f543d" sx={{ cursor: "pointer"}} onClick={handleClickOpen3}>
                It's been a year since we first met <br/>
                I don't know if we're boyfriends yet <br/>
              </Typography>
              <Dialog
                open={open3}
                onClose={handleClose3}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    This motif continues in the second part, showing the narrator continuing to struggle with this relationship.
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              

              Do you have any crimes that, that <br/>
              We can use to pass the time I am <br/>
              Running out of drugs to try and I <br/>
              We said we hated humans <br/>
              We wanted to be humans <br/>
              We said we hated humans <br/>
              We wanted to be humans <br/>

              More groceries, get eaten <br/>
              Get more groceries, get eaten <br/>
              Get more groceries, get eaten <br/>

              Oh oh oh oh oh oh <br/>
              Oh oh oh oh oh oh oh oh oh oh oh oh oh oh <br/>

              In the mall in the nighttime <br/>
              You came back alone with a flashlight <br/>
              It was the start of nothing new (backwards) <br/>
              And it was my favorite scene <br/>
              I couldn’t tell you what it means <br/>
              But it meant something to me <br/>

              And pretty soon you'll find some nice young <br/>
              Satanist with braces and one <br/>
              Capital "O", significant Other <br/>
              And you can take him home to your mother and <br/>
              Say "ma, this is my brother" <br/>

              We said we hated humans <br/>
              We wanted to be humans <br/>
              We said we hated humans <br/>
              We wanted to be humans <br/>

              More groceries, get eaten <br/>
              Get more groceries, get eaten <br/>
              Get more groceries, get eaten <br/>
              By the one you love <br/>
              When they put their lips around you <br/>
              You can feel their smile from the inside <br/>

              <br/>
              <Typography variant="h4"> Part 3 </Typography>
              <br/>

              Last night I dreamed he was trying to kill you <br/>
              I woke up and I was trying to kill you <br/>

              Your ears perked up <br/>
              I perked up when your ears perked up <br/>
              You were all looking around <br/>
              And I hoped it was for me <br/>
              I hoped you were using your sonar systems for me <br/>

              The ancients saw it coming <br/>
              You can see that they tried to warn them <br/>
              In the tales that they told their children <br/>
              But they fell out of their heads in the morning <br/>

              
              <Typography variant="h5" color="#3f543d" sx={{ cursor: "pointer"}} onClick={handleClickOpen4}>
                They said sex can be frightening <br/>
                But the children were not listening <br/>
                And the children cut out everything <br/>
                Except for the kissing and the singing <br/>
              </Typography>
              <Dialog
                open={open4}
                onClose={handleClose4}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    Shedding sexual purity is an anxious moment for many teenagers, but sometimes this leads to regrettable moments. 
                    Sex can be humiliating, humiliating, dangerous, and for many, vital in the journey of self-discovery and gender identity/sexuality. 
                    Here, we can tell that the narrator begins to mourn the relationship and what happened, wishing it had never even occurred in the first place. 
                    Perhaps, he even regrets being with a man, being in a queer relationship.            
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              When they finally found their homes <br/>
              At Walt Disney studios <br/>
              And then everyone grew up <br/>
              With their fundamental schemas fucked, but, but <br/>
              But there are lots of fish left in the sea <br/>
              There are lots of fish in business suits <br/>
              That talk and walk on human feet <br/>
              And visit doctors, have weak knees <br/>

              Oh please let me join your cult <br/>
              I'll paint my face in your colors <br/>
              You had a real nice face <br/>
              
              <Typography variant="h5" color="#3f543d" sx={{ cursor: "pointer"}} onClick={handleClickOpen5}>
                I had an early death <br/>

                The ocean washed over your grave <br/>
              </Typography>
              <Dialog
                open={open5}
                onClose={handleClose5}
              >
                <DialogContent>
                  <DialogContentText variant="body1" sx={{ fontFamily: "CircularStd-Medium" }} color="black" id="alert-dialog-description">
                    He utters, “I had an early death,” into the most important refrain of the album: “The ocean washed over your grave, the ocean washed open your grave.” 
                    Perhaps, the way he perceived himself to be before his self-discovery has died and realizing that after he will never have this love interest, he will never be able to love another man. 
                    It is completely unclear, leaving interpretation up to its listeners, and there is a chance that we are never supposed to know. 
                  </DialogContentText>
                </DialogContent>
              </Dialog>

              The ocean washed open your grave <br/>
              The ocean washed over your grave <br/>
              The ocean washed open your grave <br/>
              The ocean washed over your grave <br/>
              The ocean washed open your grave <br/>
              (How's your face? How's your body?) <br/>
              The ocean washed over your grave <br/>
              The ocean washed open your grave <br/>
              (We're too scared to do shit!) <br/>
              The ocean washed over your grave <br/>
              The ocean washed open your grave <br/>
              The ocean washed over your grave <br/>
              The ocean washed open your grave <br/>
              (We're too scared to do shit!)


            </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button sx={{ marginLeft: "0.5em" }} size="small" variant="outlined" href="https://genius.com/Car-seat-headrest-beach-life-in-death-2018-lyrics">Lyrics</Button>
          </CardActions>
        </Card>
      </div>
    </div>
    <div className="blurb">This song is 13 minutes and 19 seconds long.</div>
    </>
  )
}

export default CSH;