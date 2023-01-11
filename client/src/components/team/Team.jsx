// ----- IMPORT IMAGES ----
import ariImg from "../../assets/images/ari.jpg";
import kariImg from "../../assets/images/kari.jpg";
import lauImg from "../../assets/images/lau.jpg";
import santiImg from "../../assets/images/santi.jpg";
import gastonImg from '../../assets/images/gaston.jpg'
import martiImg from '../../assets/images/marti.jpg'
import Card from "./Card";

import style from "./styles/team.module.css";

const Team = () => {
  const ari = {
    name: "Ariel Duce Bemez",
    image: ariImg,
    // position: "Co-founder",
    rol: "Communication scientist",
    username: "@Adbmez",
  };

  // const kari = {
  //     name: 'KARI',
  //     image: kariImg,
  //     position: 'Co-founder',
  //     username: '@SoyKrypto'
  // }

  const lau = {
    name: "Lautaro Mansilla",
    image: lauImg,
    // position: "Co-founder",
    rol: "Fullstak Developer",
    username: "@Laumansillaa",
  };

  const santi = {
    name: "Santiago Silva",
    image: santiImg,
    // position: "Co-founder",
    rol: "Blockchain development advisor",
    username: "@Sansildev",
  };

  const gaston = {
    name: "Gastón Solis",
    image: gastonImg,
    rol: "Graphic Designer",
    username: "@Gritar",
  };

  const martina = {
    name: "Martina Mendoza",
    image: martiImg,
    rol: "Project Manager",
    username: "@Unfarol",
  };

  return (
    <div className={style.contTeam} id="team">
      <div className={style.contTitle}>
        <h1>EQUIPO</h1>
      </div>
      <div className={style.contCard}>
        <Card user={ari} />
        <Card user={lau} />
        <Card user={santi} />
        <Card user={martina} />
        <Card user={gaston} />
      </div>
    </div>
  );
};

export default Team;
