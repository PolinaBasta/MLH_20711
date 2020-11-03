const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('Inputs', function () { //define suite title by passing a string

    describe('Inputs are displayed', function () { //define sub-suite title by passing a string

        it('TC-014 Name field is dispalyed ', function () { //define test title by passing a string
            browser.url(''); //open baseUrl
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-015 Gender field He is present', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender field She is present', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender field It is present', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });


        it('TC-018 Age field It is present', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story field is present', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Submit button is dispalyed', function () {
            const submit = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });


    });

    describe('Placeholders are correct', function () {

    });
    });




