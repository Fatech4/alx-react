import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Import jsdom to mock the DOM environment
import { JSDOM } from 'jsdom';

// Create a DOM environment
const { window } = new JSDOM();

// Assign window to global object
global.window = window;

// Initialize KeyboardEvent on global object
global.KeyboardEvent = window.KeyboardEvent;

Enzyme.configure({
  adapter: new Adapter(),
});
