import React from 'react';
import MobileIcon from '../../assets/images/Mobile.svg';
import AdminIcon from '../../assets/images/setting-two.svg';
import WebsiteIcon from '../../assets/images/website.svg';
import AndroideIcon from '../../assets/images/android.svg';
import AppleIcon from '../../assets/images/apple.svg';
import './InfoBlock.css';

export const Platforms = ({
    className = '',
    mobile_app = false,
    ios = false,
    android = false,
    admin_panel = false,
    web_site = false,
}) => {
    const supportedPlatforms = [
        { key: 'mobile_app', label: 'Мобильное приложение', icon: MobileIcon },
        { key: 'web-site', label: 'Веб-сайт', icon: WebsiteIcon },
        { key: 'ios', label: 'Apple IOS', icon: AppleIcon },
        { key: 'android', label: 'Android', icon: AndroideIcon },
        { key: 'admin_panel', label: 'Административная панель', icon: AdminIcon },
    ];

    const activePlatforms = supportedPlatforms.filter((platform) => {
        switch (platform.key) {
            case 'mobile_app':
                return mobile_app;
            case 'ios':
                return ios;
            case 'android':
                return android;
            case 'admin_panel':
                return admin_panel;
            case 'web-site':
                return web_site;
            default:
                return false;
        }
    });

    return (
        <div className={`platforms-container ${className}`}>
            {activePlatforms.map((platform) => (
                <div key={platform.key} className="platform-item">
                    <img src={platform.icon} alt={platform.label} className="platform-icon" />
                    <span className="platform-label">{platform.label}</span>
                </div>
            ))}
        </div>
    );
};