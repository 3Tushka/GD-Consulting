// import { MapContainer } from '../../components/Map/MapContainer';
import './contactInfo.scss';
import { CompassOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

export const ContactInfo = () => {

    return (
        <>
            <div className="contactInfo">
                <div className="contactInfo__title">
                    <h2>Contact</h2>
                </div>
                <div className="contactInfo__content">
                    <div className="contactInfo__content__item">
                        <i><CompassOutlined style={{ fontSize: '32px' }} /></i>
                        <span>19th floor The Exchange Tower, Business Bay, Dubai, United Arab Emirates</span>
                    </div>
                    <div className="contactInfo__content__item">
                        <i><PhoneOutlined style={{ fontSize: '32px' }} /> </i>
                        <span>+971 56 840 0795</span>
                    </div>
                    <div className="contactInfo__content__item">
                        <i><MailOutlined style={{ fontSize: '32px' }} /></i>
                        <span>hello@gdconsulting.ae</span>
                    </div>
                </div>
            </div>
        </>
    )
}
