// Dashboard.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../store";

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
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <h3>{widget.name}</h3>
                <p>{widget.text}</p>
                <button
                  onClick={() => handleRemoveWidget(category.name, widget.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
