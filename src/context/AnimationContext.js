import { createContext, useState, useContext } from "react";

// 1. Create the animation context ( global store )
const AnimationContext = createContext();

// 2. Create the animation provider ( wraps app & shares the state )
export const AnimationProvider = ({ children }) => {
  // Check if there is a stored preference in localStorage
  const storedAnimationsEnabled = localStorage.getItem("animationsEnabled");

  // Use the stored preference or default to true if none exists
  const [animationsEnabled, setAnimationsEnabled] = useState(
    storedAnimationsEnabled === null
      ? true
      : JSON.parse(storedAnimationsEnabled)
  );

  // Function to toggle the animation state
  const toggleAnimations = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);

    // Save the new state to localStorage
    localStorage.setItem("animationsEnabled", newState);
  };

  // Provide the context to any child components that need it
  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

// 3. Create a custom hook for easy access to the context
export const useAnimation = () => useContext(AnimationContext);
