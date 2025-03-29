# Meteor React Hooks!

## useAsyncState

Make a state asynchronously

### Howto

```
const [state] = useState("")
const stateAsync = useAsyncState(state)

// ...some async operation
async getLatestData() {
    // latest rendered state value
    const latestValue = await stateAsync()
}
```

## useLatest


Make a value keeping latest

### Howto

```
const [state] = useState("")
const stateLatest = useLatest(state)

// ...some unrendered operation
useEffect(() => {
    //  latest rendered state value
    const latestValue = stateLatest.current()
}, [])

```



## useMounted

Indicate current component is mounted or not.

### Howto

```
const isMounted = useMounted()

if (isMounted) {
    console.log("We're mounted!")
}

```


## useMountedEffect

Skip first trigger of useEffect

### Howto

```
const [state, setState] = useState("init")

setState("aaa")
...
setState("bbb")
...
setState("ccc")


useMountedEffect(() => {
    // in this example, the initial state value "init" will not be printed.
    // output: 
    // state changed: aaa
    // state changed: bbb
    // state changed: ccc
    console.log(`state changed: ${state}`)
}, [state])

```


## useRafCallback

use [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) to optimize function

### Howto

```
const [windowSize, setWindowSize] = useState(0)

const [setWindowSizeRAF] = useRafCallback((currentWindowSize: number) => {
    setWindowSize(currentWindowSize)
})

useEffect(() => {
    // resize can be triggered in very high frequency.
    // to reduce battery cost, we should use RAF.
    const onWindowResize = () => {
        setWindowSizeRAF(window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize;, onWindowResize)
}, [])
```




## useScreenBottom

Check user is scrolled to bottom

### Howto

```
const isBottom = useScreenBottom()

if (isBottom) {
    console.log("we're at the bottom!")
}
```

### What If I want to export a component? 

You can do that too, following same pattern as you'd with hooks.

Bear in mind you'd propably need .tsx file and not .ts.

### Share with the world

Share your work and learnings with the world! :)
