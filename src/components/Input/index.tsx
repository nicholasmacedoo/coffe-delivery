import { useState, InputHTMLAttributes } from 'react'
import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export function Input({ required, style, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function onFocus() {
    setIsFocused(true)
  }
  function onBlur() {
    setIsFocused(false)
  }

  return (
    <Container style={style} isFocused={isFocused}>
      <input onFocus={onFocus} onBlur={onBlur} {...rest} />
      {!required && <span>Opcional</span>}
    </Container>
  )
}
