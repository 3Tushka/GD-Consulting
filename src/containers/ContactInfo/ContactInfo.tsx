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
                        <CompassOutlined style={{ fontSize: '32px' }} /> <span>19th floor The Exchange Tower, Business Bay, Dubai, United Arab Emirates</span>
                    </div>
                    <div className="contactInfo__content__item">
                        <PhoneOutlined style={{ fontSize: '32px' }} /> <span>+971 56 840 0795</span>
                    </div>
                    <div className="contactInfo__content__item">
                        <MailOutlined style={{ fontSize: '32px' }} /> <span>hello@gdconsulting.ae</span>
                    </div>
                </div>
            </div>
        </>
    )
}
