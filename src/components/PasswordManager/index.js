import { Component } from 'react'

import PasswordInputbox from '../PasswordInputbox'
import YourPassword from '../YourPassword'

import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    passwordList: [],
    originalPasswordList: [],
  }

  componentDidMount() {
    // Store the original list when the component mounts

    const { passwordList } = this.state
    this.setState((prevSate) => ({
      ...this.prevSate,
      originalPasswordList: passwordList,
    }))
  }

  deletePassword = (id) => {
    this.setState((prevState) => {
      const { passwordList } = prevState
      return {
        ...prevState,
        passwordList: passwordList.filter((each) => each.id !== id),
        originalPasswordList: passwordList.filter((each) => each.id !== id),
      }
    })
  }

  submitForm = async (event) => {
    event.preventDefault()
    const { website, userName, password, passwordList } = this.state
    const newPassword = {
      id: passwordList.length, // Assuming id is based on the current length
      website,
      userName,
      password,
    }
    // console.log(newPassword);
    // console.log(this.state);
    await this.setState((prevState) => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      userName: '',
      password: '',
    }))
    const inputTags = [...document.getElementsByTagName('input')]
    inputTags.forEach((element) => {
      if (
        element.name.includes('website') ||
        element.name.includes('userName') ||
        element.name.includes('password')
      ) {
        element.setAttribute('value', '')
      }
    })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value);
    this.setState({
      [name]: value,
    })
    // console.log(this.state)
  }

  filterPasswords = (event) => {
    const inputString = event.target.value
    const { passwordList, originalPasswordList } = this.state
    const filterString = inputString.toLowerCase()
    let filteredpasswordList

    this.setState((prevSate) => ({
      originalPasswordList: passwordList,
    }))

    if (filterString === '') {
      this.setState({ passwordList: originalPasswordList })
    } else {
      if (passwordList.length !== 0) {
        filteredpasswordList = passwordList.filter((each) =>
          each.website.toLowerCase().includes(filterString)
        )
        this.setState((prevState) => ({
          passwordList: filteredpasswordList,
        }))
      } else {
        // test failed if user first typed gg and changed to g password list is not rendered now fixed
        filteredpasswordList = originalPasswordList.filter((each) =>
          each.website.toLowerCase().includes(filterString)
        )
        this.setState({ passwordList: filteredpasswordList })
      }
    }
  }

  render() {
    // console.log(this.state.passwordList); // Debugging line
    const { passwordList, website, userName, password } = this.state
    return (
      <div className="main-container">
        <form onSubmit={this.submitForm} className="main-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="password-manager-image"
          />
          <PasswordInputbox
            onChange={this.handleInputChange}
            website={website}
            userName={userName}
            password={password}
          />
          <YourPassword
            passwordList={passwordList}
            onDelete={this.deletePassword}
            filterPasswords={this.filterPasswords}
          />
        </form>
      </div>
    )
  }
}

export default PasswordManager
