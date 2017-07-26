if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ReactHelloWorld = createReactClass({

    render: function () {
        return React.createElement('div',  null, `Hello ${this.props.name}!`);
    }
    
});;

document.registerReact('react-hello-world', window.LGI.ReactHelloWorld);