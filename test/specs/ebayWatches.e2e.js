describe('Watches Page', () => {
    it('Should display banner container', () => {
        browser.url('https://do.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const pageHeader = $('h1.b-pageheader');
        expect(pageHeader).toBeDisplayed();
    });

    it('should show the header title', () => {
        const headerTitle = $('span.b-pageheader__text');
        expect(headerTitle).toHaveText('Relojes, piezas y accesorios');
    });

    it('should contain item named Relojes', () => {
        const itemTitle = $('p.b-guidancecard__title');
        expect(itemTitle).toHaveText('Relojes');
    });

    it('should contain link item and verify its clickable', () => {
        const itemButton = $('a.b-guidancecard__link');
        expect(itemButton).toHaveLinkContaining('/Watches/');
        expect(itemButton).toBeClickable();
    });

    it('should click on the item button and verify the new url', () => {
        const itemButton = $('a.b-guidancecard__link');
        itemButton.click();
        expect(browser).toHaveUrl('https://do.ebay.com/b/Watches/260325/bn_7117208191');
    });
});
