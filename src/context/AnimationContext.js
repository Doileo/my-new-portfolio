import { createContext, useState, useContext } from "react";

// 1. Create the animation context ( global store )
const AnimationContext = createContext();

// 2. Create the animation provider ( wraps app & shares the state )
export const AnimationProvider = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true); // default: ON

  // Here is the function that is going to toggle the animation state
  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
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
