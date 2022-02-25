import React from "react";
import styled from "styled-components";
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Scrollbars } from 'react-custom-scrollbars';
import palette from "../../lib/styles/palette";

const TimeLineBoxBlock = styled.div`
    position: relative;
    width: 30%;
    height:80%;
    padding:1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const TimeLineCalendarBox = styled.div`
    height:15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2{
        margin-top:-15px;
    }
`
const TimeLineScrollBox = styled(Scrollbars)`
    height:85% !important;
    width: 100% !important;
`


const TimeLineBox = () => {
    const iconStyle = {
        display: 'block',
        width: '15px',
        height: '15px',
        position: 'relative',
        marginLeft: '12px',
        marginTop: '12px',
        background: 'rgb(33, 150, 243)'
    }
    const contentStyle = {
        background: 'rgb(33, 150, 243)',
        marginTop: '-30px',
        color: '#fff'
    }
    const contentArrowStyle = {
        borderRight: '20px solid  rgb(33, 150, 243)'
    }
  return ( 
        <TimeLineBoxBlock>
            <TimeLineCalendarBox>
                <p>Calendar</p>
                <h2>Thursday, 26 Oct</h2>
            </TimeLineCalendarBox>
            <TimeLineScrollBox>
                <VerticalTimeline layout="1-column-left" lineColor={palette.gray[6]}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="2011 - present"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    
                    </VerticalTimeline>
                </TimeLineScrollBox>
        </TimeLineBoxBlock>
    );
};

export default TimeLineBox;
