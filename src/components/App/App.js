import React from 'react';
import axios from 'axios';

import GitForm from '../GitForm/GitForm';
import GitSearch from '../GitSearch/GitSearch';
import GitTable from '../GitTable/GitTable';

import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
        // Form Values to Cookie
        cookieShow: '',
        firstname: '',
        lastname: '',
        documentt: '',
        birth: '',
        email: '',
        user: '',
        // Search Repositories System
        query: '',
        repos: []
    };  
  }

  // ------------------ User Form and Cookies ------------------

  // Before mounting the component
  componentWillMount() {
    this.setState({ cookieShow: this.getCookie('form') })
  }

  // getCookie 
  getCookie (name) {
    var cookies = document.cookie && document.cookie.split(';')
    var data = cookies.map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith(name))
    var value = data.split('=')[1]
    return value
  }

  // Save form data
  onSaveForm = (event) => {
    // State destructuring
    let {firstname, lastname, documentt, birth, email, user} = this.state;
    let formValues = {firstname, lastname, documentt, birth, email, user}
    // Created cookie with name "form"

    const cookie = "form="+JSON.stringify(formValues);
    document.cookie = cookie;
    this.setState({ cookieShow: cookie });
    event.preventDefault();
  }

  // Change the input value 
  onChangeFirstName = (event) => {
    this.setState({
        firstname: event.target.value
    })
  }

  // Change the input value 
  /*onChangeBirth = (event) => {
    console.log(event._d)
    this.setState({
        birth: event._d
    })
  }*/

  // Change the input value 
  onChangeLastName = (event) => {
    this.setState({
        lastname: event.target.value
    })
  }

  // Change the input value 
  onChangeDocument = (event) => {
    this.setState({
        documentt: event.target.value
    })
  }

  // Change the input value 
  onChangeEmail = (event) => {
    this.setState({
        email: event.target.value
    })
  }

  // Change the input value 
  onChangeUser = (event) => {
    this.setState({
        user: event.target.value
    })
  }

  // ------------------ Search System ------------------

  getReposDataFromAPI = () => {
    // Search repos: https://developer.github.com/v3/search/#search-repositories
    axios.get(`https://api.github.com/search/repositories?q=${this.state.query}+user:${this.state.user}&order=desc`)
      .then(result => {
        //console.log(result.data.items)
        this.setState({
          repos: result.data.items
        });
      })
      .catch(err => {
        this.setState({
          repos: [],
        });
      });
  }  

  // Handle submit when button search is clicked (respositories)
  handleSearchFormSubmit = (searchFormValue) => {
    //console.log("search")
    this.setState({
        query: searchFormValue,
        repos: []
    }, this.getReposDataFromAPI);
  }

  // Show repos in GitTable
  renderSearch(){
    //console.log(this.state.repos)
    return this.state.repos.map((repo) => {
      //console.log(repo.name)
      return (
        repo
      );
    })
  }

  // ------------------ Render -> Show Components ------------------

  render (){
    return(
      <div className="container__principal">
        <h1>Git4n</h1>
        <div className="container__cookie__show">
          <p>🍪 {this.state.cookieShow} 🍪</p>
        </div>
        <div className="container__git__form">
          <GitForm
            onSubmit={this.onSaveForm}
            // First Name
            setFieldValueFirstName={this.state.firstname}
            onChangeFirstName={this.onChangeFirstName}
            // Last Name
            setFieldValueBirth={this.state.birth}
            onChangeBirth={this.onChangeBirth}
            // Last Name
            setFieldValueLastName={this.state.lastname}
            onChangeLastName={this.onChangeLastName}
            // Document
            setFieldValueDocument={this.state.documentt}
            onChangeDocument={this.onChangeDocument}
            // Email
            setFieldValueEmail={this.state.email}
            onChangeEmail={this.onChangeEmail}
            // User
            setFieldValueUser={this.state.user}
            onChangeUser={this.onChangeUser}
          />
        </div>
        <div>
          <GitSearch
            onSubmit={this.handleSearchFormSubmit}
          />
        </div>
        <div className="container__git__table">
          <GitTable 
            data={this.renderSearch()}/>
        </div>
      </div>
    )
  }
}

export default App;