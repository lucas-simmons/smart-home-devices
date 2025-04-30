import './Header.css';
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function Header() {
       const [open, setOpen] = useState(false);


    return (
        <header className="header">
            <h1>The Vulnerabilities of a Smart Home</h1>
            <Button type="primary" onClick={() => setOpen(true)} >
                FAQ
            </Button>
            <Modal title="FAQ" open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                footer={[
                    <Button key="close" onClick={() => setOpen(false)}>
                        Close
                    </Button>,
                ]}>
                <p>What's CVSS? </p>
                <p>Common Vulnerability Scoring System, indicating 
                    the severity of a vulnerability from 0-10, with 10 being the most severe.</p>

                <p>Is this information valid?</p>
                <p>The sources used for vulnerability information in the SHDSC are cvedetails.com and nvd.nist.gov. 
                    nvd.nist.gov is the National Vulnerability Database. Both sites use the CVE® Program for their 
                    database of vulnerabilities.
                    The CVE® Program has been in the Cybersecurity space for 25 years, discovering, verifying, and 
                    publishing any known or submitted vulnerabilities. 
                    It is a highly respected program in the space.
                </p>
                <a href="https://www.cve.org/About/Overview">More About CVE®</a>
                <br />
                <a href="https://www.investopedia.com/terms/s/smart-home.asp">Smart Home Image from Investopedia</a>
            </Modal>
            
        </header>
    )

}