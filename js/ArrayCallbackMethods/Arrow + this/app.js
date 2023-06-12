const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimemout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
// 화살표 함수 안에 있는 this 키워드는
// 함수가 만든 범위에 상속되는 this 키워드 값과 같음
// this 키워드가 함수 내부의 this 키워드와 같다는 의미
// 기억해야할 것은 화살표 함수에서 this 키워드는 일반 함수와 다르다는 것
