import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ title, isFirstElement, index }) => (
  <div className={`table-item ${isFirstElement ? 'header' : ''}`}>
    <span className="title">
      {index !== undefined && <span className="index">{index}</span>}
      {title}
    </span>
    <span>Yorumlar</span>
    <span />
    <span>1</span>
    <span>x</span>
    <span>2</span>
    <span>Alt</span>
    <span>Üst</span>
    <span>H1</span>
    <span>1</span>
    <span>x</span>
    <span>2</span>
    <span>H-2</span>
    <span>1-X</span>
    <span>1-2</span>
    <span>X-2</span>
    <span>Var</span>
    <span>Yok</span>
    <span>+99</span>
  </div>
);

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isFirstElement: PropTypes.bool,
  index: PropTypes.string.isRequired,
};

TableHeader.defaultProps = {
  isFirstElement: false,
};

export default React.memo(TableHeader);
