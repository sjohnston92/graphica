import React from 'react';
import styled from "styled-components";

const AboutUs = () => {

  const developers = [
    {name: 'Nick Ristango', 
      email: 'none@none.com',
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1595459547/juno-jo-_0JsVnHSc0I-unsplash.jpg.jpg', 
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1595689078/dewang-gupta-tcLcXdiAzDA-unsplash_eqq8fq.jpg',
      description: '',
      contribution: ''
    },
    
    {name: 'Braden Church', 
      email: 'bradenchurch@gmail.com', 
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1595690175/tan-guy.jpeg.jpg', 
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1595690134/roan-lavery-p9tE8gHjd6s-unsplash.jpg.jpg',
      contribution: '',
      description: 'I chose to work on the Graphica app because I felt like it would be the most real to life applications. I really enjoyed working on the routing and seeing the app come to life while watching the fronted and backend come to life.'
    }, 
    
    {name: 'Daniel McKenna', 
      email: 'codingp3nguin@gmail.com', 
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1594778414/DSC03579.JPG.jpg', 
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1595704387/waves_fti7dk.jpg',
      description: `I decided to work on the graphica project becasue I felt it had the most features in regards to,
      working with other API's and how much data we would need to get from the backend to the front end. To me that is what sold me on this
      project. I really wanted to learn how to use differnt API's and how to connect backend functionality to the frontend. `,
      contribution: ''
    }, 

    {name: 'Danny Leaver', 
      email: 'dleaver@gmail.com', 
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1594861200/WillyCrop.jpg.jpg',
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1595725935/tetons_e1hvnu.jpg',
      description: `I decided on this one because I thought it could be pretty in-depth, 
      and that I would be able to apply a lot of what I had learned from the bootcamp and also pick up new coding skills. I learned many
      concepts in Ruby on Rails and ReactJS along the way, and I also learned how to work
      on a somewhat complex idea in a group setting. It was challenging to finish on time, as well as collaborate efficiently. 
         `,
      contribution: ''

    }, 
    
    {name: 'Jacob Koskimaki', 
      email: 'jkoskimaki@gmail.com', 
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1595796766/jacob_gf3qrh.jpg',
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1595464168/elephant.jpeg.jpg',
      description: 'As a photography enthusiast, the Graphica project naturally stood out to me as a way to apply programming skills towards an exciting end project. Graphica gave me a chance to work on the backend framework and apply novel design principles using React and Ruby on Rails.',
      contribution: ''
    }, 

    {name: 'Jake Sasser', 
      email: 'sasserjacob@gmail.com', 
      avatar: 'https://res.cloudinary.com/graphica/image/upload/v1595903722/IMG_0907_2_h2xtxr.jpg', 
      banner: 'https://res.cloudinary.com/graphica/image/upload/v1594947500/alex-lange-pv14V3sRB0c-unsplash_flxbhi.jpg.jpg',
      description: '',
      contribution: ''
    },
  ]

  return (
    <>
      {developers.map(developer => (

        <BannerImage url={developer.banner}>
          <BannerLeft>
            <BannerLeftTop>
              <UserAvatar url={developer.avatar}/>
              <BannerContents>
                <UserName>
                  {developer.name}
                </UserName>
                <UserEmail>
                  {developer.email}
                </UserEmail>
                
              </BannerContents>
            </BannerLeftTop>
              <BioSubText>
                {developer.description}
              </BioSubText>
          </BannerLeft>
          <BannerRight>
            <StyledP>contributions:</StyledP>
            <BioSubText>
              {developer.description}
            </BioSubText>
          </BannerRight>


        </BannerImage>
      ))}
    </>
    
  )
}

const BannerImage = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 429px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(89.41deg, #FFFFFF 37.43%, rgba(255, 255, 255, 0) 90.74%), url(${props => props.url});
`;

const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 5rem;
`
const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 11.7rem 0 0 20rem;
  align-self: flex-start;
`

const StyledP = styled.p`
  width: 200px;
  height: 16.64px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 17px;
  color: black;
`

const BannerLeftTop = styled.div`
  display: flex;
  line-height: 17px;
`

const BannerContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
`

// css calc function for accurate vh for the image
const UserAvatar = styled.div`
  width: 186px;
  height: 186px;
  flex-shrink: 0;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
`;

const UserName = styled.p`
  width: 200px;
  height: 16.64px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 17px;
  color: black;
`

//users email
const UserEmail = styled.p`
  width: 130px;
  height: 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: black;

`

  // about me under profile picture
const BioSubText = styled.p`
  width: 425px;
  height: 16.64px;
  margin-top:2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
`



export default AboutUs