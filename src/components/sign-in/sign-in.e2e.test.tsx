import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in";

jest.mock(`../logo/logo.tsx`, () => {
  return {
    'default': 'div'
  }
});

configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

it(`Click by send form button calls callback`, () => {
  const onSubmit = jest.fn();

  const signIn = mount(
      <SignIn
        onSubmit={onSubmit}
      />

  );

  const {loginRef} = signIn.instance();
  loginRef.current.value = `dom@dom`;

  const {passwordRef} = signIn.instance();
  passwordRef.current.value = `click123`;

  signIn.find(`form`).simulate(`submit`, mockEvent);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenLastCalledWith({login: `dom@dom`, password: `click123`});

});
