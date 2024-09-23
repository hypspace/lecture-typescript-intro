// TS 이넘
// : 드랍다운, 정해진 값 지정 시 사용

// - 숫자형
enum Direction {
  up = 1,
  down,
  left,
  right,
}

let move: Direction
move = Direction.up // 1
move = Direction.down // 4

enum Level {
  Beginner,
  Intermediate,
  Advanced,
}

let game: Level.Beginner // 0
