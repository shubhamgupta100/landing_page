import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h1" style={{fontSize:50 ,lineHeight:1.1}}>
              Slash your SaaS software <span style={{color:'#FFBF00'}}>costs by 30%</span>
            </h1>
            <p key="p">We help you in <b style={{fontWeight:900}}>SaaS Discovery, Buying, Management & Renewal </b> with data backed insights and expert buying teams</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                window.location.href = 'mailto:shubhgupta955936@gmail.com';
              }}
              >
                View More
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
