import { render, screen } from '@testing-library/react'
import react from 'react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../pages/loginpage/Login'

test('check login component display input', () => {
    // use use expect() as condition to run test
    // check loging component
    // 1 render what you testing, use MemoryRoutes when using routes 
    // RTL
    render(<MemoryRouter><Login/></MemoryRouter>)

    let inputs : HTMLElement[] = screen.getAllByDisplayValue("input");

    // jest
    expect(inputs).toBeValid();
    
})

test('test2', () => {
    
})

test('test3', () => {
    
})

test('test4', () => {
    
})

test('test5', () => {
    
})