import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../store";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name}>
          <Typography variant="h4" gutterBottom>
            {category.name}
          </Typography>
          <Grid container spacing={3}>
            {category.widgets.map((widget) => (
              <Grid item xs={12} sm={6} md={4} key={widget.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{widget.name}</Typography>
                    <Typography variant="body2">{widget.text}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="secondary"
                      onClick={() =>
                        handleRemoveWidget(category.name, widget.id)
                      }
                    >
                      <CloseIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
