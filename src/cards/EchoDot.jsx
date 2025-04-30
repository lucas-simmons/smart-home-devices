import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import graph from './../assets/DotGraph.png';
import dot from './../assets/dot.png';
import './../Cards.css';

export default function EchoDot() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={dot}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Echo Dot"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Echo Dot"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={[
            <Button key="close" onClick={() => setOpen(false)}>
            Close
          </Button>,
        ]}
      >
        <img className="graph" src={graph} alt="CVSS report graph for the Echo Dot Firmware" />
        
        <p>
          The Nest Wifi Pro Firmware has had three reported vulnerabilities, with one in 2022, 2021, and 2018.
          They had an average CSS score of 6.7.
          One had a CVSS score of 9.8, which let an attacker execute arbitrary voice commands on the device by pairing a 
          malicious bluetooth device.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}