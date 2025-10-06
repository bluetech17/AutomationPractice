const Pages = {
  ProductsPage: () => browser.page.ProductsPage()
};

describe('View Product Detials', function () {

    before(() => {
      products = Pages.ProductsPage();
    });

    specify('Preconditions', function (browser) {
        browser.url('https://www.automationexercise.com/products')
        products.waitForElementVisible('@addToCartBtn',5000)
        browser.assert.urlEquals('https://www.automationexercise.com/products');
    });   
    it('Command tests', function (browser) {
       products.viewProductDetails()


    })

    })