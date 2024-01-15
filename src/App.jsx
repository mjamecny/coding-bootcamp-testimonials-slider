import { useState } from "react"
import styled from "styled-components"

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1.6rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 2.4rem;
  padding-inline: 2.4rem;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
    padding-inline: 12.8rem;
  }
`

const CurvePattern = styled.svg`
  width: 100%;
  margin-top: auto;
`

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
  }

  @media (min-width: 64em) {
    grid-column: 2/-1;
    margin-left: -9.6rem;
  }
`

const Text = styled.p`
  font-weight: 300;
  text-align: center;
  position: relative;
  padding-top: 3.2rem;

  @media (min-width: 64em) {
    text-align: left;
    font-size: 3rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;

  @media (min-width: 64em) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.8rem;
  }
`

const Name = styled.p`
  font-size: 1.4rem;
  font-weight: 500;

  @media (min-width: 64em) {
    font-size: 1.8rem;
  }
`

const Job = styled.p`
  font-size: 1.4rem;
  color: var(--color-grayish-blue);

  @media (min-width: 64em) {
    font-size: 1.6rem;
  }
`

const Quotes = styled.img`
  position: absolute;
  width: 6.4rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 64em) {
    left: 80px;
  }
`

const Profile = styled.img`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 7px;
  max-width: 80%;
  height: 80%;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`

const SliderButtons = styled.div`
  background-color: #fff;
  display: flex;
  width: 75px;
  justify-content: space-between;
  border-radius: 100px;
  padding: 0.8rem;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (min-width: 64em) {
    left: 30%;
    bottom: 8%;
  }
`

const SliderButton = styled.button`
  background-color: transparent;
  border: none;

  svg {
    width: 12px;
    height: 18px;
  }
`

const Testimonial = styled.div`
  @media (min-width: 64em) {
    grid-row: 1/2;
    align-self: center;
  }
`

const testimonials = [
  {
    id: 1,
    img: "image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until
    now. I couldn’t recommend this course enough. I’m now in the job of my
    dreams and so excited about the future. ”`,
    name: "Tanya Sinclair",
    job: "UX Engineer",
  },
  {
    id: 2,
    img: "image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
  },
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const { img, text, name, job } = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <StyledApp>
      <Grid>
        <ImageContainer>
          <img src="pattern-bg.svg" alt="background pattern" />
          <Profile src={img} alt={`profile picture of ${name}`} />
          <SliderButtons>
            <SliderButton onClick={prevTestimonial}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </SliderButton>
            <SliderButton onClick={nextTestimonial}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </SliderButton>
          </SliderButtons>
        </ImageContainer>
        <Testimonial>
          <Text>
            <Quotes src="pattern-quotes.svg" alt="quotes" />
            {text}
          </Text>
          <Info>
            <Name>{name}</Name>
            <Job>{job}</Job>
          </Info>
        </Testimonial>
      </Grid>
      <CurvePattern xmlns="http://www.w3.org/2000/svg" width="610" height="154">
        <path
          fill="#F4F4FC"
          fillRule="evenodd"
          d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"
        />
      </CurvePattern>
    </StyledApp>
  )
}
