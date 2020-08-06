import { element, by } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get radioButtonPlanets() {
        return element(by.id('planets'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    },
    get notFound() {
        return element(by.xpath("//*[contains(text(), 'Not found.')]"));
    },
    get firstCharacterGender() {
        //return element((by.className("col-sm-10")));
        return element((by.xpath("//*[contains(text(), 'Gender')]/following-sibling::div[1]")));
    },
    get firstCharacterBirthYear() {
        return element((by.xpath("//*[contains(text(), 'Birth year')]/following-sibling::div[1]")));
    },
    get firstCharacterEyeColor() {
        return element((by.xpath("//*[contains(text(), 'Eye color')]/following-sibling::div[1]")));
    },

    get firstPlanetPopulation() {
        return element((by.xpath("//*[contains(text(), 'Population')]/following-sibling::div[1]")));
    },
    get firstPlanetClimate() {
        return element((by.xpath("//*[contains(text(), 'Climate')]/following-sibling::div[1]")));
    },
    get firstPlanetGravity() {
        return element((by.xpath("//*[contains(text(), 'Gravity')]/following-sibling::div[1]")));
    }
};
