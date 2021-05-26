import { setupWorker } from 'msw';
import projectsApiHandlers from './projectsAPI';

const worker = setupWorker(...projectsApiHandlers);

export default worker;
