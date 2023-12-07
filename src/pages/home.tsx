import type { NextPage } from 'next'
import { useState } from 'react';
import { Header, Navigation } from 'src/components'
import { Text } from '@chakra-ui/layout'
import Head from 'next/head';
import { MemberList, RequireAuth } from 'src/widgets'
import Image from 'next/image';
import AppLayout from '../layouts/AppLayout'
import about1 from '../template/img/about-1.jpg'; 
import about2 from '../template/img/about-2.jpg'; 
import background from '../template/img/background.jpg'; 
import project1 from '../template/img/project-1.jpg'; 
import project2 from '../template/img/project-2.jpg';
import project3 from '../template/img/project-3.jpg';
import project4 from '../template/img/project-4.jpg';
import project5 from '../template/img/project-5.jpg';
import project6 from '../template/img/project-6.jpg';
import team1 from '../template/img/team-1.jpg';
import team2 from '../template/img/team-2.jpg';
import team3 from '../template/img/team-3.jpg';
import team4 from '../template/img/team-4.jpg';
import team5 from '../template/img/team-4.jpg';
import team6 from '../template/img/team-4.jpg';
import team7 from '../template/img/team-4.jpg';
import testimonial1 from '../template/img/testimonial-1.jpg';
import testimonial2 from '../template/img/testimonial-2.jpg';
import testimonial3 from '../template/img/testimonial-3.jpg';
import testimonial4 from '../template/img/testimonial-4.jpg';
import carousel1 from '../template/img/carousel-1.jpg'; 
import carousel2 from '../template/img/carousel-2.jpg'; 

