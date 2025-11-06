import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: '1a',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. React is a library for building user interfaces. It is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
    },
    {
      id: '2a',
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on any project you want. JavaScript is a programming language that allows you to implement complex features on web pages. It is a single-threaded, non-blocking, asynchronous, and concurrent language.',
    },
    {
      id: '3a',
      label: 'Can I use TypeScript on a project?',
      content:
        'You can use TypeScript on any project you want. TypeScript is a superset of JavaScript that adds static typing. It is a statically typed, compiled language that allows you to catch errors at compile time rather than runtime.',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
