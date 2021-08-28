import React from 'react';
import './style.scss';



const Tables = (props) => {
    const header1 = props.left1Title;
    const header2 = props.left2Title;
    const header3 = props.left3Title;
    const header4 = props.left4Title;
    const header5 = props.left5Title;
    const header6 = props.left6Title;
    const header7 = props.left7Title;
    const header8 = props.left8Title;
    const header9 = props.left9Title;

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

                    <h5>{header6}</h5>
                    <div>
                        {props.table6.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header7}</h5>
                    <div>
                        {props.table7.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>


                    <h5>{header7}</h5>
                    <div>
                        {props.table7.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header8}</h5>
                    <div>
                        {props.table8.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>

                    <h5>{header9}</h5>
                    <div>
                        {props.table9.map((l, i) => (
                            <p
                                className='para'
                                key={i}>
                                {l}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Tables;


