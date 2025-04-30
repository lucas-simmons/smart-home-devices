import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import august from './../assets/August.png';
import './../Cards.css';

export default function August() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={august}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="August Smart Lock"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the August Smart Lock Ecosystem"
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
          The August Home and Connect are two smart lock devices from August that are usually purchased together.
          The 'Connect' connects your lock to your Wifi network, and the Home is the lock itself, and both have a bluetooth
          connection to a smartphone. 
        </p>
        <p>
        The August Smart Lock ecosystem has had two reported vulnerabilities.
          One with a CVSS score of 9.8 on the August Connect Firmware, reported in 2019; it let an attacker discover home Wifi credentials
          through unsecured data transfer. The other vulnerability  had a CVSS score of 6.5 and was witin the 
          August Connect Wi-Fi Bridge App and reported in 2020, it also let an attacker discover Wifi authentication credentials.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}