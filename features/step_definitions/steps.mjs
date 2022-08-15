import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  this.temp2Convert = temp2Convert;
});

Given("I have non-numerical input", () => {});

When("I convert it to degrees {units}", function (units) {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I get/see {float}° {units}", function (expectedTemp, _) {
  const expectHelper = () => {
    expect(this.convertedTemp).toEqual(expectedTemp.toString());
  };

  expectHelper();
});

Then('I "see" a blank string', function () {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe("");
  };

  expectHelper();
});
