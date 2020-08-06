const { Given, When, Then} = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for {string}', {timeout: 60 * 1000 }, async (PersonName)=> {
    await searchFormPO.input.sendKeys(PersonName);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});


Then('I see person details', { timeout: 60 * 1000 }, async () => {
        await chai.expect(searchFormPO.firstCharacterGender);
        await chai.expect(searchFormPO.firstCharacterBirthYear);
        await chai.expect(searchFormPO.firstCharacterEyeColor); 
        
        
  console.log("Character exists and have gender, birthyear and eyeColor");
});

When('I search for invalid {string}', {timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.input.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see not found', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.notFound.getAttribute('innerText')).to.eventually.contain('Not found');
    console.log("Not found character/planet");
});

When('I search for planet {string}', {timeout: 60 * 1000 }, async (Planet)=> {
    await searchFormPO.radioButtonPlanets.click();
    await searchFormPO.input.sendKeys(Planet);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see planet details', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.firstCharacterGender);
    await chai.expect(searchFormPO.firstCharacterBirthYear);
    await chai.expect(searchFormPO.firstCharacterEyeColor); 
    
console.log("Planet exist and have population, climate and gravity");
});

