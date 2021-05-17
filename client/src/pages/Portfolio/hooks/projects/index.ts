import { useState } from 'react';
import { IProject } from 'src/interfaces';

const useProjects = () => {
  const [projects] = useState<IProject[]>([
    {
      id: '1',
      title: 'Website 1',
      technology: 'React',
      shortDescription:
        'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
    },
    {
      id: '2',
      title: 'Website 2',
      technology: 'Ruby on Rails',
      shortDescription:
        'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
    },
    {
      id: '3',
      title: 'Website 3',
      technology: 'Elixir',
      shortDescription:
        'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
    },
  ]);

  return projects;
};

export default useProjects;
