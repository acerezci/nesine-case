import React from 'react';
import data from '../data/data.json';
import TableHeader from './table-header';
import '../styles/table.scss';
import TableItem from './table-item';

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
        const staticVariable = 4;
        const matchResult = {
          host: {
            rate: event.OCG[1].OC[0].O,
            mbs: event.OCG[1].OC[0].MBS,
            id: event.OCG[1].ID,
          },
          draw: {
            rate: event.OCG[1].OC[1].O,
            mbs: event.OCG[1].OC[1].MBS,
            id: event.OCG[1].ID,
          },
        };

        const lowerUpperResult = {
          lower: {
            rate: event.OCG[5].OC[25].O,
            mbs: event.OCG[5].OC[25].MBS,
            id: event.OCG[5].ID,
          },
          upper: {
            rate: event.OCG[5].OC[26].O,
            mbs: event.OCG[5].OC[26].MBS,
            id: event.OCG[5].ID,
          },
        };

        const doubleResult = {
          x1: {
            rate: event.OCG[2].OC[3].O,
            mbs: event.OCG[2].OC[3].MBS,
            id: event.OCG[2].ID,
          },
          x12: {
            rate: event.OCG[2].OC[4].O,
            mbs: event.OCG[2].OC[4].MBS,
            id: event.OCG[2].ID,
          },
          x2: {
            rate: event.OCG[2].OC[5].O,
            mbs: event.OCG[2].OC[5].MBS,
            id: event.OCG[2].ID,
          },
        };

        return (
          <React.Fragment key={`${event.NID}-${event.ESD}`}>
            <TableHeader title={`${event.D} ${event.DAY} ${event.LN}`} index={index} />
            <TableItem
              matchCode={event.C}
              matchTime={event.T}
              matchInfo={event.N}
              staticVariable={staticVariable}
              matchResult={matchResult}
              lowerUpperResult={lowerUpperResult}
              doubleResult={doubleResult}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default React.memo(Table);
