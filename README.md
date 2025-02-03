# Stale Closures in React useEffect

This repository demonstrates a common issue in React applications involving stale closures within the `useEffect` hook when dealing with asynchronous operations and state updates.

## The Problem

The example `MyComponent` uses `useEffect` to log the current `count` state. When the button is clicked, the `count` updates asynchronously.  If there is an asynchronous operation (e.g., API call, timer) inside the `useEffect`, there's a chance the callback function will capture the `count` variable's value *before* the update, leading to unexpected behavior.

## Solution

The solution involves using functional updates for the state and properly handling asynchronous operations within `useEffect` to ensure access to the most up-to-date state value.  This way, the callback function in the effect always uses the latest state.