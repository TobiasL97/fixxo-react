import { render, fireEvent } from '@testing-library/react'
import ProductDescription from '../Components/ProductDescription'

describe(ProductDescription, () => {

    it('description button should have the class `button-active` after being pressed', () => {

        const {  getByTestId, getByRole } = render(<ProductDescription />)
        const button = getByRole('button', {name: 'Description'})

        fireEvent.click(button)
        const value = getByTestId('descriptionButton')


        expect(value).toHaveClass(' button-active')    //Får inte mitt test att fungera

    }) 
})