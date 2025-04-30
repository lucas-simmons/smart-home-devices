import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import echo from './../assets/Echo.avif';
import avatar from './../assets/avatar.png'
import './../Cards.css';

export default function Echo() {
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
                title="Amazon Echo"
                description=""
            />
                <Button type="primary" onClick={() => setOpen(true)}>
                    Is it Secure?
                </Button>
              </Card>
      <Modal
        title="Cybersecurity of the Amazon Echo"
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
        <p>There has been 1 vulnerability in the Echo Firmware, it had a CVSS score of 4.3. The vulnerability let an attacker
          force the Echo to have the microphone receive input even when not prompted. The attacker 
          could then gain access to speech transcripts from when the device was listening without being prompted.
          This vulnerability existed until 2018, when it was fixed.
        </p>
        <p>Source: nvd.nist.gov</p>
      </Modal>
        </section>
    )
}