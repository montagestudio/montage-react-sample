if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ReactBindings = createReactClass({

    resetRange: function () {
        this.props.container.dataset.value = 0;
    },

    render: function () {
        var _this = this;

        return React.createElement('div', null, 
            React.createElement(
                "p",
                null,
                "How many likes React? : ",
                this.props.value
            ),
            React.createElement(
                "button",
                {
                    onClick: function onClick(e) {
                        return _this.resetRange(e);
                    }
                },
                "Reset Counter"
            )
        );
    }

});

document.registerReact('react-bindings', window.LGI.ReactBindings);
