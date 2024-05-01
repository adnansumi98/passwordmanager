import './index.css'
import { Component } from 'react'

const colorRandommizer = (id) => {
  const colorArray = [
    'hex0b69ff',
    'hex94a3b8',
    'hexb6c3ca',
    'hex7683cb',
    'hexf59e0b',
    'hex10b981',
    'hexf97316',
    'hex14b8a6',
    'hexb91c1c',
  ]

  return colorArray[id % 9]
}

const PasswordItem = (props) => {
  const { website, password, userName, id, onDelete, passwordmask } = props

  return (
    <li className="password-listitem" key={id}>
      <div className={`profile ${colorRandommizer(id)}`}>
        {website ? website[0].toUpperCase() : 'N/A'}
      </div>
      <div className="password-item">
        <p className="website-display">{website}</p>
        <p className="username-display">{userName}</p>
        {passwordmask ? (
          <p className="password-display">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password-display"
          />
        )}
      </div>
      <div className="delete-container">
        <button data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

class YourPassword extends Component {
  state = {
    searchInput: '',
    showPassword: false,
  }

  showPassword = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      showPassword: event.target.checked,
    }))
    // console.log(this.state);
  }

  render() {
    const { showPassword } = this.state
    const { passwordList, onDelete, filterPasswords } = this.props
    console.log(passwordList) // Should log the updated array

    return (
      <div className="password-manager-container">
        <nav className="navbar">
          <div className="password-heading-container">
            <h1 className="yourpasswords">Your Passwords</h1>
            <p className="passwords-count">
              {passwordList !== undefined ? passwordList.length : '0'}
            </p>{' '}
          </div>
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
              onChange={filterPasswords}
            />
          </div>
        </nav>
        <div className="password-viewer">
          <div className="show-password-checkbox">
            <input
              type="checkbox"
              id="showPassoword"
              onChange={this.showPassword}
            />
            <label htmlFor="showPassoword">Show passwords</label>
          </div>
          <ul className="password-list">
            {passwordList && passwordList.length ? (
              passwordList.map((eachItem) => {
                const { website, userName, id, password } = eachItem
                // console.log(eachItem); // checking data pipeline
                return (
                  <PasswordItem
                    website={website}
                    userName={userName}
                    id={id}
                    onDelete={() => onDelete(id)}
                    passwordmask={showPassword}
                    password={password}
                  />
                )
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
    )
  }
}

export default YourPassword
