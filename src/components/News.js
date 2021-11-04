import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  articles = [];
  constructor() {
    super();
    console.log("Hello I am the constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };


  handleNextClick = async () => {
    console.log("next")
    if(Math.ceil(this.state.totalResults/20)<this.state.page+1){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  };

  // handleDemoClick = () => {
  //   console.log("demo click working")
  // }
  render() {
    return (
      <div className="container my-3">
        <h2>RapidNews</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  urlToImage={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
          {/* <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleDemoClick}
          > */}
            {/* Next &rarr;
          </button> */}
        </div>
      </div>
    );
  }
}
