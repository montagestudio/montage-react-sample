/**
 * @module ui/hello-world.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorld
 * @extends Component
 */
exports.HelloWorld = Component.specialize(/** @lends HelloWorld# */ {
    
    defaultMessage: {
        value: "Hello World!"
    },

    message: {
        value: null
    },

    constructor: {
        value: function () {
            this.super();

            this.message = this.defaultMessage;
        }
    },

    handleButtonAction: {
        value: function handleButtonAction() {
            this.message = this.message == this.defaultMessage ?
                "Hello Montage! ;)" : this.defaultMessage;
        }
    }
});
