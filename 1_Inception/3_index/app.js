const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);
const heading = React.createElement(
    'h1',
    {
        class : "heading",
        id: "head"
    },
    'This is new React !!!'
)

root.render(heading)