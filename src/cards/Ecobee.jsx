import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from './../assets/avatar.png';
import graph from './../assets/EcobeeGraph.png';
import ecobee from './../assets/Ecobee.png';
import './../Cards.css';

export default function Ecobee() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className='card'
        style={{ width: 300 }}
        cover={
         <img
            alt="example"
            src={ecobee}
            
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Ecobee3 Lite Thermostat"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Ecobee3 Lite"
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
          There's been 3 vulnerabilities reported in the Ecobee3 Lite Firmware.
          They had an average CVSS score of 9 and were all reported in 2021. Two of these allowed
          an attacker to trigger a denial of service attack. The third vulnerability had a CVSS score of 9.8
          and let an attacker gain password-protected access to the device's terminal.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}