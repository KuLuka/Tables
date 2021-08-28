import React from 'react';
import './style.scss';


const SmallTable = (props) => {
    const header1 = props.left1Title;
    const header = props.standardnaOprema;
    const opis = props.standardLi;


    return (
        <div>
            <div className="product-page-techincal">
                <h3>{props.teh_kar}</h3>
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
            </div>
        </div>
    )
}

export default SmallTable;

{/* <div className="oprema-opisi">
                    <div className="o-oprema">
                        <h4>{header}</h4>
                        <p>{opis}</p>
                    </div>

                    <div class="spec-oprema">
                        <div class="s-oprema">
                            <h4>{header2}</h4>
                            <ul>
                                {liHeader1.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>

                        <div class="d-oprema">
                            <h4>{header3}</h4>
                            <ul>
                                {liHeader2.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> */}