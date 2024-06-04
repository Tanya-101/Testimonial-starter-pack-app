import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";

const Card = (props) => {
  let review = props.review;
  return (
    <div>
      <div>
        <img src={review.image}></img>
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <p><BiSolidQuoteLeft/></p>
      </div>

      <div>
        <p>{review.text}</p>
      </div>

      <div>
        <p><BiSolidQuoteRight/></p>
      </div>

      <div>
        <button>
          +
        </button>
        <button>
          *
        </button>
      </div>
      <button>Suprise me</button>

    </div>
  );
}

export default Card
