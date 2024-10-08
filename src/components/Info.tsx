import useCounterHook from "../hooks/useCounterHook"

const Info = () => {
  const { count, increment, decrement } = useCounterHook()

  return (
    <>
      <div style={{background: 'purple', color: 'white', marginTop: 30}}>Info de contador {count}</div>
      <button onClick={() => increment()}>Sumar</button>
      <button onClick={() => decrement()}>Restar</button>
    </>
  )
}

export default Info