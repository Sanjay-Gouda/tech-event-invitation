import { memo } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Link,
  TextField,
  Button,
  Hidden,
  useTheme,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === "dark" ? "#091c34" : "#3ce14c",
      paddingBottom: theme.spacing(5),
    },
    wave: {
      width: "100%",
      height: theme.spacing(50),
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(25),
      },
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    leftContainer: {
      flexGrow: 1,
    },
    iconsGrid: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
    },
    illustrationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    illustration: {
      width: "80%",
    },
    sendButton: {
      marginTop: theme.spacing(2),
    },
  })
);

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <img
        className={classes.wave}
        src={
          theme.palette.type === "dark"
            ? "/assets/footer-wave-dark.svg"
            : "/assets/footer-wave-light.svg"
        }
      />
      <Container id="contact">
        <Grid container>
          <Grid item md={6} sm={12} className={classes.left}>
            <Typography variant="h3" align="center">
              Connect with me
            </Typography>
            <Grid container className={classes.leftContainer}>
              <Grid item md={6} sm={12} className={classes.iconsGrid}>
                <Box className={classes.socialItem}>
                  <Link
                    href="https://github.com/Juggernaut9"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <IconButton
                      aria-label="Github profile"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Link>
                  <Typography>Github</Typography>
                </Box>
                <Box className={classes.socialItem}>
                  <Link
                    href="https://www.linkedin.com/in/bhavya-tomar-1967b6202"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <IconButton
                      aria-label="LinkedIn profile"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                  </Link>
                  <Typography>LinkedIn</Typography>
                </Box>
                <Box className={classes.socialItem}>
                  <Link
                    href="https://twitter.com/bhavyacodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <IconButton
                      aria-label="Twitter link"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </Link>
                  <Typography>Twitter</Typography>
                </Box>
                <Box className={classes.socialItem}>
                  <Link
                    href="https://twitter.com/bhavyacodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <IconButton
                      aria-label="My Email"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MailIcon fontSize="large" />
                    </IconButton>
                  </Link>
                  <Typography>xbhavatomar@gmail.com</Typography>
                </Box>
              </Grid>

              <Grid
                item
                md={6}
                sm={12}
                className={classes.illustrationContainer}
              >
                <Hidden smDown>
                  <img
                    src="/assets/message.svg"
                    className={classes.illustration}
                  />
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" align="center">
              Say Hi
            </Typography>
            <TextField
              label="Name"
              fullWidth
              margin="dense"
              variant="outlined"
              color="secondary"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="dense"
              variant="outlined"
              color="secondary"
            />
            <TextField
              label="Message"
              fullWidth
              margin="dense"
              multiline
              rows={5}
              variant="outlined"
              color="secondary"
            />
            <Button
              variant="outlined"
              className={classes.sendButton}
              color="secondary"
              endIcon={<SendIcon />}
            >
              send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default memo(Footer);