if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ReactListItem = createReactClass({

    render: function () {
        return React.createElement('li', null, this.props.container.dataset.value);
    }
    
});;

document.registerReact('react-list-item', window.LGI.ReactListItem);