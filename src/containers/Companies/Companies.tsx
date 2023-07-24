import './companies.scss';
import companyDeloitte from '../../assets/images/companies (1).png';
import companyLBDO from '../../assets/images/companies (2).png';
import companyKN from '../../assets/images/companies (3).png';
import companyJvckenwood from '../../assets/images/companies (4).png';
import companyPG from '../../assets/images/companies (5).png';
import companyPrada from '../../assets/images/companies (6).png';
import companyTrussardi from '../../assets/images/companies (7).png';

export const Companies = () => {
    return (
        <>
            <div className="companies">
                <div className="companies__container">
                    <div className="companies__container__item">
                        <img src={companyDeloitte} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyLBDO} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyKN} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyJvckenwood} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyPG} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyPrada} alt="companies" />
                    </div>
                    <div className="companies__container__item">
                        <img src={companyTrussardi} alt="companies" />
                    </div>
                </div>
            </div>
        </>
    )
}
