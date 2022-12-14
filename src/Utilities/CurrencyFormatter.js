const currencyFormat = new Intl.NumberFormat('se-sv', { currency: 'SEK', style: 'currency' })

export const currencyFormatter = (value) => {
    return currencyFormat.format(value)
}