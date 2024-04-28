/* most of the dynadynamic rendering functionalities dhouls be migrated to passwordManager indes js file*/
import "./index.css";
import { Component } from "react";

const colorRandommizer = (id) => {
  const colorArray = [
    "hex0b69ff",
    "hex94a3b8",
    "hexb6c3ca",
    "hex7683cb",
    "hexf59e0b",
    "hex10b981",
    "hexf97316",
    "hex14b8a6",
    "hexb91c1c",
  ];

  return colorArray[id % 9];
};

const PasswordItem = (props) => {
  const { website, password, username, id, onDelete, passwordmask } = props;

  return (
    <li className="password-listitem">
      <div className={`profile ${colorRandommizer(id)}`}>
        {website ? website[0].toUpperCase() : "N/A"}
      </div>
      <div className="password-item">
        <p className="website-display">{website}</p>
        <p className="username-display">{username}</p>
        {passwordmask ? (
          <p className="password-display">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="password"
            className="password-display"
          />
        )}
      </div>
      <div className="delete-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-button"
          onClick={() => {
            onDelete(id);
          }}
        />
      </div>
    </li>
  );
};

class YourPassword extends Component {
  state = {
    searchInput: "",
    showPassword: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      showPassword: false,
      passwordList: props.passwordList,
    };
  }

  deletePassword = (id) => {
    this.setState((prevState) => {
      let { passwordList } = prevState;
      return {
        ...prevState,
        passwordList: passwordList.filter((each) => each.id !== id),
        originalPasswordList: passwordList.filter((each) => each.id !== id),
      };
    });
  };

  filterPasswords = (event) => {
    const inputString = event.target.value;
    const { passwordList, originalPasswordList } = this.state;
    const filterString = inputString.toLowerCase();
    let filteredpasswordList;

    if (filterString === "") {
      this.setState({ passwordList: originalPasswordList });
    } else {
      if (passwordList.length !== 0) {
        filteredpasswordList = passwordList.filter((each) =>
          each.website.toLowerCase().includes(filterString)
        );
        this.setState({ passwordList: filteredpasswordList });
      } else {
        // test failed if user first typed gg and changed to g password list is not rendered
        filteredpasswordList = originalPasswordList.filter((each) =>
          each.website.toLowerCase().includes(filterString)
        );
        this.setState({ passwordList: filteredpasswordList });
      }
    }
  };

  showPassword = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      showPassword: event.target.checked,
    }));
    console.log(this.state);
  };

  render() {
    const { passwordList, showPassword } = this.state;

    return (
      <div className="password-manager-container">
        <nav className="navbar">
          <h1 className="yourpasswords">
            Your Passwords
            <span className="passwords-count">
              {passwordList !== undefined ? " " + passwordList.length : "0"}
            </span>{" "}
          </h1>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={this.filterPasswords}
            ></input>
          </div>
        </nav>
        <div className="password-viewer">
          <div className="show-password-checkbox">
            <input
              type="checkbox"
              id="showPassoword"
              onChange={this.showPassword}
            />
            <label for="#showPassoword">Show passwords</label>
          </div>
          <ul className="password-list">
            {passwordList && passwordList.length ? (
              passwordList.map((eachItem) => {
                const { website, username, id, password } = eachItem;
                // console.log(eachItem);  checking data pipeline
                return (
                  <PasswordItem
                    website={website}
                    username={username}
                    id={id}
                    onDelete={this.deletePassword}
                    passwordmask={showPassword}
                    password={password}
                  />
                );
              })
            ) : (
              <div className="no-password-viewer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password"
                />
                <p className="no-password-text">No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default YourPassword;
