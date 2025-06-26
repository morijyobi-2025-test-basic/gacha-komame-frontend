import { describe, expect, it } from "vitest"
import { render, screen } from '@testing-library/react'

import Result from '../../src/components/Result'

describe('Resultコンポーネント', () => {
  it('propsがSの場合', () => {
    // Resultコンポーネントのpropsが {result: "S"} である場合をレンダリング
    render(<Result result={{result: "S"}} />)
    
    // 画面上に"S"が表示されていることを確認
    const resultElement = screen.getByText("S")
    expect(resultElement).toBeInTheDocument()

    expect(resultElement).toHaveStyle({
      color: '#ff0000',
    })
  })

  it('propsがAの場合', () => {
    // Resultコンポーネントのpropsが {result: "A"} である場合をレンダリング
    render(<Result result={{result: "A"}} />)
    
    // 画面上に"A"が表示されていることを確認
    const resultElement = screen.getByText("A")
    expect(resultElement).toBeInTheDocument()

    expect(resultElement).toHaveStyle({
      color: '#0000ff',
    })
  })

  it('propsがBの場合', () => {
    // Resultコンポーネントのpropsが {result: "B"} である場合をレンダリング
    render(<Result result={{result: "B"}} />)
    
    // 画面上に"B"が表示されていることを確認
    const resultElement = screen.getByText("B")
    expect(resultElement).toBeInTheDocument()

    expect(resultElement).toHaveStyle({
      color: '#00ff00',
    })
  })

  it('propsがCの場合', () => {
    // Resultコンポーネントのpropsが {result: "C"} である場合をレンダリング
    render(<Result result={{result: "C"}} />)
    
    // 画面上に"C"が表示されていることを確認
    const resultElement = screen.getByText("C")
    expect(resultElement).toBeInTheDocument()

    expect(resultElement).toHaveStyle({
      color: '#666666',
    })
  })

  
})