const HomePage = require("../pageobjects/homePage");
const expect = require("chai").expect;
const fs = require("fs");
const path = require("path");
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./../testData/messages.json"), {
    encoding: "utf8",
  })
);

describe("Loan Calculator", () => {
  const homePage = new HomePage();

  it("Calculate the Loan Amount", async () => {
    await browser.maximizeWindow();
    await homePage.open();
    await browser.pause(5000);

    let heading = await homePage.getHeadingText();
    expect(heading).to.equal(data.heading);

    await (await homePage.annualIncomeBeforeTax()).scrollIntoView();
    await homePage.selectApplicationTypeSingle();
    await homePage.selectNumberOfDependents(0);
    await homePage.selectBuyHomeToLive();
    await homePage.setAnnualIncome(80000);
    await homePage.setAnnualOtherIncome(10000);
    await homePage.setMonthlyLivingExpenses(500);
    await homePage.setHomeLoanMonthlyRepayments(0);
    await homePage.setOhterLoanMonthlyRepayments(100);
    await homePage.setOhterMonthlycommitments(0);
    await homePage.setCreditCardLimit(10000);
    await homePage.selectBorrowCalculator();

    let amount = await homePage.getBorrowAmount();
    expect(amount).to.equal("$479,000");
  });

  it("Clear the forms", async () => {
    expect(await homePage.checkStartOver()).to.equal(true);
    await homePage.selectStartOver();
    await browser.pause(2000);
    let amount = await homePage.getAnnualIncomeBeforeTax();
    expect(amount).to.equal("");
  });

  it("Validate Error Text", async () => {
    await browser.refresh();
    await homePage.setMonthlyLivingExpenses(1);
    await browser.pause(5000);
    await homePage.selectBorrowCalculator();
    let error = await homePage.getErrorText();
    await console.log(error);
    await browser.pause(5000);
    expect(error.replace(/\s+/g, "")).to.equal(data.error.replace(/\s+/g, ""));
  });
});

