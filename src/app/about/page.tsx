import AboutSection from '../components/about/about';

const offersData = [
  { id: 1, title: 'Offer 1', description: 'Description for offer 1', image: '/ofer1.png' },
  { id: 2, title: 'Offer 2', description: 'Description for offer 2', image: '/offer2.png' },
  { id: 3, title: 'Offer 3', description: 'Description for offer 3', image: '/offer3.png' },
  { id: 4, title: 'Offer 4', description: 'Description for offer 4', image: '/offer4.png' },
];

const AboutPage = () => {
  return (
    <div>
      <AboutSection offers={offersData} />
    </div>
  );
};

export default AboutPage;