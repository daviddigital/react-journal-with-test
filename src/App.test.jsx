import App from './App'
import '@testing-library/jest-dom' 
import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('App component tests', () => {
    it('shows the journal heading', () => {
        render(<App />)
        expect(screen.getByRole('heading', { name: 'Journal' })).toBeInTheDocument()
        // expect(screen.getByText('Journal')).toBeInTheDocument()
    })

    it('shows CategorySelection component when button clicked', () => {
        render(<App />)
        userEvent.click(screen.getByRole('button')) 
        expect(screen.getByRole('heading', { name: 'Please select a category' })).toBeInTheDocument()
    })
})
