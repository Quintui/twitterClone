import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import ModalComp from "../../Components/ModalComp/ModalComp";
import useHandleClick from "../../hooks/useHandleClick";
import { useLoginStyle } from "./style";

const Login = () => {
  const classes = useLoginStyle();

  const LoginHandlerClick = useHandleClick();
  const RegistorHandlerClick = useHandleClick();

  return (
    <div className={classes.wrapper}>
      <section className={classes.leftSide}>
        <TwitterIcon className={classes.leftSideIcon} />
      </section>

      <section className={classes.rightSide}>
        <div className={classes.rightSideWrapper}>
          <TwitterIcon className={classes.rightBird} />

          <Typography variant="h3" className={classes.rightSideMainHeader}>
            Happening now
          </Typography>

          <Typography className={classes.rightSideSecondlyHeader} variant="h5">
            Join Twitter today.
          </Typography>
          <Button
            className={classes.buttonStyle}
            color={"primary"}
            onClick={RegistorHandlerClick.handleClick}
            variant={"contained"}
          >
            Sing Up
          </Button>

          <Button
            className={classes.buttonStyle}
            color={"primary"}
            variant={"outlined"}
            onClick={LoginHandlerClick.handleClick}
          >
            Sing In
          </Button>

          <ModalComp
            handleClick={RegistorHandlerClick.handleClick}
            open={RegistorHandlerClick.open}
          >
            <div className={classes.ModalBird}>
              <TwitterIcon style={{ width: 35, height: 35 }} />
            </div>
            <DialogTitle id="form-dialog-title">Registration</DialogTitle>
            <DialogContent>
              <TextField
                style={{ marginBottom: 20 }}
                margin="dense"
                id="email"
                label="Email Address"
                variant={"outlined"}
                type="email"
                fullWidth
              />
              <TextField
                style={{ marginBottom: 20 }}
                margin="dense"
                id="password"
                label="Password"
                variant={"outlined"}
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={RegistorHandlerClick.handleClick}
                color="primary"
              >
                Next
              </Button>
            </DialogActions>
          </ModalComp>

          <ModalComp
            handleClick={LoginHandlerClick.handleClick}
            open={LoginHandlerClick.open}
          >
            <div className={classes.ModalBird}>
              <TwitterIcon style={{ width: 35, height: 35 }} />
            </div>
            <DialogTitle id="form-dialog-title">Sing In</DialogTitle>
            <DialogContent>
              <TextField
                style={{ marginBottom: 20 }}
                autoFocus
                margin="dense"
                id="loginEmail"
                label="Email Address"
                variant={"outlined"}
                type="email"
                fullWidth
              />
              <TextField
                autoFocus
                style={{ marginBottom: 20 }}
                margin="dense"
                id="loginPassword"
                label="Password"
                variant={"outlined"}
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={LoginHandlerClick.handleClick} color="primary">
                Login
              </Button>
            </DialogActions>
          </ModalComp>
        </div>
      </section>
    </div>
  );
};

export default Login;
