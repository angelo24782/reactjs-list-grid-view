import React, { useState, useEffect } from "react";
import axios from "axios";
import '../src/style/App.css';
import NavBar from './components/NavBar';
import BtnGroup from './components/BtnGroup';
import LayoutGridProfiles from './components/LayoutGridProfiles';
import LayoutListProfiles from './components/LayoutListProfiles';
import Footer from './components/Footer';

function App() {

  const [profiles, setProfiles] = useState([]);
  const [listOrGridView, setListOrGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [showScroll, setShowScroll] = useState(false)
  const [buttonListActive, setButtonListActive] = useState(true)
  const [buttonGridActive, setButtonGridActive] = useState(false)

  const handleList = () => {
    setButtonListActive(true)
    setButtonGridActive(false)
    setListOrGrid(true);

  }

  const handleGrid = () => {
    setButtonListActive(false)
    setButtonGridActive(true)
    setListOrGrid(false);
  };


  useEffect(() => {

    const profileData = async () => {
      try {
        //Pull 50 users using this API https://randomuser.me/api/
        const res = await axios.get("https://randomuser.me/api/?results=50");

        setProfiles(res.data.results.sort(function (a, b) {

          // Display the most recent users (last user on top), as a list view or as a grid view.
          return new Date(b.registered.date) - new Date(a.registered.date);
        }));


      } catch (error) {
        console.log(error);
      }
    };

    profileData();
  }, []);

  //Create an autocomplete input for filter the user list by FirstName
  useEffect(() => {
    setFilteredProfiles(
      profiles.filter((profile) =>
        profile.name.first.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, profiles]);

  //Create an autocomplete input for filter the user list by FirstName
  const filterUsers = async () => {
    const filteredProfiles = profiles.filter(profile => {
      return profile.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    setProfiles(filteredProfiles);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    filterUsers();
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  const ListProfiles = filteredProfiles.map((profile, idx) => (<LayoutListProfiles key={idx} {...profile} />))
  const GridProfiles = filteredProfiles.map((profile, idx) => (<LayoutGridProfiles key={idx} {...profile} />));


  return (
    <>
      <div id="top" className="container-fluid pl-0 pr-0">
        < NavBar />
        <div className="mt-5 container">
          <h2>Utenti</h2>
          <div className="containerSearchAndButton">
            <div className="mb-3">
              <form className="form-inline" onSubmit={onSubmitHandler}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            <div className="mb-3">
              <BtnGroup
                handleList={handleList}
                handleGrid={handleGrid}
                buttonListActive={buttonListActive}
                buttonGridActive={buttonGridActive}
              />
            </div>
          </div>
        </div>
        <div className="container">
          {
            listOrGridView === true ? <div className="row">{ListProfiles}</div> : <div className="row justify-content-around">{GridProfiles}</div>
          }
        </div>
        <Footer />
        <i className="fas fa-arrow-circle-up scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}></i>
      </div>

    </>
  );
}

export default App;
