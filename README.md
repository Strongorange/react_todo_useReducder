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

# Make Todo

<strong>state 는 항상 대체하는 것임을 명심 </strong>

## Array Control

배열을 항상 직접 수정하는 것이 아닌 새로운 것을 만들어서 조작한 뒤에 쓰는것이 좋은 접근

<strong>filter 를 사용해 삭제할 id 가 아닌 아이들만 리턴함으로서 삭제할 id 를 가지고있는 아이는 리턴하지 않아 삭제된 배열을 state 로 대체!</strong>

## 항상 이전의 state 를 return 해줘야함

complete 를 만드는 과정에서 toDO 를 입력하면 undefined 의 length 를 구한다는 오류가 나왔는데
reducer 에서 completed 의 정보를 주지 않았기 때문에 오류 발생 항상 이전의 state 정보를 return 해주고 그 후에 정보를 추가한 뒤 해당 Obj 를 state 에 ""대체"" 한다!

## .find()

배열의 각각 요소에 실행되며 true 가 되는 요소를 리턴함
