import "./index.css";

const InputBoxItem = (props) => {
  const { name, placeholder, imageUrl, type = "text", alt, onchange } = props;
  return (
    <li className="input-container">
      <img src={imageUrl} alt={alt} className="input-image" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input-field"
        onChange={onchange} // this function should come from class component
      />
    </li>
  );
};

const PasswordInputbox = (props) => {
  return (
    <div className="inputbox-container">
      <div className="image-container-small">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password image"
          className="image"
        />
      </div>
      <div className="inputdetails-container">
        <h1 className="inputbox-heading">Add new Password</h1>
        <ul>
          <InputBoxItem
            name="Website"
            placeholder="Enter Website"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          />
          <InputBoxItem
            name="Username"
            placeholder="Enter Username"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          />
          <InputBoxItem
            name="Password"
            placeholder="Enter Password"
            imageUrl="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            type="password"
            alt="password"
          />
        </ul>
        <div className="inputbox-button-container">
          <button className="inputbox-button">Add</button>
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
  );
};

export default PasswordInputbox;