const Home: NextPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const teamMembers = [team1, team2, team3, team4, team5, team6, team7];
  const handlePrevClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  const handleNextClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  return (
    <RequireAuth>
      <Navigation />
      <div>
        <Head>
          <style>{`
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
          `}</style>
        </Head>
        <div className="container-fluid px-0">
          <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval={false}>
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={0}
                className={carouselIndex === 0 ? 'active' : ''}
              />
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={1}
                className={carouselIndex === 1 ? 'active' : ''}
              />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`}>
                <Image src={carousel1} className="img-fluid" alt="First slide" />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                    <a className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                    <a className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${carouselIndex === 1 ? 'active' : ''}`}>
                <Image src={carousel2} className="img-fluid" alt="Second slide" />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                    <a className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                    <a className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
              onClick={handlePrevClick}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
              onClick={handleNextClick}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}
        {/* Fact Start */}
        <div className="container-fluid bg-secondary py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">99</h1>
                  <h5 className="text-white mt-1">Success in getting happy customer</h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">25</h1>
                  <h5 className="text-white mt-1">Thousands of successful business</h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">120</h1>
                  <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">5</h1>
                  <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact End */}
        {/* About Start */}
        <div className="container-fluid py-5 my-5">
          <div className="container pt-5">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                <div className="h-100 position-relative">
                    <Image src={about1} className="img-fluid w-75 rounded" alt="" style={{marginBottom: '25%'}}/>
                  <div className="position-absolute w-75" style={{top: '25%', left: '25%'}}>
                    <Image src={about2} className="img-fluid w-100 rounded" alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                <h5 className="text-primary">About Us</h5>
                <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                <a className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Services Start */}
        <div className="container-fluid services py-5 mb-5">
          <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
              <h5 className="text-primary">Our Services</h5>
              <h1>Services Built Specifically For Your Business</h1>
            </div>
            <div className="row g-5 services-inner">
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fa fa-code fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">Web Design</h4>
                      <p className="mb-4" style={{ color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fa fa-file-code fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">Web Development</h4>
                      <p className="mb-4" style={{ color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fa fa-external-link-alt fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">UI/UX Design</h4>
                      <p className="mb-4" style={{ color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fas fa-user-secret fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">Web Cecurity</h4>
                      <p className="mb-4" style={{ color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fa fa-envelope-open fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">Digital Marketing</h4>
                      <p className="mb-4" style={{ color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className="fas fa-laptop fa-7x mb-4 text-primary" />
                      <h4 className="mb-3">Programming</h4>
                      <p className="mb-4" style={{ color:'black' }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                      <a className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* Project Start */}
        <div className="container-fluid project py-5 mb-5">
          <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
              <h5 className="text-primary">Our Project</h5>
              <h1>Our Recently Completed Projects</h1>
            </div>
            <div className="row g-5">
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="project-item">
                  <div className="project-img">
                   <Image src={project1} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Web design</h4>
                        <p className="m-0 text-white">Web Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="project-item">
                  <div className="project-img">
                    <Image src={project2} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Cyber Security</h4>
                        <p className="m-0 text-white">Cyber Security Core</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="project-item">
                  <div className="project-img">
                    <Image src={project3} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Mobile Info</h4>
                        <p className="m-0 text-white">Upcomming Phone</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="project-item">
                  <div className="project-img">
                    <Image src={project4} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Web Development</h4>
                        <p className="m-0 text-white">Web Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="project-item">
                  <div className="project-img">
                    <Image src={project5} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Digital Marketing</h4>
                        <p className="m-0 text-white">Marketing Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="project-item">
                  <div className="project-img">
                    <Image src={project6} className="img-fluid w-100 rounded" alt="First slide" />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">keyword Research</h4>
                        <p className="m-0 text-white">keyword Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project End */}
        
        


        <div className="container-fluid py-5 mb-5 team">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="text-primary">Our Team</h5>
            <h1>Meet our expert Team</h1>
          </div>
          <div className={`owl-carousel team-carousel${teamMembers.length >= 4 ? '-scrollable' : ''}`}>
            <MemberList type={"home"}/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .team-carousel,
        .team-carousel-scrollable {
          display: flex;
          gap: 16px;
          padding-bottom: 16px;
          overflow-x: auto; /* Enable horizontal scrolling */
          max-width: 100%; /* Set a maximum width for the container */
        }
      `}</style>


        
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5 mb-5">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
            <h5 className="text-primary">Our Testimonial</h5>
            <h1>Our Client Saying!</h1>
          </div>
          <div className="testimonial-carousel-container">
            <div className="testimonial-carousel">
              <div className="testimonial-item border p-4">
              <div className="d-flex align-items-center">
              <div>
                <Image src={testimonial1} alt="" />
              </div>
              <div className="ms-4">
                <h4 className="text-secondary">Client Name</h4>
                <p className="m-0 pb-3" style={{ color:'black'   }}>Profession</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star me-1 text-primary" />
                  <i className="fas fa-star me-1 text-primary" />
                  <i className="fas fa-star me-1 text-primary" />
                  <i className="fas fa-star me-1 text-primary" />
                  <i className="fas fa-star me-1 text-primary" />
                </div>
              </div>
            </div>
            <div className="border-top mt-4 pt-3">
              <p className="mb-0" style={{ wordWrap: 'break-word', maxWidth: '400px', whiteSpace:'initial', color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
            </div>
              </div>
              <div className="testimonial-item border p-4">
                <div className="d-flex align-items-center">
                <div>
                  <Image src={testimonial2} alt="" />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3" style={{ color:'black'   }}>Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
                </div>
                <div className="border-top mt-4 pt-3">
                  <p className="mb-0" style={{ wordWrap: 'break-word', maxWidth: '400px', whiteSpace:'initial', color:'black'  }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                </div>
              </div>
              <div className="testimonial-item border p-4">
                <div className="d-flex align-items-center">
                <div>
                  <Image src={testimonial3} alt="" />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3" style={{ color:'black'   }}>Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
                </div>
                <div className="border-top mt-4 pt-3">
                  <p className="mb-0" style={{ wordWrap: 'break-word', maxWidth: '400px', whiteSpace:'initial', color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                </div>
              </div>
              <div className="testimonial-item border p-4">
                <div className="d-flex align-items-center">
                <div>
                  <Image src={testimonial3} alt="" />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3" style={{ color:'black'   }}>Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
                </div>
                <div className="border-top mt-4 pt-3">
                  <p className="mb-0" style={{ wordWrap: 'break-word', maxWidth: '400px', whiteSpace:'initial', color:'black'   }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                </div>
              </div>
              <div className="testimonial-item border p-4">
                <div className="d-flex align-items-center">
                <div>
                  <Image src={testimonial4} alt="" />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
                </div>
                <div className="border-top mt-4 pt-3">
                  <p className="mb-0" style={{ wordWrap: 'break-word', maxWidth: '400px', whiteSpace:'initial', color:'black'  }}>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}






        {/* Contact Start */}
        <div className="container-fluid py-5 mb-5">
          <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
              <h5 className="text-primary">Get In Touch</h5>
              <h1 className="mb-3">Contact for any query</h1>
              <p className="mb-2">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            </div>
            <div className="contact-detail position-relative p-5">
              <div className="row g-5 mb-5 justify-content-center">
                <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                  <div className="d-flex bg-light p-3 rounded">
                    <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                      <i className="fas fa-map-marker-alt text-white" />
                    </div>
                    <div className="ms-3">
                      <h4 className="text-primary">Address</h4>
                      <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">23 rank Str, NY</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                  <div className="d-flex bg-light p-3 rounded">
                    <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                      <i className="fa fa-phone text-white" />
                    </div>
                    <div className="ms-3">
                      <h4 className="text-primary">Call Us</h4>
                      <a className="h5" href="tel:+0123456789" target="_blank">+012 3456 7890</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                  <div className="d-flex bg-light p-3 rounded">
                    <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                      <i className="fa fa-envelope text-white" />
                    </div>
                    <div className="ms-3">
                      <h4 className="text-primary">Email Us</h4>
                      <a className="h5" href="mailto:info@example.com" target="_blank">info@example.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                  <div className="p-5 h-100 rounded contact-map">
                    <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                  <div className="p-5 rounded contact-form">
                    <div className="mb-4">
                      <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                      <input type="text" className="form-control border-0 py-3" placeholder="Project" />
                    </div>
                    <div className="mb-4">
                      <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="text-start">
                      <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        {/* Contact End */}
        {/* Footer Start */}
        <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
          <div className="container pt-5 pb-4">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <a href="index.html">
                  <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                </a>
                <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                <div className="d-flex hightech-link">
                  <a className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary" /></a>
                  <a className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary" /></a>
                  <a className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary" /></a>
                  <a className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="h3 text-secondary">Short Link</a>
                <div className="mt-4 d-flex flex-column short-link">
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />About us</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Contact us</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Our Services</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Our Projects</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Latest Blog</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="h3 text-secondary">Help Link</a>
                <div className="mt-4 d-flex flex-column help-link">
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Terms Of use</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Privacy Policy</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Helps</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />FQAs</a>
                  <a className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Contact</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="h3 text-secondary">Contact Us</a>
                <div className="text-white mt-4 d-flex flex-column contact-link">
                  <a href="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2" /> 123 Street, New York, USA</a>
                  <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2" /> +123 456 7890</a>
                  <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2" /> info@exmple.con</a>
                </div>
              </div>
            </div>
            <hr className="text-light mt-5 mb-4" />
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2" />ODD</a>, All right reserved.</span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                <span className="text-light">Designed By<a href="https://htmlcodex.com" className="text-secondary">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>
    </RequireAuth>
  );
};

export default Home;

