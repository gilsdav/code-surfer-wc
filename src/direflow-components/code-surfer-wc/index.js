import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'code-surfer-wc',
    useShadow: false
  },
  plugins: [
    // {
    //   name: 'font-loader',
    //   options: {
    //     google: {
    //       families: ['Advent Pro', 'Noto Sans JP'],
    //     },
    //   },
    // },
  ],
});
