import React from 'react';
import './style.scss';

const MiniTable = (props) => {


    return (
        <div>
            <div>
                <div className="product-page-techincal">
                    <h3>{props.teh_kar}</h3>
                    <div className="teh-karakteristike-grid">
                        <h5>{props.left1Title}</h5>
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
            </div>
        </div>
    )
}


export default MiniTable;