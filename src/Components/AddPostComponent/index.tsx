import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
import MoodIcon from "@material-ui/icons/Mood";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useAddPostStyle } from "./style";
import { useDispatch } from "react-redux";
import { fetchAddTweetAction } from "../../store/ducks/tweets/actionCreactors";

const MAX_LENGTH = 280;

const AddPost = () => {
  const dispatch = useDispatch();
  const classes = useAddPostStyle();
  const [value, setValue] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const textLimitPrecent = (value.length / MAX_LENGTH) * 100;

  const limitedCount = MAX_LENGTH - value.length;

  const handleAddTweet = (): void => {
    dispatch(fetchAddTweetAction(value));
    setValue("");
  };

  return (
    <Paper>
      <Grid className={classes.AddFormWrapper} container>
        <Grid style={{ marginRight: 10 }} item xs={1}>
          <Avatar className={classes.AddFormAvatar} alt="User Avatar" />
        </Grid>
        <Grid className={classes.AddFormContentWrapper} item xs={10}>
          <div className={classes.AddFormTextAreaWrapper}>
            <Typography>
              <TextareaAutosize
                rowsMax={15}
                placeholder={"What's happening?"}
                className={classes.AddFormTextArea}
                onChange={onChangeValue}
                value={value}
              />
            </Typography>
          </div>
          <div className={classes.AddFormTweetAction}>
            <div className={classes.IconButtonsWrapper}>
              <IconButton
                style={{ padding: 0, marginRight: 12 }}
                color={"primary"}
              >
                <ImageIcon />
              </IconButton>
              <IconButton style={{ padding: 0 }} color={"primary"}>
                <MoodIcon />
              </IconButton>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {value && (
                <>
                  <span className={classes.counter}>
                    {textLimitPrecent >= 100 ? limitedCount : value.length}
                  </span>
                  <div className={classes.CircularProg}>
                    <CircularProgress
                      style={{ color: "#edeef0" }}
                      variant={"determinate"}
                      value={100}
                      size={20}
                    />
                    <CircularProgress
                      variant={"determinate"}
                      value={textLimitPrecent >= 100 ? 100 : textLimitPrecent}
                      size={20}
                      style={
                        textLimitPrecent >= 100 ? { color: "red" } : undefined
                      }
                    />
                  </div>
                </>
              )}
              <Button
                style={{ borderRadius: 30 }}
                color={"primary"}
                variant={"contained"}
                disabled={textLimitPrecent > 100 && true}
                onClick={handleAddTweet}
              >
                Tweet
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddPost;
