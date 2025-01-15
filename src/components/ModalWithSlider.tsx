import React from 'react';
import Modal, { Props as ReactModalProps } from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import Image from 'next/image';
import { VscChromeClose } from "react-icons/vsc";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"

const TypedModal = Modal as unknown as React.FC<ReactModalProps>;
const SliderComponent = Slider as unknown as React.FC<any>;

interface ModalWithSliderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  slides: any[];
}

const ModalWithSlider: React.FC<ModalWithSliderProps> = ({ isOpen, onRequestClose, slides }) => {
  const sliderRef = React.useRef<Slider | null>(null);

  const handleScroll = (event: WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('wheel', handleScroll);

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      window.removeEventListener('wheel', handleScroll);
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  const settings = {
    fade: false,
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <TypedModal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: '#141613d4',
          zIndex: 10,
        },
        content: {
          borderRadius: '0',
          border: 'none',
          padding: '0',
          overflow: 'hidden',
          top: '52.6%',
          left: '50%',
          height: '65vh',
          maxWidth: '1210px',
          width: '1210px',
          transform: 'translate(-50.35%, -41%)'
        },
      }}
    >
      <StyledSliderContainer>
        <AnimatePresence>
          {isOpen &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              layout
            >
              <div className="close-button" onClick={onRequestClose}>
                <VscChromeClose fontSize={20} />
              </div>

              <SliderComponent ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                  index === 0 ? (
                    <StyledCoverSlide key={index}>
                      <div className='overlay'></div>
                      <Image
                        src={slide?.Cover?.url}
                        alt="Cover"
                        width={1200}
                        height={600}
                        style={{ objectFit: 'cover' }}
                      />

                      <div className='cover-slide-content'>
                        <div className='company-name'>{slide?.Title}</div> 
                        <div className='slide-title'>{slide?.Description}</div>

                        <Link href={slide?.Link} className='read-more-link'>
                            <span className="label">READ MORE</span>
                        </Link>

                        <Link href={slide?.Link_External} className='external-link'>
                          <span className="label">or visit website</span>
                        </Link>

                      </div>
                    </StyledCoverSlide>
                  ) : (
                  <StyledSlide key={index}>
                    <div className='slide-wrapper'>
                      <div className='slide-content'>
                          <div className='slide-title'>{slide?.Title}</div>
                          <div className='slide-description'>{slide?.Description}</div>

                          <div className='slide-links'>
                              <Link href={slide?.Link} className='read-more-link'>
                                <span className="label">READ MORE</span>
                              </Link>

                              <Link href={slide?.Link_External} className='external-link'>
                                <span className="label">or visit Algedra's website</span>
                              </Link>
                          </div>
                      </div>
                      <div className='slide-media'>
                          <div className='overlay'></div>
                          <Image
                            src={slide?.Cover?.url}
                            alt="Cover"
                            width={1200}
                            height={600}
                            style={{ objectFit: 'cover' }}
                          />
                      </div>
                    </div>
                  </StyledSlide>
                  )
                ))}
              </SliderComponent>
            </motion.div>
          }
        </AnimatePresence>
      </StyledSliderContainer>
    </TypedModal>
  );
};

export default ModalWithSlider;


const StyledSliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .close-button {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 99;
    cursor: pointer;
    color: var(--beige);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--darkOlive);
    border: 1px solid var(--beige);
  }

  .slick-list {
    height: 65vh;
    background-color: var(--darkOlive);
  }
  
  
  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-52%);
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex !important;
    justify-content: end;
    align-items: center;
    z-index: 99;

    li {
      margin: 0 5px;
      display: flex !important;
      justify-content: center;
      align-items: center;

      button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }

        &:before {
          display: none;
        }
      }

      &.slick-active {
        button {
          opacity: 1;
        }
      }
    }
  }
`

const StyledCoverSlide = styled.div`
  position: relative;
  overflow: hidden;
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141613;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .cover-slide-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4rem 4rem;
    width: 30%;
    height: calc(100% - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    z-index: 2;

    .company-name {
      text-transform: uppercase;
      font-family: var(--font-noto-serif-display);
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
      margin-bottom: 3rem;
    }

    .slide-title {
      
      font-size: 1.2rem;
      font-weight: 300;
      color: #fff;
      margin-bottom: 5rem;
    }

    .read-more-link {
      text-decoration: none;
      color: #fff;
      font-size: .9rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 3rem;
      border: 1px solid #fff;
      margin-bottom: 1rem;

      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }

    .external-link {
      text-decoration: none;
      color: #fff;
      font-size: .75rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      
      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
`

const StyledSlide = styled.div`
  .slide-wrapper {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 65vh;
    width: 100%;

    .slide-content {
      background-color: var(--darkOlive);
      padding: 4rem;
      display: flex;
      flex-direction: column;

      .slide-title {
        text-transform: uppercase;
        font-family: var(--font-noto-serif-display);
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--beige);
        margin-bottom: 3rem;
      }

      .slide-description {
        font-size: .85rem;
        font-weight: 300;
        line-height: 1.5;
        text-align: justify;
        color: var(--beige);
        margin-bottom: 5rem;
      }

      .slide-links {
        margin-top: auto;
        display: flex;
        flex-direction: column;

        .read-more-link {
          text-decoration: none;
          color: #fff;
          font-size: .9rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          padding: 0.5rem 3rem;
          border: 1px solid #fff;
          margin-bottom: 1rem;
          max-width: 92px;

          &:hover {
            color: #fff;
            text-decoration: underline;
          }
        }

        .external-link {
          text-decoration: none;
          color: #fff;
          font-size: .75rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          
          &:hover {
            color: #fff;
            text-decoration: underline;
          }
        }
      }
    }

    .slide-media {
      background-color: #141613;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

`
