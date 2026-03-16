const Pizza = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement('h1', {}, props.name),
            React.createElement('p', {}, props.description),
        ]
    );
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement('h1', {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: 'Pepperoni Pizza',
                description: 'Delicious pizza with pepperoni'
            }),
            React.createElement(Pizza, {
                name: 'Margherita Pizza',
                description: 'Delicious pizza with Margherita'
            }),
            React.createElement(Pizza, {
                name: 'Hawaiian Pizza',
                description: 'Delicious pizza with Hawaiian'
            }),
            React.createElement(Pizza, {
                name: 'Vegetarian Pizza',
                description: 'Delicious pizza with vegetarian'
            }),
            React.createElement(Pizza, {
                name: 'Meat Lover Pizza',
                description: 'Delicious pizza with meat lover'
            }),
            React.createElement(Pizza, {
                name: 'Seafood Pizza',
                description: 'Delicious pizza with seafood'
            }),
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));