import React from 'react';

import './index.css';
// 图片
import bgTop from 'assets/img/gerber/bg_1_top.jpg';
import bgImgBG from 'assets/img/gerber/bg_2_imgBG.jpg';
import bgSwiper from 'assets/img/gerber/bg_3_swiper.jpg';
import bgKols from 'assets/img/gerber/bg_4_kols.jpg';
import bgBottom from 'assets/img/gerber/bg_5_bottom.jpg';
import fixBtn from 'assets/img/gerber/fix_btn.png';
import fixWan from 'assets/img/gerber/fix_wan.png';
import shopping from 'assets/img/gerber/shopping.png';
import question1 from 'assets/img/gerber/question1.png';
import question2 from 'assets/img/gerber/question1.png';
import question3 from 'assets/img/gerber/question1.png';
import question4 from 'assets/img/gerber/question1.png';
import baby1 from 'assets/img/gerber/baby-1.png';
import baby2 from 'assets/img/gerber/baby-2.png';
import baby3 from 'assets/img/gerber/baby-3.png';
import baby4 from 'assets/img/gerber/baby-4.png';
import baby5 from 'assets/img/gerber/baby-5.png';
import baby6 from 'assets/img/gerber/baby-6.png';
import baby7 from 'assets/img/gerber/baby-7.png';
// 组件
import KolList from 'components/KolList';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'

export default class Home extends React.Component {
	goApply() {
		console.log('go apply')
		window.location.href = 'https://www.baidu.com/'
	}
	goShopping() {
		console.log('go goShopping');
		window.location.href = 'https://www.taobao.com/'
	}
	componentDidMount() {
		new Swiper ('.swiper-container', {
			loop: true,  //循环
			autoplay: {   //滑动后继续播放（不写官方默认暂停）
				disableOnInteraction: false,
			},
			notNextTick: true,
			pagination: {
				el: '.swiper-pagination',
				bulletClass: 'my-bullet',
				bulletActiveClass: 'my-bullet-active'
			},
			speed: 1000
		})
	}
	render() {
		return (
			<div className='page'>
				<div className='apply-box' onClick={() => this.goApply()}>
					<div className="btn">
						<img src={fixBtn} alt=''></img>
					</div>
					<div className="wan">
						<img src={fixWan} alt=''></img>
					</div>
				</div>
	
				<div className='bg-common bg-top'>
					<img src={bgTop} alt=''></img>
				</div>
				<div className='bg-common bg-img-bg'>
					<img src={bgImgBG} alt=''></img>
					<div className="photos">
						<div className="baby-up clear-f">
							<div className="baby-left">
								<div className="baby">
									<img src={baby1} alt=''/>
								</div>
								<div className="baby">
									<img src={baby6} alt=''/>
								</div>
							</div>
							<div className="baby-right">
								<div className="baby">
									<img src={baby7} alt=''/>
								</div>
							</div>
						</div>

						<div className="baby-down">
							<div className="baby">
								<img src={baby2} alt=''/>
							</div>
							<div className="baby">
								<img src={baby3} alt=''/>
							</div>
							<div className="baby">
								<img src={baby4} alt=''/>
							</div>
							<div className="baby">
								<img src={baby5} alt=''/>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-common bg-bgSwiper'>
					<img src={bgSwiper} alt=''></img>
					<div className="qs-box">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<img src={question1} alt=""></img>
								</div>
								<div className="swiper-slide">
									<img src={question2} alt=""></img>
								</div>
								<div className="swiper-slide">
									<img src={question3} alt=""></img>
								</div>
								<div className="swiper-slide">
									<img src={question4} alt=""></img>
								</div>
							</div>
							<div className="swiper-pagination"></div>
						</div>
      				</div>
				</div>
				<div className='bg-common bg-kols'>
					<img src={bgKols} alt=''></img>
					<KolList isMore={true}></KolList>
				</div>
				<div className='bg-common bg-img-bg'>
					<img src={bgBottom} alt=''></img>
					<div className="shop" onClick={() => this.goShopping()}>
						<img src={shopping} alt=''></img>
					</div>
				</div>
			</div>	
		)
	}
}
