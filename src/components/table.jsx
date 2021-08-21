/* eslint-disable react/prop-types */
import React from 'react';
import data from '../data/data.json';
import TableHeader from './table-header';
import '../styles/table.scss';

const events = Object.values(data.Events);

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const perPage = 50;

  const handleScroll = () => {
    const { innerHeight, pageYOffset } = window;
    const { offsetHeight } = document.body;

    if ((innerHeight + pageYOffset) >= offsetHeight) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="table-container">
      <TableHeader title={`Event Count:${events.length}`} isFirstElement />
      {events.slice(0, currentPage * perPage).map((event, index) => {
        console.log(event);
        const mbs = event.OCG[1].MBS;
        const matchResult = {
          hostRate: event.OCG[1].OC[0].O,
          drawRate: event.OCG[1].OC[1].O,
        };

        const lowerUpperResult = {
          lower: event.OCG[5].OC[25].O,
          upper: event.OCG[5].OC[26].O,
        };

        const doubleResult = {
          x1: event.OCG[2].OC[3].O,
          x12: event.OCG[2].OC[4].O,
          x2: event.OCG[2].OC[5].O,
        };

        return (
          <React.Fragment key={`${event.NID}-${event.ESD}`}>
            <TableHeader title={`${event.D} ${event.DAY} ${event.LN}`} index={index} />
            <div className="table-item">
              <span className="match-info">
                <span>{event.C}</span>
                <span>{event.T}</span>
                <span>{event.N}</span>
              </span>
              <span>Yorumlar</span>
              <span>{mbs}</span>
              <span>{matchResult.hostRate}</span>
              <span>{matchResult.drawRate}</span>
              <span />
              <span>{lowerUpperResult.lower}</span>
              <span>{lowerUpperResult.upper}</span>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span>{doubleResult.x1}</span>
              <span>{doubleResult.x12}</span>
              <span>{doubleResult.x2}</span>
              <span />
              <span />
              <span>3</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Table;
