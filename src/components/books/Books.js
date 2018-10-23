import React, { Component } from 'react';
import 'bulma/bulma.sass'
import './Books.css'

class Books extends Component {
  constructor(props) {
    super(props);
    this.key = process.env.REACT_APP_NY_TIMES_API_KEY;
    this.state = {ny_times_json: []};
  }

  componentDidMount() {
    let url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${this.key}`;
    // let headers = {'Authorization': `Bearer ${this.key}`};

    let options = {method: "GET"};
    console.log(options);

    fetch(url, options)
      .then((response) => {
        let json = response.json();
        return json;
      })
      .then(json => {
        for(let i in json.results) {
          try {
            // this.ny_times_json.push([json.results[i].title,json.results[i].multimedia[0].url]);
            this.displayResults([[json.results[i].title, json.results[i].multimedia[4].url, json.results[i].abstract, json.results[i].url ]]);
            console.log(this.ny_times_json);
          } catch(error) {
            console.log(error);
          }
        }
      })
  }

  displayResults(result) {
    this.setState({
      ny_times_json: this.state.ny_times_json.concat(result)
    });
  }

  render() {
    let books = this.state.ny_times_json;
    let cards = books.map(book => {
      let title = book[0];
      let image = book[1];
      let abstract = book[2];
      let url = book[3];
      return (
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={image}/>
                </figure>
              </div>
              <div className="card-content">
                <div className="card-header-title">
                  <p><a href={url} target="_blank">{title}</a></p>
                </div>
                <div className="content">{}</div>
              </div>
            </div>
          </div>
      )}
    );
    return (
      <div className="columns is-multiline">
        {cards}
      </div>
    )
      // <div>
      //   <div>{this.state.ny_times_json.length}</div>
      //   <div>{this.state.ny_times_json[0]}</div>
      //   <div>{this.state.ny_times_json[1]}</div>
      //   <div>{this.state.ny_times_json}</div>
      // </div>
    // );
  }
}

export default Books;
