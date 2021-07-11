import { animate, animateChild, group, keyframes, query, sequence, stagger, style, transition, trigger, } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    query(':enter', style({ transform: 'translateX(100%)', opacity: 0 }), {
      optional: true,
    }),
    sequence([
      group([
        query('@*, :leave', [animateChild()], { optional: true }),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate(
              '0.52s ease-in-out',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate(
              '0.52s ease-in-out',
              style({ transform: 'translateX(0%)', opacity: 1 })
            ),
          ],
          { optional: true }
        ),
        query('@*, :enter', [animateChild()], { optional: true }),
      ]),
    ]),
  ]),
]);

export const slideInAnimation2 = trigger('slideIn', [
  transition('* => *', [
    query(':enter', style({ transform: 'translateY(-25%)', opacity: 0 }), {
      optional: true,
    }),
    query(':leave', style({ transform: 'translateY(0%)', opacity: 1 }), {
      optional: true,
    }),
    query(
      ':enter',
      [
        stagger('0.05s', [
          animate(
            '0.2s ease-out',
            keyframes([
              style({
                transform: 'translateY(-25%)',
                opacity: 0,
                offset: 0,
              }),
              style({ transform: 'translateY(0%)', opacity: 1, offset: 1 }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        stagger('0.05s', [
          animate(
            '0.2s ease-in',
            keyframes([
              style({ transform: 'translateY(0%)', offset: 0 }),
              style({
                transform: 'translateY(-25%)',
                opacity: 0,
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
