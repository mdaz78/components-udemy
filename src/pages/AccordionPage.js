import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: '1a',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want.',
    },
    {
      id: '2a',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use JavaScript on any project you want.',
    },
    {
      id: '3a',
      label: 'Can I use TypeScript on a project?',
      content: 'You can use TypeScript on any project you want.',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
