import img5 from "../assets/ishihara/ishihara_5.png";
import img51 from "../assets/ishihara/ishihara_5-1.png";
import img6 from "../assets/ishihara/ishihara_6.png";
import img8 from "../assets/ishihara/ishihara_8.png";
import img12 from "../assets/ishihara/ishihara_12.png";
import img29 from "../assets/ishihara/ishihara_29.png";

const ishiharaData = [
  {
    id: 1,
    image: img5,
    correct: "5",
    options: ["5", "6", "8"]
  },
  {
    id: 2,
    image: img51,
    correct: "5",
    options: ["5", "12", "29"]
  },
  {
    id: 3,
    image: img6,
    correct: "6",
    options: ["6", "8", "12"]
  },
  {
    id: 4,
    image: img8,
    correct: "8",
    options: ["8", "6", "12"]
  },
  {
    id: 5,
    image: img12,
    correct: "12",
    options: ["12", "5", "29"]
  },
  {
    id: 6,
    image: img29,
    correct: "29",
    options: ["29", "12", "5"]
  }
];

export default ishiharaData;
