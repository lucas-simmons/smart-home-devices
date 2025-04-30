import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import graph from './../assets/NestCamGraph.png';
import nestCam from './../assets/NestCam.png';
import './../Cards.css';

export default function NestCam() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={nestCam}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Nest Cam IQ Indoor"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Nest Cam IQ Indoor"
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
          There's been 6 vulnerabilities reported in the Nest Cam IQ Indoor Firmware.
          They had an average CVSS score of 8.2 and were all reported in 2022. All of these
          vulnerabilities used the wireless connection between Nest devices(aka 'Weave') to access 
          private user data or trigger a denial of service attack. 
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}