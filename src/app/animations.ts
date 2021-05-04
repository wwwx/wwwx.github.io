import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* => *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    query(":enter", style({ transform: "translateX(100%)", opacity: 0 }), {
      optional: true,
    }),
    sequence([
      group([
        query("@*, :leave", [animateChild()], { optional: true }),
        query(
          ":leave",
          [
            style({ transform: "translateX(0%)" }),
            animate(
              "0.52s ease-in-out",
              style({ transform: "translateX(-100%)", opacity: 0 })
            ),
          ],
          { optional: true }
        ),
        query(
          ":enter",
          [
            style({ transform: "translateX(100%)", opacity: 0 }),
            animate(
              "0.52s ease-in-out",
              style({ transform: "translateX(0%)", opacity: 1 })
            ),
          ],
          { optional: true }
        ),
        query("@*, :enter", [animateChild()], { optional: true }),
      ]),
    ]),
  ]),
]);
