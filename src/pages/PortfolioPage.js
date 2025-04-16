import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { InfoBlockTypeSix } from '../components/common/InfoBlockTypeSix';
import '../assets/styles/TextStyles.css';
import '../assets/styles/PortfolioPage.css';
import DecorativeElement from '../components/common/DecorativeElement';
import { Platforms } from '../components/common/Platforms';
import ApplicationForm from '../components/layout/ApplicationForm';
import Logo_3 from '../assets/images/logo_3.svg';
import { InfoBlockTypeFive } from '../components/common/InfoBlockTypeFive';
import IconContainer from '../components/common/IconContainer';
import { UNSAFE_useScrollRestoration, useNavigate } from 'react-router-dom';
import ApplicationWindow from '../components/layout/ApplicationWindow';
import LandingPortfolioSlider from '../components/layout/LandingPortfolioSlider';
import { useParams } from 'react-router-dom';

import { companyData, resultsData } from '../data';

export const PortfolioPage = () => {
  const { id } = useParams(); 
  console.log(id)
  const navigate = useNavigate();

  const hundleBtnBackClicked =()=>{
    navigate('/');
  }

  return (
    <div className="portfolio-page">
      <Header />
      <div className="portfolio-page-body">
        
      
      <div className='back-conteiner-portfolio-page'>
        <a className='p7 text1 btn-back-portfolio-page' onClick={hundleBtnBackClicked}>Портфолио&nbsp;</a>
        <p className='p7'>/ &nbsp; {companyData.company_name}</p>
      </div>
      
      <div className="portfolio-page-component-1">
        <h className="h4 p1-768 portfolio-page-title">{companyData.title}</h>
        <Platforms {...companyData.platforms} />
        <InfoBlockTypeSix className="portfolio-page-block-1">
          <img className="portfolio-page-logo" src={companyData.logo} alt="Логотип компании" />
          <DecorativeElement className="portfolio-page-block-1-de-1" />
          <DecorativeElement className="portfolio-page-block-1-de-2" />
        </InfoBlockTypeSix>
      </div>

      <div className="portfolio-page-component-2">
        <h className="h4 p1-768">О проекте</h>

        <div className="portfolio-page-block-2-top">
          <InfoBlockTypeFive className="portfolio-page-about-company">
            <h className="h5 p3-768">{companyData.about.title}</h>
            <div className="rectangle"></div>
            <p className="p3 p6-768 text1">{companyData.about.description}</p>
          </InfoBlockTypeFive>

          <InfoBlockTypeFive className="portfolio-page-purpose">
            <h className="h5 p3-768">{companyData.goal.title}</h>
            <div className="rectangle"></div>
            <p className="p3 p6-768 text1">{companyData.goal.description}</p>
          </InfoBlockTypeFive>
        </div>

        <div className="portfolio-page-block-2-bottom">
          <InfoBlockTypeFive className="portfolio-page-tasks">
            <h className="h5 p3-768 portfolio-page-tasks-title">Задачи</h>
            <div className="portfolio-page-tasks-block">
              {companyData.tasks.map((task) => (
                <div key={task.id} className='tascks'>
                  <div className="task-number">
                    <IconContainer 
                      text={String(task.id).padStart(2, '0')} 
                      textClassName="p5 p6-768" 
                      size={44} 
                      mobileSize={40}
                    />
                  </div>
                  <p className="p3 p5-1440 p7-768 text1">{task.text}</p>
                  <div className='vertical-line' />
                </div>
              ))}
            </div>
          </InfoBlockTypeFive>
        </div>
      </div>

      <div className="portfolio-page-component-3">
        <h className="h4 p1-768">Результат</h>
        <div className="portfolio-page-component-3-blocks">
          <InfoBlockTypeFive className="portfolio-page-component-3-left-block">
          <div className="portfolio-page-tasks-block">
            {resultsData.map((result) => (
              <div key={result.id} className='tascks'>
                <div className="task-number">
                  <IconContainer 
                    text={String(result.id).padStart(2, '0')} 
                    textClassName="p5 p6-768" 
                    size={44} 
                    mobileSize={40}
                  />
                </div>
                <p className="p4 p6-768 text1">{result.text}</p>
                <div className='vertical-line' />
              </div>
            ))}</div>
            <DecorativeElement className="portfolio-page-component-3-de" />
          </InfoBlockTypeFive>

          <InfoBlockTypeFive className="portfolio-page-component-3-right-block">
            <h className='big-number'>30%</h>
            <div className="rectangle" />
            <p className='p6  text1'>экономии времени и бюджета благодаря внедрению готовых решений при разработке</p>
          </InfoBlockTypeFive>
        </div>
      </div>

      <LandingPortfolioSlider
        id="portfolio-section"
        slidesToShow={4} 
        slidesToShowTablet={3} 
        slidesToShowMobile={1} 
    />

      <ApplicationForm id="contact-us" />

      </div>
      <Footer />
    </div>
  );
};