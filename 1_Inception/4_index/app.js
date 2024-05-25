const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);

{/* <div id = 'parent'>
    <div id = 'child'>
        <h1>
            ello
        </h1>
        <h2>
            ello
        </h2>
    </div>
</div> */}

const parent = React.createElement(
    'div', 
    { id: "parent" },
    React.createElement(
        'div', 
        { id: "child" },
        [
            React.createElement(
                'h1', 
                {},
                "ello"  
            ),
            React.createElement(
                'h2', 
                {},
                "gello"  
            )
        ]  
    )   
        
)

root.render(parent)