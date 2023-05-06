import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomeItem = (props) => {
  const { crypto } = props;

  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  return (
    <li className="list-Item">
      <div className="home-Item" id={id}>
        <div className="home-item-img">
          <Link to={`/details/${id}`}>
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="home-item-inf">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="sym">{symbol}</p>
          <p>
            $
            {price}
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <FaArrowRight className="font-Icon" />
        </Link>
      </div>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;
