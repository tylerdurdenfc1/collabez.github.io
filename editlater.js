import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount (){

        fetch ('https://webhook.site/7b4db931-e34a-40ae-85bd-ddbdd2279df2')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>loading...</div>;

        }

        else {

        return (
            <div className="App">
                Data has been loaded 

                <ul>
                    {items.map(item => (
                        <li key={item.id} >
                            Name: {item.name} | Contact: {item.email}


                        </li>
                    ))};
                </ul>
            </div>
        );

        }
    }
}

export default App;