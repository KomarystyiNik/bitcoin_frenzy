import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { selectHistory } from '../../redux/selectors';
import './HistoryBar.scss';

const HistoryBar: React.FC = () => {
  const history  = useSelector(selectHistory);


  return (
    <div className="history-bar-container" >
      {history.map(({ date, action}) => (
        <div className="action" key={date.valueOf()}>
          <span>{dayjs(date).format('DD/MM/YYYY H:mm')}</span>
          <span className="description">{action}</span>
        </div>
      ))}
    </div>
  );
};

export default HistoryBar;
export { HistoryBar };
