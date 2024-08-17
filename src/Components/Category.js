import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget, removeWidget } from "../Utils/categoriesSlice";
import WidgetModal from "./WidgetModal";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddWidget = (widgetName, widgetText) => {
    const newWidget = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId: category.id, widget: newWidget }));
    setModalOpen(false); // Close the modal after adding
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget({ categoryId: category.id, widgetId }));
  };

  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <div key={widget.id} className="widget">
            <p>{widget.name}</p>
            <p>{widget.text}</p>
            <button onClick={() => handleRemoveWidget(widget.id)}>×</button>
          </div>
        ))}
        <button onClick={() => setModalOpen(true)} className="add-widget">
          + Add Widget
        </button>
      </div>
      {isModalOpen && (
        <WidgetModal
          onAddWidget={handleAddWidget}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Category;
