import { Stream } from 'xstream';
import { DOMSource, VNode } from '@cycle/dom';
import { HTTPSource, RequestInput } from '@cycle/http';
import { TimeSource } from '@cycle/time';

interface ISources {
  DOM: DOMSource,
  HTTP: HTTPSource,
  Time: TimeSource,
}

interface ISinks {
  DOM: Stream<VNode>,
}
