import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHomeStyle } from "../../Pages/Home/style";
import { useSelector } from "react-redux";
import { selectTopicItem } from "../../store/ducks/topic/selector";
import { Link } from "react-router-dom";

interface TopicsProps {
  classes: ReturnType<typeof useHomeStyle>;
}

const Topics: React.FC<TopicsProps> = ({ classes }): React.ReactElement => {
  const topics = useSelector(selectTopicItem);

  return (
    <Paper className={classes.TrendsWrapper} variant={"elevation"}>
      <Paper className={classes.TrendsHeader} variant={"outlined"}>
        <Typography style={{ fontWeight: 800 }} variant={"h6"}>
          Trends for you
        </Typography>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Paper>

      {topics.map((topic) => (
        <Link
          key={topic._id}
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/home/search?q=${topic.name}`}
        >
          <Paper className={classes.TrendsItem} variant={"outlined"}>
            <div className={classes.TrendsItemHeaderWrap}>
              <Typography
                style={{ fontSize: 13, color: "#5b7083" }}
                variant={"body1"}
              >
                Trending in Latvia
              </Typography>
              <IconButton>
                <MoreHorizIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>

            <Typography style={{ fontSize: 15 }} variant={"body1"}>
              <b>{topic.name}</b>
            </Typography>
          </Paper>
        </Link>
      ))}

      <Paper className={classes.ShowMoreButton}>
        <Typography variant={"body1"}>Show More</Typography>
      </Paper>
    </Paper>
  );
};

export default Topics;
