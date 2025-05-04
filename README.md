# 🧠 React useState Practice

This project explores multiple practical examples using the `useState` hook in **React with TypeScript**.

## 🚀 What I Learned

- How to manage and update local state in functional components
- Handling text inputs and controlled components
- Creating and updating arrays as state
- Working with multiple state values
- Conditional rendering based on state
- Toggling state values (e.g., name switching, checkboxes, radios)
- Controlled forms with submit handling

## 🧩 Components Overview

- `MyButton`: Toggles a name between "Ahmad" and "Ihab" and counts clicks
- `MyInput`: Captures and displays text input (with a max length)
- `MyForm`: A full form with multiple fields, including conditionally rendered inputs
- `UsingArraysAsStateInTheComponent`: A dynamic list of phones with add/edit/delete functionality
- `SetMultipleTimes`: Demonstrates batching updates with `useState`

## 📂 Tech Stack

- React
- TypeScript
- Vite

## 🔍 Component Descriptions

### 1. `MyButton.tsx`
A simple button that:
- Displays a name (`Ahmad` or `Ihab`)
- Switches the name on each click
- Tracks and displays how many times it was clicked

> Used to practice toggling values and updating multiple states in a single component.

---

### 2. `MyInput.tsx`
An input field that:
- Captures and displays text typed by the user
- Limits the text to 20 characters
- Updates the UI live as the user types

> Demonstrates controlled components with `useState`.

---

### 3. `MyForm.tsx`
A form with multiple fields:
- Full name input
- Selection of student or graduate status
- Optional checkbox to show/hide additional input
- Displays submitted form data on the page

> Useful for practicing handling multiple inputs and conditional rendering with `useState`.

---

### 4. `UsingArraysAsStateInTheComponent.tsx`
Manages a list of phones:
- Displays each phone’s brand, model, and price
- Allows the user to **delete** a phone or **edit** its details

> Great example of how to use arrays as state and update items immutably.

---

### 5. `SetMultipleTimes.tsx`
Demonstrates updating a value (`score`) in quick succession:
- A button adds +1 to the score twice
- Helps understand how React batches state updates

> Reinforces how React handles multiple `setState` calls.

---

### 6. `App.tsx`
Main component that:
- Imports and renders all other components to showcase them together

> Acts as the root component to organize and display all learning examples.


