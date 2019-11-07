import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './domain/i18n/i18n';

configure({ adapter: new Adapter() });
