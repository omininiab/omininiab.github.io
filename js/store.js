/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "ominini.myshopify.com",
      storefrontAccessToken: "2792609daf9b1251ad64815bb7e58406",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("collection", {
        id: "270260437186",
        node: document.getElementById("collection-component-1624853562575"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(50% - 40px)",
                  "margin-left": "40px",
                  "margin-bottom": "50px",
                  width: "calc(50% - 40px)",
                },
                img: {
                  height: "calc(100% - 15px)",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                },
                imgWrapper: {
                  "padding-top": "calc(75% + 15px)",
                  position: "relative",
                  height: "0",
                },
              },
              title: {
                "font-family": "Roboto, sans-serif",
              },
              button: {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#000000",
                },
                "background-color": "#000000",
                ":focus": {
                  "background-color": "#000000",
                },
              },
              price: {
                "font-family": "Roboto, sans-serif",
              },
              compareAt: {
                "font-family": "Roboto, sans-serif",
              },
              unitPrice: {
                "font-family": "Roboto, sans-serif",
              },
            },
            contents: {
              button: false,
              buttonWithQuantity: true,
            },
            text: {
              button: "Add to Cart",
            },
            googleFonts: ["Roboto"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-40px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#000000",
                },
                "background-color": "#000000",
                ":focus": {
                  "background-color": "#000000",
                },
              },
              title: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                color: "#4c4c4c",
              },
              price: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                color: "#4c4c4c",
              },
              compareAt: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              unitPrice: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
            },
            googleFonts: ["Roboto"],
            text: {
              button: "Add to cart",
            },
          },
          option: {
            styles: {
              label: {
                "font-family": "Roboto, sans-serif",
              },
              select: {
                "font-family": "Roboto, sans-serif",
              },
            },
            googleFonts: ["Roboto"],
          },
          cart: {
            styles: {
              button: {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#000000",
                },
                "background-color": "#000000",
                ":focus": {
                  "background-color": "#000000",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
            googleFonts: ["Roboto"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
            },
            googleFonts: ["Roboto"],
          },
        },
      });
    });
  }
})();
/*]]>*/
