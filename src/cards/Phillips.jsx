import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import phillips from './../assets/phillips.png';
import './../Cards.css';

export default function Phillips() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={phillips}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Phillips Hue Bridge"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Phillips Hue Bridge"
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
        <p>
          The Phillips Hue Bridge Firmware has had one reported vulnerability. It had a CVSS score of 7.5
          and was reported in 2023. The vulnerability let an attacker cause a denail of service using a script. 
          This was an insecure permissions vulnerability from that affected the following products as well:
          Nanoleaf Lightstrip Firmware, Govee LED Strip Firmware, Eve Door and Window Firmware, 
          Switchbot's Hub2, Tapo's Mini Smart Wi-fi Plug Firmware, Tp-link's Smart Plug Firmware, 
          and Yeelight's Smart Lamp Firmware.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}