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

// - 문자형
enum Color {
  red = '#f00',
  white = '#fff',
}

let myColor: Color
myColor = Color.red // #f00
myColor = Color.white // #fff

// 활용 사례
enum HttpStatus {
  ok = 200,
  notFount = 404,
  internalServerError = 500,
}

function handleResponse(status: HttpStatus): string {
  switch (status) {
    case HttpStatus.ok:
      return 'Request was successful'
    case HttpStatus.notFount:
      return 'Request not found'
    case HttpStatus.internalServerError:
      return 'An error occurred on the server'
  }
}
