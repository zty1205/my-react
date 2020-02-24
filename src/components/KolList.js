import React from 'react';
import Kols from 'assets/js/gerber/kols.js';
import { Link } from 'react-router-dom';

class KolsList extends React.Component {
    clickKol(e, kol) {
        console.log('log = ', kol.staticsName)
        window.location.href = kol.link
    }
    moreKols() {
        console.log('moreKols')
        console.log('this.props =', this.props)
        console.log('this.context =', this.context)
        // this.props.history.push('/KolList')
    }
    render() {
        const isMore = this.props.isMore
        const list = isMore ? Kols.slice(0, 3) : Kols
        
        const kolList = list.map(kol => 
            <div key={kol.staticsName} className='kol-img' onClick={(e) => this.clickKol(e, kol)}>
                <img src={kol.imgUrl} alt=''></img>
            </div>
        )
        return (
            <div className='kols'>
                {kolList}
                {isMore && <div className="kols-more" >
                    <Link className="text" to='/KolList'>查看更多>></Link>
                </div>}
            </div>
        );
    }
}

export default KolsList;
