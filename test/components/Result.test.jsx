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

    // Sの場合はtext-red-500クラスが適用されることを確認
    expect(resultElement).toHaveClass('text-red-500')
  })

  it('propsがAの場合', () => {
    // Resultコンポーネントのpropsが {result: "A"} である場合をレンダリング
    render(<Result result={{result: "A"}} />)
    
    // 画面上に"A"が表示されていることを確認
    const resultElement = screen.getByText("A")
    expect(resultElement).toBeInTheDocument()

    // Aの場合はtext-blue-500クラスが適用されることを確認
    expect(resultElement).toHaveClass('text-blue-500')
  })

  it('propsがBの場合', () => {
    // Resultコンポーネントのpropsが {result: "B"} である場合をレンダリング
    render(<Result result={{result: "B"}} />)
    
    // 画面上に"B"が表示されていることを確認
    const resultElement = screen.getByText("B")
    expect(resultElement).toBeInTheDocument()

    // Bの場合はtext-green-500クラスが適用されることを確認
    expect(resultElement).toHaveClass('text-green-500')
  })

  it('propsがCの場合', () => {
    // Resultコンポーネントのpropsが {result: "C"} である場合をレンダリング
    render(<Result result={{result: "C"}} />)
    
    // 画面上に"C"が表示されていることを確認
    const resultElement = screen.getByText("C")
    expect(resultElement).toBeInTheDocument()

    // Cの場合はtext-gray-600クラスが適用されることを確認
    expect(resultElement).toHaveClass('text-gray-600')
  })

  
})