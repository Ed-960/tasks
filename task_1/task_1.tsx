import { Component, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
      my name is {name}, my age is {age}
  </div>
));

// functional component
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
  <div>
      my name is {name}, my age is {age}
  </div>
));

// class component
class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(newProps: IUser) {
      return newProps.name !== this.props.name || newProps.age !== this.props.age;
  }

  render() {
      return (
          <div>
              my name is {this.props.name}, my age is {this.props.age}
          </div>
      )
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(newProps: IProps) {
      const { name, age } = this.props.user;
      const { name: newName, age: newAge } = newProps.user;
      return name !== newName || age !== newAge;
  }

  render() {
      const { name, age } = this.props.user;
      return (
          <div>
              my name is {name}, my age is {age}
          </div>
      );
  }
}