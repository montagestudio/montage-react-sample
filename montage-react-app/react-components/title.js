if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ReactTitle = createReactClass({

    render: function () {
        return React.createElement('i', null, 'but not only...');
    }
    
});;

document.registerReact('react-title', window.LGI.ReactTitle);