import React from 'react'
import PropTypes from 'prop-types'
import './Sidenav.scss'
//icons
import FilmtwineLogo from '../../assets/Filmtwine-logo.svg'
import DashboardIcon from '../../assets/dashboard.svg'
import FilmsIcon from '../../assets/films.svg'
import FilmmakersIcon from '../../assets/filmmakers.svg'
import SettingsIcon from '../../assets/settings.svg'
import TeamsIcon from '../../assets/team.svg'
import BriefcaseIcon from '../../assets/briefcase.svg'
import TargetIcon from '../../assets/Target.svg'
import ContentPaperEditIcon from '../../assets/content-paper-edit.svg'
import ConversationChatIcon from '../../assets/conversation-chat-1.svg'
import PricingIcon from '../../assets/pricing.svg'
import HelpIcon from '../../assets/question-circle.svg'


function Sidenav ({ onSidebarClose }) {
    return(
        <div className='sidenav'>
            <div className='sidenav-logo'>
                <img src={FilmtwineLogo} alt='logo' />
                <div className='icon-close' onClick={onSidebarClose} />
            </div>

            <div className='sidenav-main'>

                <div className='sidenav-main-content'>
                    <p className='content'>CONTENT</p>
                    <ul className='list'>
                        <li className='list-item'>
                            <img src={DashboardIcon} alt='icon' />
                            <p>Dashboard</p>
                        </li>
                        <li className='list-item'>
                            <img src={FilmsIcon} alt='icon' />
                            <p>Film Submission</p>
                        </li>
                        <li className='list-item'>
                            <img src={FilmmakersIcon} alt='icon' />
                            <p>Filmmakers</p>
                        </li>
                    </ul>
                </div>

                <div className='sidenav-main-settings'>

                    <p className='settings'>SETTINGS</p>

                    <ul className='list'>
                        <li className='list-item'>
                            <img src={SettingsIcon} alt='icon' />
                            <p>Project Settings</p>
                        </li>
                        <li className='list-item'>
                            <img src={TeamsIcon} alt='icon' />
                            <p>Team Management</p>
                        </li>
                        <li className='list-item'>
                            <img src={BriefcaseIcon} alt='icon' />
                            <p>Integrations</p>
                        </li>
                        <li className='list-item'>
                            <img src={TargetIcon} alt='icon' />
                            <p>Privacy Settings</p>
                        </li>
                        <li className='list-item'>
                            <img src={ContentPaperEditIcon} alt='icon' />
                            <p>Submissions Settings</p>
                        </li>
                        <li className='list-item'>
                            <img src={ConversationChatIcon} alt='icon' />
                            <p>Alerts & Notifications</p>
                        </li>
                        <li className='list-item'>
                            <img src={PricingIcon} alt='icon' />
                            <p>Pricing Plan</p>
                        </li>
                        <li className='list-item'>
                            <img src={HelpIcon} alt='icon' />
                            <p>Help & Feedback</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='spacer'>

            </div>
            <div className='sidenav-copyright'>
                <text>Filmtwine 2020</text>
                <p>Crafted with love for the community of filmmakers and artists</p>
            </div>
        </div>
    )
}

Sidenav.propTypes = {
    onSidebarClose: PropTypes.func.isRequired
}

export default Sidenav
