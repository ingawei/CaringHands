import * as React from 'react';
import Layout from '@/components/layout/Layout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { Row } from '@/components/layout/Row';
import { Col } from '@/components/layout/Col';
import { Title } from '@/components/layout/Title';
import { Book } from '@/components/icons/Book';

export default function AboutUs() {
  return (
    <Layout>
      <Col className='mt-6 gap-8'>
        <p className='font-light text-white md:text-lg'>
          <span className='font-bold'>Caring Hands of Hope</span> designs
          programs and campaigns tailored to promote girls’ health and
          health-promoting social behavior change; improve girls’ school
          attendance; and provide vocational and life skills training and
          leadership development among out of school young women. We aim to
          create a long-lasting impact on the lives of girls and young women to
          enable them to fulfill their potential as healthy individuals and
          productive members of our society.
        </p>
        <Col className='gap-2'>
          <Title text='The Challenges' color='teal' />
          <Row className='gap-2 text-white'>
            <Col className='w-1/5'>
              <Book stroke='#9C7687' />
              <div>Limited Access to Education Among Girls</div>
            </Col>
            <Col className='w-1/5'>
              <Book stroke='#9C7687' />
              <div>Poor Sanitation in Schools</div>
            </Col>
            <Col className='w-1/5'>
              <Book stroke='#9C7687' />
              <div>Limited Access to Electricity</div>
            </Col>
            <Col className='w-1/5'>
              <Book stroke='#9C7687' />
              <div>HIV Infection Among Girls</div>
            </Col>
            <Col className='w-1/5'>
              <Book stroke='#9C7687' />
              <div>Unintended Pregnancy</div>
            </Col>
          </Row>
        </Col>
        <AboutEducation />
        <Col className='gap-2'>
          <Title text='Poor Sanitation in Schools' color='teal' />
          <Row className='gap-6'>
            <div className='w-2/3 font-light text-white md:text-lg'>
              <p>
                Poor sanitation in schools imposes a special risk for girls and
                who are menstruating. In the 117 schools in Mityana, the pupil
                to latrine stance ratio is reported at 1:63 which is far above
                the national standard of 1:40. Hand washing is low with only 62%
                of the schools having water hand washing facilities. Only 59% of
                the schools have a water source. Schools having no water sources
                have relied on shallow wells and boreholes located long
                distances away. Menstrual hygiene management facilities
                including changing rooms and incinerators, which can also serve
                as general waste management units, are not provided in most
                schools.
              </p>
              <p>
                Taboos around menstrual health, and limited knowledge about
                menstrual hygiene management, and the high costs of menstrual
                management products also contribute to girls’ absences from
                school. Faced with the prospect of using rags, newspaper,
                leaves, or cotton wool to curb the flow of blood, many girls
                choose not to go to school during their period. The result is
                that girls in the Mityana district routinely miss school during
                menstruation.
              </p>
            </div>
            <div className='relative h-80 w-80 bg-teal'>
              <img
                className='absolute top-2 right-2 h-80 w-80 border-8 border-pink object-cover'
                src='/images/children.jpeg'
              />
            </div>
          </Row>
          <Row className='mt-4 gap-8'>
            <div className='relative h-80 w-80 bg-pink'>
              <img
                className='absolute top-2 left-2 h-80 w-80 border-8 border-teal object-cover'
                src='/images/in_class.jpeg'
              />
            </div>
            <div className='w-2/3 font-light text-white md:text-lg'>
              <p>
                <span className='font-bold'>Caring Hands of Hope Uganda</span>{' '}
                is providing one simple and effective solution to remedy how
                poor sanitation in school negatively impacts girls: providing
                them with Imperial© washable, cloth sanitary pads that last for
                up to a year and cost a fraction of an equivalent supply of
                disposable pads. These pads provide girls with the confidence to
                attend school during their periods. Information about
                menstruation and the female reproductive system is included
                along with instructions about how to use and care for Imperial©
                pads.
              </p>
            </div>
          </Row>
        </Col>
        <Col className='gap-2'>
          <Title text='Limited Access to Electricity' color='pink' />
          <Row className='mt-4 gap-8'>
            <Col className='w-2/3 gap-2 font-light text-white md:text-lg'>
              <p>
                Without access to electricity, productivity is limited to
                daylight hours. Darkness eliminates the possibility for children
                and girls to study or read after the sun goes down. Having
                access to a solar light lengthens the time at home after school
                for girls to study and learn.
              </p>
              <p className='mt-2 font-light text-white md:text-lg'>
                <span className='font-bold'>Caring Hands of Hope Uganda</span>{' '}
                empowers school girls by providing them with a backpack that
                includes a solar lamp to use at home and on the way to and from
                school. The pack itself will also provide girls with a private
                way to carry and use our Imperial© washable pads to manage their
                menstruation at school.
              </p>
            </Col>
            <div className='relative h-80 w-80 bg-teal'>
              <img
                className='absolute top-2 right-2 h-80 w-80 border-8 border-pink object-cover'
                src='/images/children.jpeg'
              />
            </div>
          </Row>
        </Col>
        <Col className='gap-2'>
          <Title text='HIV Infection Among Girls' color='teal' />
          <Row className='gap-8'>
            <div className='relative h-80 w-80 bg-pink'>
              <img
                className='absolute top-2 left-2 h-80 w-80 border-8 border-teal object-cover'
                src='/images/in_class.jpeg'
              />
            </div>
            <Col className='w-2/3 gap-2 font-light text-white md:text-lg'>
              <p>
                Globally, adolescent girls and young women are still
                disproportionately affected by HIV. HIV prevalence is almost
                four times higher among young women aged 15 to 24 than young men
                of the same age. Studies indicate only 42.1% of adolescent girls
                in Uganda have knowledge on HIV prevention. There are a number
                of myths that young girls and women still believe concerning
                HIV/AIDS prevention which puts their lives at risk and helps to
                explains the high HIV infection rates among girls and young
                women. The majority of uneducated girls are highly susceptible
                not only to HIV/AIDS but also to other sexually transmitted
                diseases and related health complications.
              </p>
              <p>
                <span className='font-bold'>Caring Hands of Hope Uganda</span>{' '}
                will provide girls with access to sexual and reproductive health
                information as part of the menstrual education will accompany
                the distribution of Imperial© menstrual pads. Access to this
                information promises to increase the use of different strategies
                to reduce the incidence of HIV/AIDS and other sexually
                transmitted diseases.
              </p>
            </Col>
          </Row>
        </Col>
        <Col className='gap-2'>
          <Title text='Unintended Pregnancy' color='pink' />
          <Row className='gap-8'>
            <Col className='w-2/3 gap-2 font-light text-white md:text-lg'>
              <p>
                In Uganda, teenage pregnancy rates are some of the highest in
                the world. One in four girls is pregnant or has a child;
                however, statistics change from region to region. The poorest
                regions have the highest percentage of teenage pregnancy.
                Teenager mothers are at a higher risk of complicated births,
                unsafe abortions, often requiring emergency obstetric care and
                do not have access to adequate reproductive health care end up
                dying while trying to give life. The majority of teenage mothers
                drop out of school. Due to poverty, many engage in unsafe
                activities including sex trade which expose them to HIV/AIDS and
                other sexually transmitted diseases. Others end up in abusive
                child marriages.
              </p>
              <p>
                <span className='font-bold'>Caring Hands of Hope Uganda</span>{' '}
                seeks to empower teenage girls to stay in school until they
                complete their education as one of the ways to prevent teenage
                pregnancy and child marriages. This is done through creating a
                supportive school environment for girls by providing girls with
                scholastic materials such as books and pens, as well as
                Imperial© menstrual hygiene management kits, with washable pads
                and information about menstruation and the female reproductive
                system. In addition, teenage mothers will receive vocational and
                business management training to build skills to enable them
                start their own income generating businesses and engage in
                meaningful income activities other than those that put them at
                risk of HIV and teenage pregnancy.
              </p>
            </Col>
            <div className='relative h-80 w-80 bg-teal'>
              <img
                className='absolute top-2 right-2 h-80 w-80 border-8 border-pink object-cover'
                src='/images/children.jpeg'
              />
            </div>
          </Row>
        </Col>
      </Col>
    </Layout>
  );
}

export function AboutEducation() {
  return (
    <Col className='gap-2'>
      <Title text='Limited Access to Education Among Girls' color='pink' />
      <Row className='relative mt-2 w-full gap-8'>
        <div className='relative h-80 w-80 bg-pink'>
          <img
            className='absolute top-2 left-2 h-80 w-80 border-8 border-teal object-cover'
            src='/images/school_supplies.jpeg'
          />
        </div>
        <div className='w-2/3 font-light text-white md:text-lg'>
          <p>
            In Uganda, education remains a privilege, especially for girls.
            While primary education is now universal, few can afford to go to a
            secondary school. The majority of girls can’t afford scholastic
            materials such as books, uniforms, pencil and pens or afford school
            meals.
          </p>
          <p className='mt-2'>
            <span className='font-bold'>Caring Hands of Hope Uganda</span> seeks
            to provide educational support to girls through the provision of
            school fees, scholastic materials such as books, pens, school
            uniforms, and homework help. In addition, and very importantly,
            personal hygiene materials such as sanitary pads, soap, and
            accompanying information about the female reproductive system will
            also be provide toward creating a school environment in which girls’
            physical development is supported and not a barrier to their
            education.
          </p>
        </div>
      </Row>
    </Col>
  );
}
