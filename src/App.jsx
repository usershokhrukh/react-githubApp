import "./App.css";
const App = () => {
  return (
    <>
      <main className="main">
        <h2 className="title">GitHub Profile</h2>
        <img className="img" width="50%" src="https://avatars.githubusercontent.com/u/226058837?v=4" alt="" />
        <a target="_blank" href="https://github.com/usershokhrukh">
          <button className="button">Github</button>
        </a>
        <ul className="ul-main">
          <li className="list">
            repositories: <span className="list-span">72</span>
          </li>
          <li className="list">
            name: <span className="list-span">usershokhrukh</span>
          </li>
          <li className="list">
            github: <a href="https://github.com/usershokhrukh">usershokhrukh</a>
          </li>
           <li className="list">
            age: <span className="list-span">14</span>
          </li>
          <li className="list">
            friends in Github: <span className="friends">
              <ul>
                <li className="friends-list"><a href="https://github.com/Hasan-git-hub">Hasan-git-hub</a></li>
                <li className="friends-list"><a href="https://github.com/sarvaribrokhimov001">sarvaribrokhimov001</a></li>
                <li className="friends-list"><a href="https://github.com/elyorcoder">elyorcoder</a></li>
                <li className="friends-list"><a href="https://github.com/sunnatabdullaew-jpg">sunnatabdullaew-jpg</a></li>
                <li className="friends-list"><a href="https://github.com/Yusuf-AI2011">Yusuf-AI2011</a></li>
                <li className="friends-list"><a href="https://github.com/Itoshirino">Itoshirino</a></li>
              </ul>
            </span>
          </li>
        </ul>
        <div className="repos">
          <div className="repos-item">
              <h2>Admin Panel</h2>
              <p className="visit">visit: <a target="_blank" href="https://github.com/usershokhrukh/admin-panel">usershokhrukh/admin-panel</a></p>
          </div>
          <div className="repos-item">
              <h2>Github Api</h2>
              <p className="visit">visit: <a target="_blank" href="https://github.com/usershokhrukh/github-API">usershokhrukh/github-API</a></p>
          </div>
          <div className="repos-item">
              <h2>Univer</h2>
              <p className="visit">visit: <a target="_blank" href="https://github.com/usershokhrukh/univer">usershokhrukh/univer</a></p>
          </div>
          <div className="repos-item">
              <h2>Admin Panel real Api</h2>
              <p className="visit">visit: <a target="_blank" href="https://github.com/usershokhrukh/admin-panel-realAPI">usershokhrukh/admin-panel-realAPI</a></p>
          </div>
          <div className="repos-item">
              <h2>Random User</h2>
              <p className="visit">visit: <a target="_blank" href="https://github.com/usershokhrukh/randomUser">usershokhrukh/randomUser</a></p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;