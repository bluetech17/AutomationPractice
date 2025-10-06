const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript')
const TagHelperFile = require('../../test/helpers/helpers')
let Tag = new TagHelperFile()


 const ProductsCommands = {
    addToCart: function() {
        this
            .waitForElementVisible('@addToCartBtn', 5000, 'the cart button is visible')
            .click('@addToCartBtn');
       return this;
     },
     
     viewProductDetails: function() {
        this
            .waitForElementVisible('@viewFirstProductBtn', 10000, 'the button of first product is found')
            .click('@viewFirstProductBtn')
          //  browser.assert.urlEquals('https://www.automationexercise.com/product_details/1')
            .waitForElementPresent('@ladysBlueTop', 5000, 'blue product name is present')
            .waitForElementPresent('@topCategory', 5000, 'category is present')
            .waitForElementPresent('@topPrice', 5000, 'price is at 500')
            .waitForElementPresent('@topAvailability', 5000, 'top is available')
            .waitForElementPresent('@topCondition', 5000, 'top is new')
            .waitForElementPresent('@topBrand', 5000, 'Brand is polo')

            return this;
     },

    };

module.exports = {
    elements: {
        addToCartBtn: {
            selector: "*[class='btn btn-default add-to-cart']",
            index: 2,
        },
        continueShoppingBtn: Tag.Class('btn btn-success close-modal btn-block'),

        viewFirstProductBtn: {
            selector: Tag.Custom('href', '/product_details/1'),
            locateStrategy: 'css selector'
        },

        ladysBlueTop: {
            selector: Tag.Text('h2', 'Blue Top'),
            locateStrategy: 'xpath'
        },

        topCategory: {
            selector: Tag.Text('p', 'Category: Women > Tops'),
            locateStrategy: 'xpath'
        },
        topPrice: {
            selector: Tag.Text('span', 'Rs. 500'),
            locateStrategy: 'xpath'
        },

        topAvailability: {
            selector: Tag.ContainsText('p', 'In Stock'),
            locateStrategy: 'xpath'
        },

        topCondition: {
             selector: Tag.ContainsText('p', 'New'),
             locateStrategy: 'xpath'
        },
        topBrand: {
            selector: Tag.Text('b', 'Brand:'),
            locateStrategy: 'xpath'
        },
    },

    commands: [ProductsCommands]
};

