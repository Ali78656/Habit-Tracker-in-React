import React, { useState, useEffect } from "react";
import HabitForm from "./Components/HabitForm";
import HabitList from "./Components/HabitList";
import ProgressChart from "./Components/ProgressChart";
import { FaSun, FaMoon } from "react-icons/fa"; 
import "./App.css";

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    localStorage.setItem("darkMode", darkMode);
  }, [habits, darkMode]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggleHabitCompletion = (id, day) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completedDays: habit.completedDays.includes(day)
                ? habit.completedDays.filter((d) => d !== day)
                : [...habit.completedDays, day],
            }
          : habit
      )
    );
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h1 className="title">Habit Tracker</h1>
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <HabitForm addHabit={addHabit} />
      <HabitList
        habits={habits}
        toggleHabitCompletion={toggleHabitCompletion}
        deleteHabit={deleteHabit}
      />
      <ProgressChart habits={habits} />
    </div>
  );
}

export default App;
