import React from 'react';
import './style.scss';


const ZetorTable = props => {
    const header1 = props.left1Title;
    const header2 = props.left2Title;
    const header3 = props.left3Title;
    const header4 = props.left4Title;
    const header5 = props.left5Title;
    const header = props.standardOprema1;
    const opis = props.standardLi1;
    const hheader = props.standardOprema2;
    const oopis = props.standardLi2;

    return (
        <>
            <div className="product-page-techincal">
                <h3>{props.teh_kar}</h3>
                <h4>{props.t1LeftHeader}</h4>
                <div className="teh-karakteristike-grid">
                    <h5>{header1}</h5>
                    <div>
                        {props.table1.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header2}</h5>
                    <div>
                        {props.table2.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header3}</h5>
                    <div>
                        {props.table3.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header4}</h5>
                    <div>
                        {props.table4.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header5}</h5>
                    <div>
                        {props.table5.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>
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
        </>
    )
}


export default ZetorTable;