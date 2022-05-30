const Page = require('./page');

const SELECTORS = {
    HEADING: '.hero__heading',
    APPLICATIONTYPESINGLE: '#application_type_single',
    APPLICATIONTYPEJOINT: '#application_type_joint',
    NUMBEROFDEPENDENTS: "select[title='Number of dependants'] option",
    BUYHOME: '#borrow_type_home',
    BUYRESIDENTIALINVESTMENT: '#borrow_type_investment',
    ANNUALINCOMEBEFORETAX : "//div[*[contains(text(),'annual income (before tax)')]]/div/input",
    ANNUALOTHERINCOME: "//div[*[contains(text(),'Your annual other income (optional)')]]/div/input",
    LIVINGEXPENSES: '#expenses',
    HOMELOANS: '#homeloans',
    OTHERLOANS: '#otherloans',
    OHTERCOMMITMENTS: "//div[*[contains(text(),'Other monthly commitments')]]/div/input",
    CARDLIMIT: "//div[*[contains(text(),'Total credit card limits')]]/div/input",
    BORROWaMOUNT: '#borrowResultTextAmount',
    CALCULATOR: '#btnBorrowCalculater',
    STARTOVER: '.borrow__result__action .result__restart',
    ERRORTEXT: '.borrow__error__text'

}
class HomePage extends Page {

  open() {
    return super.open("personal/home-loans/calculators-tools/much-borrow/");
  }
    
  async getHeadingText() {
    return await (await $(SELECTORS.HEADING)).getText();
  }

  async selectNumberOfDependents(num) {
    let dropdown = await $$(SELECTORS.NUMBEROFDEPENDENTS);
    dropdown.forEach(async (elem) => {
      let txt = await elem.getText();
      if (txt === String(num)) {
        await (await $(elem)).click();
      }
    });
  }

  async annualIncomeBeforeTax() {
    return await $(SELECTORS.ANNUALINCOMEBEFORETAX);
  }

  async setAnnualIncomeBeforeTax(text) {
    await (await $(SELECTORS.ANNUALINCOMEBEFORETAX)).setValue(text);
  }

  async selectApplicationTypeSingle() {
    await (await $(SELECTORS.APPLICATIONTYPESINGLE)).click();
  }

  async selectBuyHomeToLive() {
    await (await $(SELECTORS.BUYHOME)).click();
  }

  async setAnnualIncome(num) {
    await (await $(SELECTORS.ANNUALINCOMEBEFORETAX)).setValue(num);
  }

  async setAnnualOtherIncome(num) {
    await (await $(SELECTORS.ANNUALOTHERINCOME)).setValue(num);
  }

  async setMonthlyLivingExpenses(num) {
    await (await $(SELECTORS.LIVINGEXPENSES)).setValue(num);
  }

  async setHomeLoanMonthlyRepayments(num) {
    await (await $(SELECTORS.HOMELOANS)).setValue(num);
  }

  async setOhterLoanMonthlyRepayments(num) {
    await (await $(SELECTORS.OTHERLOANS)).setValue(num);
  }

  async setOhterMonthlycommitments(num) {
    await (await $(SELECTORS.OHTERCOMMITMENTS)).setValue(num);
  }

  async setCreditCardLimit(num) {
    await (await $(SELECTORS.CARDLIMIT)).setValue(num);
  }

  async selectBorrowCalculator() {
    await (await $(SELECTORS.CALCULATOR)).click();
  }

  async getBorrowAmount() {
    return await (await $(SELECTORS.BORROWaMOUNT)).getText();
  }

  async checkStartOver() {
    return await (await $(SELECTORS.STARTOVER)).isDisplayed();
  }

  async selectStartOver() {
    await (await $(SELECTORS.STARTOVER)).click();
  }

  async getAnnualIncomeBeforeTax() {
    return await (await $(SELECTORS.ANNUALINCOMEBEFORETAX)).getText();
  }

  async getErrorText() {
    return await (await $(SELECTORS.ERRORTEXT)).getText();
  }

}

module.exports = HomePage;

