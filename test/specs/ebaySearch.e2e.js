describe('Ebay Products Search', () => {
    it('Should open the ebay url and verify the title', () => {
        browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle(
            'Artículos electrónicos, autos, ropa, objetos de colección, cupones y más | eBay'
        );
    })
});