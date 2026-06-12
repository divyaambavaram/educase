function Account() {
  return (
    <div className="mobile-container">
      <div className="account-page">
        <h2>Account Settings</h2>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Account;