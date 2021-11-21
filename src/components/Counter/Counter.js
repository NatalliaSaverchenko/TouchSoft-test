import { isEven } from '../../api/parity'

const Counter = ({ value, setValue }) => {
  
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const increase = () => {
    setValue((prevState) => prevState + 1)
  }

  const decrease = () => {
    setValue((prevState) => {
      return prevState === 0 ? prevState : prevState - 1
    })
  }

  const reset = () => {
    setValue(0)
  }

  return (
    <div className="counterContainer">
      <div className="counterInput">
        <input onChange={onChange} value={value}></input>
        <label>{`Введено ${isEven(value) ? `чётное` : `нечётное`} число`}</label>
      </div>
      <div className="counterPannel">
        <button className="decrease" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="increase" onClick={increase}>
          +
        </button>
      </div>
    </div>
  )
}
export default Counter
