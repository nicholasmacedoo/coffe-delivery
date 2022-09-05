import { useRef, InputHTMLAttributes } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { Container, Input } from './styles'

interface InputAmountProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  onChangeValue?: (value: number) => void
}

export function InputAmount({ onChangeValue, ...rest }: InputAmountProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function increment() {
    if (inputRef.current) {
      const previousValue = inputRef.current.value
        ? parseInt(inputRef.current.value)
        : 0

      const value = previousValue + 1

      inputRef.current.value = String(value)

      if (onChangeValue) onChangeValue(value)
    }
  }

  function decrement() {
    if (inputRef.current) {
      const previousValue = inputRef.current.value
        ? parseInt(inputRef.current.value)
        : 0
      const value = previousValue - 1

      inputRef.current.value = String(value)

      if (onChangeValue) onChangeValue(value)
    }
  }

  return (
    <Container>
      <button type="button" onClick={decrement}>
        <Minus size={14} />
      </button>
      <Input min={1} ref={inputRef} type="number" {...rest} />
      <button type="button" onClick={increment}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
