// AddWidget.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store";

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
  };

  return (
    <div>
      <select
        onChange={(e) => setCategoryName(e.target.value)}
        value={categoryName}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button onClick={handleAddWidget}>Add Widget</button>
    </div>
  );
};

export default AddWidget;
