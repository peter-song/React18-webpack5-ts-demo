import React from 'react';

interface IProps {
  children: any;
}

interface IStatus {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IStatus> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error :>> ', error);
    console.log('errorInfo :>> ', errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
