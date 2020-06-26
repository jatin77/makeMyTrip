import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
    position: "relative",
  },
  spaceX: {
    margin: ".5rem .5rem",
    display: "inline-block",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: ".5rem 0",
  },
  mZero: {
    margin: 0,
  },
}));

export default function Item({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <CardHeader
          avatar={
            <Badge badgeContent={item.rating} color="primary">
              <StarIcon style={{ color: "#ffb400" }} />
            </Badge>
          }
          // title={item.name}
        ></CardHeader>
        <div>
          <Typography
            variant="h6"
            gutterBottom
            style={{ lineHeight: "1.2" }}
            className={classes.mZero}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            display="block"
            gutterBottom
            className={classes.mZero}
            color="textSecondary"
          >
            ${item.price}/night
          </Typography>
        </div>
      </div>

      <CardMedia className={classes.media} image={item.img} title={item.name} />
      <CardContent>
        <div>
          {item.facility.map((element) => (
            <span className={classes.spaceX} key={element}>
              <Chip size="small" variant="outlined" label={element} />
            </span>
          ))}
        </div>

        <Typography variant="subtitle2"></Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Box component="fieldset" borderColor="transparent">
        <Rating
          name="read-only"
          value={item.rating}
          precision={0.5}
          readOnly
          size="small"
        />
      </Box>
    </Card>
  );
}
