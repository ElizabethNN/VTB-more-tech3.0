import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RuleCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ my: 1}}>
        <CardContent sx={{display: "flex", justifyContent: "space-between", alignItems: "center",}}>
          <Typography variant="body1" color="text.secondary" >
            {props.title}
          </Typography>
          <Checkbox defaultChecked={false} expand={expanded} onChange={handleExpandClick} aria-expanded={expanded}
            aria-label="show more"/>
          
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit >
          <CardContent>
            {props.content}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
