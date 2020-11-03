const sel = require('../../data/selectors.json');


describe('Checking Main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create btn is clickable after 1-4 are filled in valid', function () {
            browser.url('');
            const name = $(sel.name).isEnabled();
            expect(name).toEqual(true);
        });

    });
});