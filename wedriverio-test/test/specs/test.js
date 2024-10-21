import selectors from '../pageobjects/selectors';
import { clickWhenVisible, setValueAndVerify } from '../helper/utils';

describe('Dlubal Kariera search', () => {

    it('should open google search page', async () => {
        await browser.url(selectors.urls.google);
        await expect(browser).toHaveTitle(selectors.google.title);
    });

    it('should accept cookies on Google web page', async () => {
        const acceptButtonGoogle = await browser.$(selectors.google.acceptCookiesButton);
        await clickWhenVisible(acceptButtonGoogle);
    });

    it('should search Dlubal page in google search', async () => {
        const searchInput = await browser.$(selectors.google.searchInput);
        const searchButton = await browser.$(selectors.google.searchButton);
        await setValueAndVerify(searchInput, 'Dlubal');
        await clickWhenVisible(searchButton);
    });
    
    it('should open Dlubal web page', async () => {
        const dlubalLink = await browser.$(selectors.google.dlubalLink);
        await clickWhenVisible(dlubalLink);
    });

    it('should accept cookies on Dlubal web page', async () => {
		const acceptButtonDlubal = await $(selectors.dlubal.acceptCookiesButton);
        await clickWhenVisible(acceptButtonDlubal);
    });

    it('should open Dlubal - Kariera web page', async () => {
        const careerMenu = await $(selectors.dlubal.careerMenu);
		const careerLink = await $(selectors.dlubal.careerLink);
		await careerMenu.moveTo();
		await clickWhenVisible(careerLink);
        await expect(browser).toHaveUrl(selectors.urls.dlubalCareer);
    });

});
