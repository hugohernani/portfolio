import { rest } from 'msw';
import { IProject } from 'src/interfaces';

const projects: IProject[] = [
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
];

const productsApiMocks = [
  rest.get('/projects/:id', (req, res, ctx) => {
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    return res(ctx.delay(500), ctx.status(200, 'Mocked status'), ctx.json(randomProject));
  }),
  rest.get('/projects', (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200, 'Mocked status'), ctx.json(projects));
  }),
];

export default productsApiMocks;
