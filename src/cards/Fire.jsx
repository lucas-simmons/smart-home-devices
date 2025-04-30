import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import fireTv from './../assets/firetv.jpeg';
import avatar from './../assets/avatar.png';
import './../Cards.css';
import FireGraph from './../assets/FireGraph.png';

export default function Fire() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    return (
        <section>
            <Card className="card"
        style={{ width: 300 }}
        cover={
         <img className="device-img"
            alt="example"
            src={fireTv}
          />
         }
            >
            <Meta
                avatar={<Avatar src={avatar} />}
                title="Amazon Fire Tv"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Amazon Fire Tv/Stick"
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
        <img className="graph" src={FireGraph} alt="CVSS report graph for the Fire OS" />
        <p> The Fire OS(Operating System) has had 12 reported vulnerabilities.
          The latest 3 were discovered in 2023 with severity scores from 5.4-8.8, 
          they were fixed after week.
        </p>
        <p>Source: cvedetails.com</p>
      </Modal>
        </section>
    )
}