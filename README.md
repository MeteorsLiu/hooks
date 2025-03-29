# Meteor React Hooks!

## useAsyncState

Make a state asynchronously

### Howto

```typescript
const [state] = useState("")
const stateAsync = useAsyncState(state)

// ...some async operation
async getLatestData() {
     const data = await fetchData()
    // rendered happened! get latest rendered state value
    const latestValue = await stateAsync()
}
```

## useLatest


Make a value keeping latest

### Howto

```typescript
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

```typescript
const isMounted = useMounted()

if (isMounted) {
    console.log("We're mounted!")
}

```


## useMountedEffect

Skip first trigger of useEffect

### Howto

```typescript
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

```typescript
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

```typescript
const isBottom = useScreenBottom()

if (isBottom) {
    console.log("we're at the bottom!")
}
```

