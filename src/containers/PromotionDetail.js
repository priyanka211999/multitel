import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PromotionCard from '../components/atoms/PromotionCard'
import ServiceBanner from '../components/atoms/ServiceBanner'
import ServiceCard from '../components/atoms/ServiceCard'
import CommonSection from '../components/CommonSection'
import LandingPage from '../components/LandingPage'
import { getPromotionBySlug } from '../services/promotions'




const servicesData = [
    {
      id: 1,
      title: "Fiber Infrastructure",
      src: "/assets/images/fiber.png",
    },
    {
      id: 2,
      title: "IP Transit Provider",
      src: "/assets/images/ip.png",
    },
    {
      id: 3,
      title: "Cloud Connection",
      src: "/assets/images/cloud.png",
    },
    {
      id: 4,
      title: "Ethernet Transport",
      src: "/assets/images/ethernet.png",
    },
  ];

function PromotionDetail() {
  const [promoDetail, setPromoDetail] = useState({})
  const params = useParams()
  console.log(params?.slug)

  useEffect(() => {
    (async () => {
      const response = await getPromotionBySlug({slug: params?.slug})
      console.log(response);
      setPromoDetail(response?.data?.data);
      // !response?.data?.length && setInitial("No promotions found");
    })();
  }, []);

  return (
    <LandingPage>
        <ServiceBanner title={promoDetail?.name} backlink='/categories/promotions' />
        <section className='promo-det'>
            <Container>
                <PromotionCard promo={promoDetail} detail />
            </Container>
        </section>

        <section id="img_cards" className="">
        <Container>
          <Row>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                title={service.title}
                home
              />
            ))}
          </Row>          
        </Container>
      </section>

      <section class="four_pics text-center mb-5">
        <Container>
            <Row>
                <Col md={12}>
                    <h2 style={{color: "var(--big-heading)"}} className="mb-4">Play and enjoy your streams</h2>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div class="promo_img">
                        <img src='/assets/images/promo1.png' />
                    </div>
                </Col>
                <Col md={4}>
                    <div class="promo_img" style={{marginBottom: "22px"}}>
                        <img src='/assets/images/promo2.png' />
                    </div>
                    <div class="promo_img">
                        <img src='/assets/images/promo3.png' />
                    </div>
                </Col>
                <Col md={4}>
                    <div class="promo_img">
                        <img src='/assets/images/promo4.png' />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>          

      <CommonSection />
    </LandingPage>
  )
}

export default PromotionDetail
