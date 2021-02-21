describe('Ebay Products Search', () => {
    it('Should open the ebay url and verify the title', () => {
        browser.url('https://do.ebay.com/');
        expect(browser).toHaveTitle(
            'Artículos electrónicos, autos, ropa, objetos de colección, cupones y más | eBay'
        );
    });

    it('Should search for a product and verify the search text value.', () => {
        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchInput.addValue('Laptop');
        searchBtn.click();

        expect(searchInput).toHaveValue('Laptop');
    });

    it('Should redirect to a new page and verify the title value.', () => {
        expect(browser).toHaveTitle('Laptop | eBay');
    });

    it('Should update the search category', () => {
        const categorySelect = $('#gh-cat option:nth-child(1)');
        expect(categorySelect).toHaveText('Computadoras portátiles o laptops y netbooks');
    })
});
