/**
 * @module ui/hello-world.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorld
 * @extends Component
 */
exports.HelloWorld = Component.specialize(/** @lends HelloWorld# */ {

    defaultName: {
        value: "World"
    },

    name: {
        value: null
    },

    constructor: {
        value: function () {
            this.super();
            this.name = this.defaultName;
        }
    },

    handleButtonAction: {
        value: function () {
            this.name = this.name == this.defaultName ?
                "Montage" : this.defaultName;
        }
    }
    
});
