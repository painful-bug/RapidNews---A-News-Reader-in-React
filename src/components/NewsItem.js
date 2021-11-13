import React, { Component } from "react";
export default class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // darkMode: false,
    };
  }

  render() {
    let {
      title,
      description,
      urlToImage,
      newsUrl,
      author,
      publishedAt,
      darkMode,
    } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !urlToImage
                ? "data:image/jpeg;base64,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"
                : this.props.urlToImage
            }
            className="card-img-top"
            alt="..."
          />
            {console.log("from newsitem, darkmode : ",darkMode)}
          {
            darkMode === true ? (
              <div className="card-body bg-dark">
            <h5 className="card-title text-white">{title}</h5>
            <p className="card-text text-white">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
            <p className="card-text my-3 text-white">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toUTCString()}

                
              </small>
            </p>
          </div>
            ) : (
              <div className="card-body ">
              <h5 className="card-title ">{title}</h5>
              <p className="card-text">{description}</p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-dark"
              >
                Read More
              </a>
              <p className="card-text my-3">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(publishedAt).toUTCString()}
  
                  
                </small>
              </p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}
