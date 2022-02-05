import React, { Component } from 'react';

class App extends Component {

    async postData() {

        try {
            
            let result = await fetch ('https://webhook.site/7b4db931-e34a-40ae-85bd-ddbdd2279df2', {
                method: 'post',
                mode: 'no-cors', 
                headers: {
                    'Accept':'applications/json',
                    'Content-type': 'applications/json',
                },

                body: JSON.stringify({
                    name: 'James',
                    contact: 'a@gmail.com, 0452 555 555',
                    info: 'apple.com',
                    task: 'blah blah blah'

                })
            });

            console.log(result)


        } catch (e) {
            console.log(e)
        }
        
    }

    render () {
        return (
            <div className="App">
                <button onClick={ () => this.postData () }>Press me to post some shit</button>
            </div>
        );
    }
}

export default App;