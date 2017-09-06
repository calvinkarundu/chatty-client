import { Stream } from 'xstream';
import { DOMSource, VNode } from '@cycle/dom';
import { HTTPSource, RequestInput } from '@cycle/http';
import { TimeSource } from '@cycle/time';

interface ISources {
  DOM: DOMSource,
  props$: Stream<Object>,
}

interface ISinks {
  DOM: Stream<VNode>,
}
