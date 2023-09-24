import { useState, useEffect } from "react";
import Astrateamcards from "../Components/Astrateamcards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import "../Styles/cards.css";
import millen from "../assets/millennia.png";
import sol from "../assets/SOL.png";
import hlx from "../assets/helix.png";
import prs from "../assets/polaris.png";
import tbanner from "../assets/Astraeus.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { appSettings } from "../Appdata/appdata";

const ValorantTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const group = async () => {
      const data = await axios.get(`${appSettings.teams}`);
      // console.log(data.data);
      setTeams(data.data);
    };
    group();
  }, []);

  return (
    <div className="Vwrapper">
      <Navbar banner={tbanner} />
      <div className="ast-header-cont">
        <p className="team-header"> AST TEAMS</p>
      </div>
      <div className="l-container">
        {/* FOR MAP */}
        {teams.map((team) => (
          <div key={team.teamLogoURL}>
            <Link to="/team">
              <Astrateamcards teamlogo={team.teamLogoURL} tname="Millennia" />
            </Link>
          </div>
        ))}

        {/* FOR UI OUTPUT REFERENCE ONLY */}
        {/* <Astrateamcards teamlogo={teams[0].teamLogoURL} tname="Millennia" /> */}
        {/* <Astrateamcards teamlogo={millen} tname="Millennia" />
        <Astrateamcards teamlogo={hlx} tname="Millennia" />
        <Astrateamcards teamlogo={prs} tname="Millennia" /> */}
      </div>
      <Footer />
    </div>
  );
};
export default ValorantTeam;
