import React, { Component } from 'react';

export default class App extends React.Component {

    async componentDidMount() {

        try {

            await fetch ('https://webhook.site/7b4db931-e34a-40ae-85bd-ddbdd2279df2', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':  'application/json'
                },

                body: JSON.stringify({

                    name: 'John Cain',
                    contact: '1@gmail.com, 0455 555 555',   
                    info: 'www.a.com',
                    task: 'blah do this and that'
                })
            });
        } catch (e) {
            console.log(e);
        }

    }

    render () {
        return (
            <view></view>
        );
    }
}