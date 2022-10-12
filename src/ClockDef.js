import React from 'react';

const ClockDef=(props)=>{
    const finish=new Date('September 9 2023 10:00:00');
    //console.log(props.now);
    let preostalo=Math.round((finish.getTime()-props.now)/1000);
    const dan= Math.round(preostalo/60/60/24);
    return(
        //console.log(preostalo),
        <div className='container'>
            <div className='topMove'>
            <h1 className='tekst'>Ostalo je jos samo <span>{preostalo}</span> sekundi do kraja</h1>
            <h1 className='tekst'><span>{dan}</span> dana <h1>Vidis koliko brzo ide, izdrzi!</h1></h1>
            </div>
        </div>
    )
}

export default ClockDef;