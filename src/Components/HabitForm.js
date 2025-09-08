import React, { useState } from "react";
import './HabitForm.css';

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;
    addHabit({ id: Date.now(), name: habitName, completedDays: [] });
    setHabitName("");
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a new habit"
        className="habit-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
}

export default HabitForm;
