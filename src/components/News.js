import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { Link } from "react-scroll/modules";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      disableNextButton: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37f2607dcff648e391b3d365742ebbc6`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(this.totalResults);
  }

  handlePrevClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      disableNextButton: false,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      Math.ceil(this.state.totalResults / this.props.pageSize) <
      this.state.page + 1
    ) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        disableNextButton: false,
        loading: false,
      });
    } else {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        disableNextButton: true,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3" id="news_starting">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            {/* <h2 className="text-center my-3">RapidNews</h2> */}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>

              <Link to="news_ending" smooth={true} duration={90}>
                <button type="button" className="btn btn-dark">
                  Jump to Bottom &darr;
                </button>
              </Link>

              <button
                disabled={this.state.disableNextButton}
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>

            <div className="row my-3">
              {this.state.articles.map((article) => {
                return (
                  <div className="col-md-3" key={article.url}>
                    <NewsItem
                      title={article.title}
                      description={article.description}
                      urlToImage={article.urlToImage}
                      newsUrl={article.url}
                      author={article.author}
                      source={article.source.name}
                      publishedAt={article.publishedAt}
                    />
                  </div>
                );
              })}
            </div>

            <div
              className="container d-flex justify-content-between"
              id="news_ending"
            >
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>

              <Link to="news_starting" smooth={true} duration={90}>
                <button type="button" className="btn btn-dark">
                  Jump to Top &uarr;
                </button>
              </Link>

              <button
                disabled={this.state.disableNextButton}
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
