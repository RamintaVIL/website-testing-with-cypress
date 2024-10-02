// const pageUrl = "https://automationexercise.com"

// describe('Add products in chart functionality', () => {
//   beforeEach(() => {
//     cy.visit(pageUrl);
//   });

//   it('should let add product in chart', () => {
//     cy.get('body').should('be.visible');
//     cy.get("a[href='/products']").should("contain", "Products").click();
//     cy.get('.single-products').first().trigger('mouseover');
//     cy.get('.single-products .add-to-cart[data-product-id="1"]').click();

//     cy.get('.btn-success').contains('Continue Shopping').click();

//     // Step 7: Hover over second product and click 'Add to cart'
//     // cy.get('.single-products').first().trigger('mouseover');
//     // cy.get('.single-products .add-to-cart[data-product-id="1"]').click({ multiple: true });

//     cy.get('.single-products').first().trigger('mouseover').wait(500);
//     cy.get('.single-products .add-to-cart[data-product-id="1"]').then(($btn) => {
//       if ($btn.is(':visible')) {
//         cy.wrap($btn).click({ multiple: true });
//       }
//     });

//     // Step 8: Click 'View Cart' button
//     cy.get("a[href='/view_cart']").click();

//     // Step 9: Verify both products are added to Cart
//     cy.get('.cart_description').should('have.length', 2);

//     // Step 10: Verify their prices, quantity and total price
//     cy.get('.cart_price').eq(0).should('contain', 'Rs. 500');
//     cy.get('.cart_price').eq(1).should('contain', 'Rs. 400');
//     cy.get('.cart_quantity').eq(0).should('contain', '1');
//     cy.get('.cart_quantity').eq(1).should('contain', '1');
//     cy.get('.cart_total_price').eq(0).should('contain', 'Rs. 500');
//     cy.get('.cart_total_price').eq(1).should('contain', 'Rs. 400');
//   });
// });


