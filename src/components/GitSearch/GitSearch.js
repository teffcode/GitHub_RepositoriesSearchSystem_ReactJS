import React from 'react';
import { Form, Input, Button } from 'antd';

import 'antd/dist/antd.css';
import './GitSearch.css';

const Search = Input.Search;

class GitSearch extends React.Component {

    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    // Change input value
    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        // Call function props.onSubmit with the search input value
        this.props.onSubmit(this.state.searchQuery);

        // Reset state.searchQuery to ''
        this.setState({
            searchQuery: ''
        });
    }

    render() {

        return (
            <div>
                <Form 
                    onSubmit={this.handleOnSubmit} className="container__git__search">
                    <Search
                        type="search"
                        placeholder="Search repositories..."
                        value={this.state.searchQuery}
                        onChange={this.handleOnChange}
                        style={{width:'250px'}}
                    />                       
                </Form>
            </div>
        )
    }
}

export default GitSearch;