import { error } from '../../node_modules/@pnotify/core/dist/PNotify';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import '../../node_modules/@pnotify/core/dist/PNotify.css';

export default function() {
  error({
    title: 'Too many matches found. Please enter a more specific query!',
  });
}
