import { describe, expect, it } from "vitest"
import { render, screen } from '@testing-library/react'

import Result from '../../src/components/Result'

describe('Resultコンポーネント', () => {
  it('propsが大吉の場合', () => {
    render(<Result result={{result: "大吉"}} />)
    const resultElement = screen.getByText("大吉")
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveClass('text-red-600')
  })

  it('propsが吉の場合', () => {
    render(<Result result={{result: "吉"}} />)
    const resultElement = screen.getByText("吉")
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveClass('text-yellow-500')
  })

  it('propsが中吉の場合', () => {
    render(<Result result={{result: "中吉"}} />)
    const resultElement = screen.getByText("中吉")
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveClass('text-indigo-500')
  })

  it('propsが小吉の場合', () => {
    render(<Result result={{result: "小吉"}} />)
    const resultElement = screen.getByText("小吉")
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveClass('text-gray-700')
  })

  it('propsが凶の場合', () => {
    render(<Result result={{result: "凶"}} />)
    const resultElement = screen.getByText("凶")
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveClass('text-black')
  })
})