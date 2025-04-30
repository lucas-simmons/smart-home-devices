import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import ring from './../assets/ring.jpg'
import avatar from './../assets/avatar.png';
import './../Cards.css';

export default function Ring() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={ring}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Ring Doorbell"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Ring Doorbell"
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
        <p> The Ring Video Doorbell Firmware has had 1 known vulnerability. 
            The vulnerability has a CVSS score of 9.1 during CVSS version 2.0, 
            and a score of 6.4 during version 3.0. Before the vulnerability was fixed in 2019,
            encryption of the firmware was mishandled. Cyber attackers were able to 
            access audio and video data, or spoof recorded video.
        </p>
        <p>Source: nvd.nist.gov</p>
      </Modal>
        </section>
    )
}