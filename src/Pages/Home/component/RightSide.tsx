import React, { FC } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHomeStyle } from "../style";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Topics from "../../../Components/Topics";

interface RightSideProps {
  classes: ReturnType<typeof useHomeStyle>;
}

const RightSide: FC<RightSideProps> = ({ classes }): React.ReactElement => {
  return (
    <Grid className={classes.RightSideCont} item xs={3}>
      <div>
        <InputBase
          placeholder={"Search Twitter"}
          className={classes.InputBase}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Topics classes={classes} />
        <Paper className={classes.TrendsWrapper}>
          <Paper className={classes.TrendsHeader} variant={"outlined"}>
            <Typography style={{ fontWeight: 800 }} variant={"h6"}>
              Who to follow
            </Typography>
          </Paper>

          <Paper
            className={`${classes.TrendsItem} ${classes.WhoToFollowItem}`}
            variant={"outlined"}
          >
            <div>
              <Avatar className={classes.WhoToFollowAvatar} />
            </div>
            <div style={{ marginRight: 40 }}>
              <div className={classes.TrendsItemHeaderWrap}>
                <Typography style={{ fontSize: 15 }} variant={"body1"}>
                  <b>Jonathan Sky</b>
                </Typography>
              </div>

              <Typography
                style={{ fontSize: 15, color: "#5b7083" }}
                variant={"body1"}
              >
                @EliGE
              </Typography>
            </div>
            <div className={classes.WhoToFollows}>
              <Button
                style={{ height: 30, borderRadius: 30 }}
                color={"primary"}
                variant={"outlined"}
              >
                Follow
              </Button>
            </div>
          </Paper>

          <Paper className={classes.ShowMoreButton}>
            <Typography variant={"body1"}>Show More</Typography>
          </Paper>
        </Paper>
      </div>
    </Grid>
  );
};

export default RightSide;
