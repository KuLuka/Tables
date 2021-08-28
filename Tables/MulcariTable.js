import React from 'react';
import './style.scss';

const MulcariTable = (props) => {
    const header = props.standardOprema1;
    const opis = props.standardLi1;
    const hheader = props.standardOprema2;
    const oopis = props.standardLi2;

    return (
        <div>
            <div>
                <div className="product-page-techincal">
                    <h3>{props.teh_kar}</h3>
                    <div className="teh-karakteristike-grid">
                        <h5>{props.t1LeftHeader}</h5>
                        <p className='opis-table'>{props.desc3}</p>
                        <div>
                            {props.table1.map((l, i) => (
                                <p
                                    className='para'
                                    key={i}>
                                    {l}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="product-page-special-info">
                        <div className="special">
                            <h3>{header}</h3>
                            <ul>
                                {opis.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="special2">
                            <h3>{hheader}</h3>
                            <ul>
                                {oopis.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MulcariTable;