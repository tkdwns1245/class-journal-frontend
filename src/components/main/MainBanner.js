import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import teacherImg from '../../uploads/images/main/teacher.png';
import bannerImg from '../../uploads/images/main/bannerimg.png';


const MainBannerBoxBlock = styled.div`
    position: relative;
    width: 100%;
    height:80%;
    padding:1rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;
const LeftBannerBoxBlock = styled.div`
    width: 40%;
    height:100%;
    padding:1rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    .title{
        font-size:20px;
        margin-bottom:-5px;
        span{
            font-size:30px;
        }
        display:block;
    }
    .subTitle{
        font-size:13px;
        span{
            font-size:20px;
        }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const RightBannerBoxBlock = styled.div`
    width: 60%;
    padding:1rem;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const LeftBannerImgBox = styled.div`
height:60%;
`

const RightBannerImgBox = styled.div`
height:100%;
`
const MainBanner = () => {
    return ( 
        <MainBannerBoxBlock>
            <LeftBannerBoxBlock>
                <div>
                    <p className="title">
                        <span>선생님</span> 을 위한
                    </p>
                    <p className="title" style={{marginLeft:'70px'}}>
                        학급일지 플래너
                    </p>
                    <p className="subTitle"><span>로그인</span> 이후 사용 해주세요.</p>
                </div>
                <LeftBannerImgBox>
                    <img src={ teacherImg} />
                </LeftBannerImgBox>
            </LeftBannerBoxBlock>
            <RightBannerBoxBlock>
                <RightBannerImgBox>
                    <img src={ bannerImg} style={{width:'100%',height:'auto'}}/>
                </RightBannerImgBox>
            </RightBannerBoxBlock>
        </MainBannerBoxBlock>
    );
}

export default MainBanner;