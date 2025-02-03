```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => {
      console.log('Count:', count); 
    };
    logCount();
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```