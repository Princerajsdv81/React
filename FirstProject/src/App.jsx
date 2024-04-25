import React  from 'react'
import Card from './Component/Props/Props1/Card'
import SRK from "./assets/Srk.jpeg"
import Hritik from "./assets/Hritik Raushan.jpeg"
import Thor from "./assets/Thor.jpeg"
function App() {

  const actor1 = {
    image:SRK,
    name: "Shah Rukh Khan",
    about: "Shah Rukh Khan, also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the 'Baadshah of Bollywood' and 'King Khan', he has appeared in more than 100 films, and earned numerous accolades, including 14 Filmfare Awards.",
    movies:[
      "Pathaan",
      "Jab Tak Hai Jaan",
      "Veer Zaara"
    ]
  };
  const actor2 = {
    image:Hritik,
    name: "Hrithik Roshan ",
    about: "Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfare Awards, of which four were for Best Actor.",
    movies:[
      "Krrish",
      "War",
      "Fighter"
    ]
  };
  const actor3 = {
    image:Thor,
    name: "Chris Hemsworth",
    about: "Chris Hemsworth is an Australian actor who came to fame for his role as Thor in several Marvel Cinematic Universe movies, beginning with Thor (2011)",
    movies:[
      "Thor",
      "The Avengers",
      "Men in black"
    ]
    }

  return (
    <>
      <Card detail={actor1} />
      <Card detail={actor2} />
      <Card detail={actor3} />

    </>
  );
}
export default App
