import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
import { Grid, Cell } from 'react-mdl';
import {Link} from 'react-router-dom';


/////////////////
////COMPONENTS////
/////////////////
import Education from './education';
import Experience from './experience';
import Skills from './skills';


// have to rename component in here and at export - must start with a capital
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid style={{ paddingTop: '100px' }}>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/download/2017/05/09/885769_user_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>
            {/*Download Resume Link - Goes to PDF*/}
            <Link className="download-resume-btn" to="/"> Download Resume </Link>

            <h2 style={{ paddingTop: '2em' }}>Alexander Jivov</h2>
            <h4 style={{ color: 'grey' }}>Full-Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Front-End Developer specializing in React.js and Responsive Design. Experience with full-stack front-end and back-end frameworks, with previous experience in sales, journalism, and public policy. </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>68 Yorkville Avenue</p>
            <h5>Phone</h5>
            <p>(647)-624-4362</p>
            <h5>Email</h5>
            <p>jivovalexander@gmail.com</p>
            <h5>Web</h5>
            <p>My Website Goes Here</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h1>Education</h1>
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="University of Toronto Coding Boot Camp"
              schoolDescription="An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, jQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handlebars.js, & React.js"
            />

            <Education
              startYear={2012}
              endYear={2016}
              schoolName="George Washington University"
              schoolDescription="Bachelor of Arts in International Affairs, Concentrations in Security Policy and International Politics"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2> Experience </h2>

            <Experience
              startYear={2017}
              endYear="Present"
              jobName="TouchBistro - Software Sales Executive"
              jobDescription={
                <ul>
                  <li>Closed the largest deal in company history, selling TouchBistro’s platform to a 500+ location national franchise with an annualized contract value of $740,000 USD, making up 192% of individual quota </li>
                  <li>Managed relations with multiple corporate teams for large franchises, liaising between TouchBistro’s senior leadership and corporate executives to achieve optimal returns for the company</li>
                  <li>Consulted with new and existing restaurants and hotels to help manage their brand images and ensured the successful openings and expansions of over 100+ venues in North America and internationally</li>
                  <li>Sold TouchBistro’s specialized Point of Sale (POS) and Software as a Service (SaaS) platform to independent and large chain restaurant and hotel organizations, generating over USD $150,000 in revenue to date for the organization</li>
                  <li>Worked independently to examine market trends in the restaurant and hospitality industry, generating potential business opportunities independently and craft marketing strategy for TouchBistro products</li>
                </ul>
              }
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName="POLITICO - Business Development Associate"
              jobDescription={
                <ul>
                  <li>Identified and coordinated business development opportunities through in-depth market research and client outreach, as a member of the POLITICO Pro associate team, in partnership with the Account Executive in a new market segment</li>
                  <li>Recognized as the top performer of the POLITICO Pro greater associate team of 15 people, achieving 90-100% of set goals for 5 of 7 months, ultimately contributing USD$465,000 in revenue over two consecutive quarters </li>
                  <li>Spearheaded technical project management tasks relating to the legal and technology teams through collaboration with POLITICO’s technology division, ensuring all members of the team were aware of new product launches, as well as the necessary steps to implement the new offerings into POLITICO’s existing content management system</li>
                  <li>Developed business acumen in several industries relating to US Domestic and International policy, including financial services, healthcare, and education</li>
                  <li>Partnered with POLITICO Pro’s management team to launch an initiative to encourage entrepreneurship and cross-collaboration between POLITICO’s product, editorial, and business divisions</li>
                </ul>
              }
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Podesta Group - Business Development Fellow"
              jobDescription={
                <ul>
                  <li>Directly participated in meetings and conference calls with the business development team to design sales pitches for potential clients, resulting in over 10 new client acquisitions and over USD$1,000,000 in revenue</li>
                  <li>Developed and copy-edited marketing proposals for over a dozen potential clients for both the US and International markets</li>
                  <li>Conducted research and synthesized information on congressional hearings, legislation and think-tank events on behalf of clients and senior Podesta Group staff</li>
                </ul>
              }
            />
            <Experience
              startYear={2013}
              endYear={2015}
              jobName="National Post - National Reporter"
              jobDescription={
                <ul>
                  <li>Reporter for National Post, a division of Postmedia and the largest newspaper in Canada - circulation of 163,000 people</li>
                  <li>Conducted interviews and research for stories relating to both Toronto and Canada, particularly pertaining to healthcare and financial services issues; over 100 articles were published in print, online, tablet, and smartphone</li>
                  <li>Managed an official Twitter account to engage the National Post’s audience regarding published content and ongoing events; the National Post now has over 720,000 Twitter followers and an online circulation of approximately 12 million</li>
                </ul>
              }
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="React.js"
              progress={95}
            />
              <Skills
              skill="Sass"
              progress={95}
            />
              <Skills
              skill="Gulp"
              progress={95}
            />
            <Skills
              skill="JavaScript"
              progress={90}
            />

            <Skills
              skill="HTML"
              progress={90}
            />
            <Skills
              skill="CSS"
              progress={95}
            />
            <Skills
              skill="BootStrap"
              progress={95}
            />
            <Skills
              skill="Express"
              progress={70}
            />
            <Skills
              skill="MySQL"
              progress={65}
            />
            <Skills
              skill="MongoDB"
              progress={55}
            />




          </Cell>

        </Grid>
      </div>
    );
  }
}

export default Resume;