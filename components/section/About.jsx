import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from 'components/misc/SectionTitle';
import FancyImage from 'components/misc/FancyImage';
import me from 'assets/me.png';
import { uncloak } from 'utils';
import PropTypes from 'prop-types';

function SkillItem({ children }) {
  return (
    <li className="font-mono mb-1 before:align-text-bottom before:content-['▹'] before:text-primary before:mr-2 before:text-sm">
      {children}
    </li>
  );
}

function About({ className }) {
  const skills = [
    'PHP (laravel, symfony)',
    'Javascript (Node, React, Vue)',
    'Python',
    '.Net (C#, ASP)',
    'Android (Kotlin, Flutter)',
    'Docker',
  ];

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    uncloak('#about');

    gsap.from([titleRef.current, textRef.current, imageRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: '30% top',
        markers: true,
      },
    });
  }, []);

  return (
    <div id="about" className={className}>
      <SectionTitle ref={titleRef} className="cloak mb-6" number={1}>
        Qui Suis-je ?
      </SectionTitle>
      <div ref={textRef} className="cloak flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-3/4">
          <p className="mb-3">
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
            development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>

          <p className="mb-3">
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
            corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for a variety of clients.
          </p>

          <p className="mb-3">
            I also recently launched a course that covers everything you need to build a web app with the Spotify API
            using Node & React.
          </p>

          <p className="mb-5">Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid md:grid-cols-2">
            {skills.map((item, i) => (
              <SkillItem key={i}>{item}</SkillItem>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center py-12 md:py-0 md:items-start ">
          <FancyImage className="cloak" ref={imageRef} src={me} />
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  className: PropTypes.string,
};

export default About;
