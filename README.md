# useContext

## ContextProvider

createContext 를 사용해서 Context 를 생성후
<b><u>기본 value 를 지정해줌</u></b>

```
    const UserContextProvider = () => {
        return(
            <UserContext.Privider value={{name: "Chanhwi"}}>
                {children}
            </UserContext.Provider>
        );
    }
```

형식으로 지정 후 다른 폴더에서 value 사용가능

```
    const context = useContext(UserContext) //context Obj 를 받음
    const {name} = useContext(UserContext) // context Obj 안의 name 을 지정해 가져옴
```

```
     const UserContextProvider = () => {
         const [user, setUser] = useState({
             name:"Chanhwi",
             loggedIn: false
         })
         const logUserIn = () => setUser({...user, loggedIn: true});
         return(
            <UserContext.Privider value={{user}}>
                {children}
            </UserContext.Provider>
        );
    }
```

이런식으로 한다면 Context 에서 state 를 생성한 후 setState 함수를 보내는 것 도 가능!
value={{~~~}} 는 {~~~} 인 Obj 를 리턴한다고 생각

## useXXX, 사용자 지정 함수?

const {원하는 값} = useContext(해당Context) 으로 값을 가져올 수 도 있지만 해당 기능을 하는 함수를 만들어서 사용하는 것이 편함

```
    export const useUser = () => {
        const { user } = useContext(UserContext);
        return user;
    }
```

라는 함수를 만들어서 다른 곳에서

```
const { name, loggedIn } = useUser();
```

같이 사용가능!

# useReducer

## reducer

### 앱이 엄청난 수의 state 를 가지거나 Component 를 좀 더 나아보이게 만들 필요가 있을때 사용

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

## .find() , filter()

<ul>
    <li>Find 배열의 각각 요소에 실행되며 true 가 되는 요소를 리턴함
    <li>Filter 배열의 각각 요소에 실행되며 <b><u> true 가 되는 요소들의 새로운 배열을 리턴함</u></b>
</ul>

# Edit Function 추가 해야될 듯
