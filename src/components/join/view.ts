import {
  div,
  form,
  h2,
  a,
  p,
  label,
  input,
  button,
  span,
  makeDOMDriver
} from '@cycle/dom';

import * as styles from './styles';

function renderPage () {
  const vTree = div(`.${styles.page}`, [
    div(`.${styles.pageBackground}`),
    div(`.grid-container fluid ${styles.fullHeight}`, [
      div(`.grid-x`, [
        div(`.medium-4 cell ${styles.joinCard}`, [
          div(`.${styles.joinCardHeader}`, [
            h2(`.${styles.joinCardTitle}`, ['Chatty']),
          ]),
          div(`.${styles.joinCardBody}`, [
            form(`.join-chatty-form ${styles.joinForm}`, [
              div('.grid-x grid-margin-x', [
                div('.small-12 cell', [
                  div(`.input-group`, [
                    input(
                      `.input-group-field ${styles.joinInput}`,
                      { attrs: { type: 'text', placeholder: 'Enter Screen Name...' } },
                    ),
                    div('.input-group-button', [
                      input(
                        `.button ${styles.joinButton}`,
                        { attrs: { type: 'submit', value: 'Join' }},
                      )
                    ])
                  ]),
                ]),
              ])
            ])
          ]),
          div(`.${styles.joinCardFooter}`, [
            p(`.${styles.footerText}`, [
              'A ',
              a(
                { attrs: { href: 'https://cycle.js.org/', target: '_blank' }},
                ['cycle.js']
              ),
              ' experiment by ',
              a(
                { attrs: { href: 'https://twitter.com/calvinkarundu', target: '_blank' }},
                ['@calvinkarundu']
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]);

  return vTree;
}

export default function view (state$) {
  const vTree$ = state$.map(renderPage);

  return vTree$;
};
