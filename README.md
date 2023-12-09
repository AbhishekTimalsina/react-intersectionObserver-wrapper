# react-intersectionobserver-wrapper

Simple Intersection Observer wrapper for React js.

import the useObserve hook from "react-intersectionobserver-wrapper"

```javascript
import useObserve from "react-intersectionobserver-wrapper";
```

Pass single ref to the hook or array of refs to the hook. It returns an observe function that you can pass the callbackk funciton and options in (use it inside of useEffect function)

```javascript
function App() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const observe = useObserve([firstRef, secondRef]);
  // or
  const observe2 = useObserve(firstRef);

  return (
    <>
      <div ref={firstRef}></div>
      <div ref={secondRef}></div>
    </>
  );
}
```

the observe function returned by useObserve hook accept two arguments.

```javascript
// objserve(callback, optionObj)

function callback(entries){
 entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
        }
      });
    },
}
useEffect(() => {
  observe(callback,{ threshold: 0.5 });
},[]);
// the optionObj is optional. It is the option object passed in the intersection-observer api
```
