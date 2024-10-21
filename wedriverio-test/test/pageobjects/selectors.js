const selectors = {
    urls: {
        google: 'https://www.google.com/',
        dlubalCareer: 'https://www.dlubal.com/cs/kariera/prace-u-dlubal-software/vase-kariera'
    },
    google: {
        title: 'Google',
        acceptCookiesButton: '//button[.//div[text()="Přijmout vše"]]',
        searchInput: '#APjFqb',
        searchButton: 'input[aria-label="Hledat Googlem"]',
		dlubalLink: 'a[href*="https://www.dlubal.com"] h3.LC20lb'
    },
    dlubal: {
        acceptCookiesButton: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
		careerMenu: 'div=Kariéra',
        careerLink: 'a=Kariéra ve společnosti Dlubal'
    }
};

export default selectors;
