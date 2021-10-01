/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-keyword-prefix */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import '../styles/ItemModal.css';

// const fadeHeight = 100;

export default function ItemModal({
  className,
  src,
  id,
  name,
  url,
  premiered,
  runtime,
  summary,
  type,
  genres,
  rating,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="modal__button" onClick={handleShow}>
        <img
          className={className}
          key={id}
          src={src}
          alt={name}
          loading="lazy"
          // style={{ backgroundImage: `url(${src})` }}
        />
      </button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
        <div
          className="modal__image"
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="modal-img--fadeBottom" />
        </div>
        {/* </Modal.Header> */}
        <Modal.Body>
          <Modal.Title>{name}</Modal.Title>
          <a href={url} target="_blank" rel="noreferrer">
            <button type="button" className="banner__button">
              Play
            </button>
          </a>
          <button type="button" className="banner__button">
            My List
          </button>
          <p>
            <span className="tags-title">Premiered: </span>
            {premiered}
          </p>
          <p>{runtime} min</p>
          <p>{summary}</p>
          <p>
            <span className="tags-title">Type: </span>
            {type}
          </p>
          <p>
            <span className="tags-title">Genres: </span>
            {genres}
          </p>
          <p>
            <span className="tags-title">Rating: </span>
            {rating}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ItemModal.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  premiered: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  summary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

ItemModal.defaultProps = {
  runtime: 60,
  rating: 6,
};
