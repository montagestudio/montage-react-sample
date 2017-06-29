/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.startTimer();
        }
    },
    _currentDate: {
    	value: null,
    },
    currentDate: {
    	set: function (date) {
    		this._currentDate = date;
    		this.needDraw = true;

    		return date;
    	},
    	get: function () {
    		return this._currentDate;
    	}
    },
    _timer: {
    	value: null,
    },
    startTimer: {
    	value: function () {
    		var self = this;
    		clearInterval(this._timer);
    		this._timer = setInterval(function () {
    			self.currentDate = new Date();
    		})
    	}
    }
});
