import React from 'react';
import Footercopy from './Footerbottom/Footercopy';
import Footertop from './FooterTop/Footertop';

function Footermain() {
    return (
        <div>
            {/* footer start */}
            <Footertop/>
            {/* footer end */}
            {/* footer copyright start */}
            <Footercopy/>
            {/* footer copyright end */}
            {/* back to top start */}
            <a href="javascript:void(0)" className="scroll" id="top">
                <span>
                    <i className="fa fa-angle-double-up" />
                </span>
            </a>
            {/* back to top end */}
            <div className="mm-fullscreen-bg" />
        </div>
    )
}

export default Footermain;