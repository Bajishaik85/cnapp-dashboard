import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const AddWidget = () => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryName, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
    setCategoryName("");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Category</InputLabel>
        <Select
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          label="Select Category"
        >
          {categories.map((category) => (
            <MenuItem key={category.name} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        variant="outlined"
        label="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddWidget}>
        Add Widget
      </Button>
    </Box>
  );
};

export default AddWidget;
