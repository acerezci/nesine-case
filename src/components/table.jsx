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

  const addToCart = ({ rate, mbs, bType }, {
    matchInfo, matchYear, staticVariable,
  }) => {
    console.log({ rate });
    console.log({ mbs });
    console.log({ bType });
    console.log({ matchInfo });
    console.log({ matchYear });
    console.log({ staticVariable });
  };

  return (
    <div className="table-container">
      <TableHeader title={`Event Count:${events.length}`} isFirstElement />
      {events.slice(0, currentPage * perPage).map((event, index) => {
        const matchTime = event.T;
        const match = {
          matchInfo: event.N,
          matchYear: event.C,
          staticVariable: '4',
        };

        const matchResult = {
          host: {
            rate: event.OCG[1].OC[0].O,
            mbs: event.OCG[1].OC[0].MBS,
            bType: 'matchResult',
          },
          draw: {
            rate: event.OCG[1].OC[1].O,
            mbs: event.OCG[1].OC[1].MBS,
            bType: 'matchResult',
          },
        };

        const lowerUpperResult = {
          lower: {
            rate: event.OCG[5].OC[25].O,
            mbs: event.OCG[5].OC[25].MBS,
            bType: 'lowerUpperResult',
          },
          upper: {
            rate: event.OCG[5].OC[26].O,
            mbs: event.OCG[5].OC[26].MBS,
            bType: 'lowerUpperResult',
          },

        };

        const doubleResult = {
          x1: {
            rate: event.OCG[2].OC[3].O,
            mbs: event.OCG[2].OC[3].MBS,
            bType: 'doubleResult',
          },
          x12: {
            rate: event.OCG[2].OC[4].O,
            mbs: event.OCG[2].OC[4].MBS,
            bType: 'doubleResult',
          },
          x2: {
            rate: event.OCG[2].OC[5].O,
            mbs: event.OCG[2].OC[5].MBS,
            bType: 'doubleResult',
          },
        };

        return (
          <React.Fragment key={`${event.NID}-${event.ESD}`}>
            <TableHeader title={`${event.D} ${event.DAY} ${event.LN}`} index={index} />
            <div className="table-item">
              <span className="match-info">
                <span>{match.matchYear}</span>
                <span>{matchTime}</span>
                <span>{match.matchInfo}</span>
              </span>
              <span>Yorumlar</span>
              <span>{match.staticVariable}</span>
              <span onClick={() => addToCart(matchResult.host, match)} aria-hidden="true">
                {matchResult.host.rate}
              </span>
              <span onClick={() => addToCart(matchResult.draw, match)} aria-hidden="true">{matchResult.draw.rate}</span>
              <span />
              <span onClick={() => addToCart(lowerUpperResult.lower, match)} aria-hidden="true">{lowerUpperResult.lower.rate}</span>
              <span onClick={() => addToCart(lowerUpperResult.upper, match)} aria-hidden="true">{lowerUpperResult.upper.rate}</span>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span onClick={() => addToCart(doubleResult.x1, match)} aria-hidden="true">{doubleResult.x1.rate}</span>
              <span onClick={() => addToCart(doubleResult.x12, match)} aria-hidden="true">{doubleResult.x12.rate}</span>
              <span onClick={() => addToCart(doubleResult.x2, match)} aria-hidden="true">{doubleResult.x2.rate}</span>
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
