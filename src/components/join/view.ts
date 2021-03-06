import {
  a,
  button,
  div,
  form,
  h2,
  input,
  label,
  makeDOMDriver,
  p,
  span,
} from '@cycle/dom';

import * as styles from './styles';

function renderForm (data) {
  return form(`.join-chatty-form ${styles.joinForm}`, [
    div('.grid-x grid-margin-x', [
      div('.small-12 cell', [
        div(`.input-group`, [
          input(
            `.input-group-field ${styles.joinInput} ${data.error.length > 0 ? styles.inputErr : ''}`,
            { attrs: { type: 'text', name: 'screenName', placeholder: 'Enter Screen Name...' } },
          ),
          div('.input-group-button', [
            input(
              `.button ${styles.joinButton}`,
              { attrs: { type: 'submit', value: 'Join' }},
            )
          ])
        ]),
        div(`.${styles.joinFormResponseWrapper} ${data.error.length > 0 ? styles.show : styles.hide}`, [
          span(`.${styles.joinFormResponse}`, [`${data.error}`])
        ])
      ]),
    ])
  ])
}

function renderPage (data) {
  const vTree = div(`.${styles.page}`, [
    div(`.${styles.pageBackground}`),
    div(`.grid-container fluid ${styles.fullHeight}`, [
      div(`.grid-x`, [
        div(`.medium-4 cell ${styles.joinCard}`, [
          // Header
          div(`.${styles.joinCardHeader}`, [
            h2(`.${styles.joinCardTitle}`, ['Chatty']),
          ]),
          // Body
          div(`.${styles.joinCardBody}`, [
            renderForm(data),
          ]),
          // Footer
          div(`.${styles.joinCardFooter}`, [
            p(`.${styles.footerText}`, [
              'A ',
              a(
                { attrs: { href: 'https://cycle.js.org/', target: '_blank' }},
                ['Cycle.js']
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
