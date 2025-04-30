import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import echo from './../assets/GoogleHome.jpg';
import avatar from './../assets/avatar.png'
import './../Cards.css';
import HomeGraph from './../assets/HomeGraph.png';

export default function Home() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={echo}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Google Home"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Google Home"
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
        <img src={HomeGraph} alt="" />
        <p>There have been 2 vulnerabilities in the Google Home Firmware in the past 6 years.
            The last vulnerability was in 2024, with a CVSS score of 10, and let an attacker spy on the victim.
            The vulnerability was fixed within a week, and the firmware has had no vulernabilities since.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}