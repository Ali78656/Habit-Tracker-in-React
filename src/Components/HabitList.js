import React from "react";
import { FaTrash } from "react-icons/fa";
import "./HabitList.css";

function HabitList({ habits, toggleHabitCompletion, deleteHabit }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-item">
          <span className="habit-name">{habit.name}</span>
          <div className="habit-days">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <button
                key={day}
                className={`habit-day ${
                  habit.completedDays.includes(day) ? "completed" : ""
                }`}
                onClick={() => toggleHabitCompletion(habit.id, day)}
              >
                {day}
              </button>
            ))}
          </div>
          <button
            className="delete-button"
            onClick={() => deleteHabit(habit.id)}
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
