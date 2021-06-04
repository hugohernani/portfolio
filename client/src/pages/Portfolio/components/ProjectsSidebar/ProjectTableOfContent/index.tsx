import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

interface IHeading {
  id: string;
  content: string;
}

const ProjectTableOfContent: React.FC = () => {
  const [headings, setHeadings] = useState<IHeading[]>([]);

  useEffect(() => {
    const markdownContainer = document.getElementsByClassName('markdown-body')[0];
    const headingElements = markdownContainer.getElementsByTagName('h1');

    const headings = Array.from(headingElements).map((e) => ({
      id: e.id,
      content: e.innerText,
    }));

    setHeadings(headings);
  }, []);

  const scrollTo = useCallback((headingId: string) => {
    const headingElem = document.getElementById(headingId) as HTMLElement;
    headingElem.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return useMemo(
    () => (
      <ListGroup className="text-center" variant="flush">
        {headings.map((heading, index) => (
          <ListGroup.Item action key={index} onClick={() => scrollTo(heading.id)}>
            {heading.content}
          </ListGroup.Item>
        ))}
      </ListGroup>
    ),
    [headings, scrollTo],
  );
};

export default ProjectTableOfContent;
