import { Stream } from 'xstream';
import { DOMSource, VNode } from '@cycle/dom';

interface ISources {
  DOM: DOMSource,
}

interface ISinks {
  DOM: Stream<VNode>,
}
