import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import graph from './../assets/NestGraph.png';
import nest from './../assets/NestWifi.png';
import './../Cards.css';

export default function NestWifi() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={nest}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Nest Wifi Pro"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Nest Wifi Pro"
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
        <img className="graph" src={graph} alt="CVSS report graph for the Fire OS" />
        
        <p>
          The Nest Wifi Pro Firmware has had three reported vulnerabilities, all in 2024. 
          Two of them had a CVSS score of 10.00, the most notable one let an 
          attacker gain root access and compromised user data. The two 10 CVSS 
          score vulnerabilities were updated in within a week and the other 
          vulnerability took two months.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}