import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "./store";
import Dashboard from "./Components/Dashboard";
import AddWidget from "./Components/AddWidget";
import { data } from "./Utils/jsonData";
import { Container, Typography, Box } from "@mui/material";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories(data.categories));
  }, [dispatch]);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Dashboard
        </Typography>
        <AddWidget />
        <Dashboard />
      </Box>
    </Container>
  );
};

export default App;
