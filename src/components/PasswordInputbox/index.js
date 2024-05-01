import './index.css'

const InputBoxItem = (props) => {
  const {
    name,
    placeholder,
    imageUrl,
    type = 'text',
    alt,
    onchange,
    value,
  } = props
  return (
    <li className="input-container">
      <img src={imageUrl} alt={alt} className="input-image" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input-field"
        onChange={onchange} // this function should come from class component
        value={value}
      />
    </li>
  )
}

const PasswordInputbox = (props) => {
  const { onChange, website, userName, password } = props
  return (
    <div className="inputbox-container">
      <div className="image-container-small">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="enter passwords"
          className="image"
        />
      </div>
      <div className="inputdetails-container">
        <h1 className="inputbox-heading">Add new Password</h1>
        <ul>
          <InputBoxItem
            name="website"
            placeholder="Enter Website"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            onchange={onChange}
            value={website}
          />
          <InputBoxItem
            name="userName"
            placeholder="Enter Username"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            onchange={onChange}
            value={userName}
          />
          <InputBoxItem
            name="password"
            placeholder="Enter Password"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            type="password"
            alt="password"
            onchange={onChange}
            value={password}
          />
        </ul>
        <div className="inputbox-button-container">
          <button className="inputbox-button" type="submit">
            Add
          </button>
        </div>
      </div>
      <div className="image-container-large">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="image"
        />
      </div>
    </div>
  )
}

export default PasswordInputbox
