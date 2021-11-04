import SectionTitle from 'components/misc/SectionTitle';
import Image from 'next/image';
import me from 'assets/me.jpg';

function SkillItem({ children }) {
  return (
    <li className="font-mono mb-1 before:align-text-bottom before:content-['▹'] before:text-primary before:mr-2 before:text-sm">
      {children}
    </li>
  );
}

function About() {
  const skills = [
    'PHP (laravel, symfony)',
    'Javascript (Node, React, Vue)',
    'Python',
    '.Net (C#, ASP)',
    'Android (Kotlin, Flutter)',
    'Docker',
  ];

  return (
    <div id="about">
      <SectionTitle className="mb-6" number={1}>
        Qui Suis-je ?
      </SectionTitle>
      <p className="mb-3">
        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development
        started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom
        reblog button taught me a lot about HTML & CSS!
      </p>

      <p className="mb-3">
        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
        corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
        products and digital experiences at Upstatement for a variety of clients.
      </p>

      <p className="mb-3">
        I also recently launched a course that covers everything you need to build a web app with the Spotify API using
        Node & React.
      </p>

      <p className="mb-5">Here are a few technologies I’ve been working with recently:</p>

      <ul className="grid md:grid-cols-2">
        {skills.map((item, i) => (
          <SkillItem key={i}>{item}</SkillItem>
        ))}
      </ul>

      <Image src={me} width={400} layout="responsive" />
    </div>
  );
}

export default About;
