import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

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
}));

export default function Item({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.rating}
          </Avatar>
        }
        title={item.name}
        subheader={`$${item.price}/night`}
      />

      <CardMedia className={classes.media} image={item.img} title={item.name} />
      <CardContent>
        <div>
          {item.facility.map((element) => (
            <span className={classes.spaceX} key={element}>
              <Chip size="small" variant="outlined" label={element} />
            </span>
          ))}
        </div>
        <Typography variant="subtitle1">
          {item.property_type.toUpperCase()}
        </Typography>
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
