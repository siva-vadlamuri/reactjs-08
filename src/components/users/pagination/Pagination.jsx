import React, { Component } from "react";
import loader from "../../../assets/loader.gif";

export default class Pagination extends Component {
  state = {
    usersData: [],
    pageNumber: 0,
  };

  getUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    this.setState({ usersData: data });
  };

  componentDidMount() {
    this.getUsersData();
  }

  handleButtonClick = (num) => {
    this.setState({ pageNumber: num, usersData: [] });
  };
  //   componentDidUpdate will called every time when the state is updated
  //   updated
  componentDidUpdate(prevsProps, prevsState) {
    //   0-1
    if (this.state.pageNumber !== prevsState.pageNumber) {
      this.getUsersData();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.usersData && this.state.usersData.length > 0 ? (
          <div>
            <div className="container mt-4">
              <div className="row">
                {this.state.usersData.map((user) => (
                  <div key={user.id} className="col-md-6 mt-3">
                    <div className="card p-5">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={user.picture}
                            alt={user.firstName}
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <p>Id:{user.id}</p>
                            <strong>
                              {user.title} {user.firstName}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <img src={loader} alt="loader" />
        )}
        {/* All the pagination buttons */}
        <div className="container mt-3">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              onClick={() => {
                this.handleButtonClick(num);
              }}
              className="btn btn-primary ml-1"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
