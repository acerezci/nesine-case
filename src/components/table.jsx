/* eslint-disable react/prop-types */
import React from 'react';
import { Events } from '../data/data.json';
import '../styles/table.scss';

const events = Object.values(Events);

const TableHeader = ({ title, isFirstElement = false, index }) => (
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
    <span>Ust</span>
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

const Table = () => (
  <>
    <TableHeader title={`Event Count:${events.length}`} isFirstElement />
    {events.slice(0, 55).map((event, index) => {
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

      console.log(event);

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
  </>
);

export default Table;
