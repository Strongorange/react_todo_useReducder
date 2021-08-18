# useReducer

## reducer

Switch 문에서 return 하는 obj 는 state 를 대체하게 될 Obj!
<string>완.전.히 Replace 대체</strong>
변경이 아닌 "대체"
state 는 현재 state, action 은 dispatch 에서 보내준 인자

## dispatch

dispatch 는 현재 state 와 action 을 가지고 reducer 함수를 실행
dispatch() 함수의 인자는 reducer 의 action 인자로 들어가고 swtich 문을 충족한다면
state 를 통체로 <strong><u>""대체""</u></strong>

dispatch 는 한가지의 인자를 가질 수 있음
그런데 여러가지 정보를 보내야할때가 있는데 그럴때는를 대비하기 위해 obj 형으로 사용함
