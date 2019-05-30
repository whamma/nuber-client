import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';

interface IState {
  contryCode: string;
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state: IState = {
    contryCode: '+82',
    phoneNumber: '',
  };

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    } as any);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const { contryCode, phoneNumber } = this.state;
    console.log(contryCode, phoneNumber);
  };

  public render() {
    const { contryCode, phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter
        contryCode={contryCode}
        phoneNumber={phoneNumber}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default PhoneLoginContainer;
