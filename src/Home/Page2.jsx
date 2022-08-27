import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QRCode from 'qrcode.react';
import { Row, Col } from 'antd';
import { page2 } from './data';
import Benchmarking from '../../src/Home/static/image/Benchmarking.svg'
import ExpertTeams from  '../../src/Home/static/image/ExpertTeams.svg'
import TechnologyPlatform from '../../src/Home/static/image/TechnologyPlatform.svg'

export default function Page2() {
  const children = page2.map((d, i) => {
    if (i > 2) {
      return null;
    }
    return (
      <Col key={i} className="col" span={8}>
        <div className="content-wrapper home-hover">
        {i===0 &&  <div className="image" style={{ backgroundImage: `url(${Benchmarking})` }} />}
        {i===1 &&  <div className="image" style={{ backgroundImage: `url(${ExpertTeams})` }} />}
        {i===2 &&  <div className="image" style={{ backgroundImage: `url(${TechnologyPlatform})` }} />}
          <div className="code-wrapper">
            <h4 style={{fontSize:25, fontWeight:'bold'}}>{d.title}</h4>
            <p style={{fontSize:16}}>{d.url}</p>
          </div>
        </div>
      </Col>);
  });
  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
          <h2 key="h2" style={{fontSize:38}}>What makes us unique</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
}
