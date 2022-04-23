import React from "react";

class SafeComponent extends React.Component<unknown, { hasError: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default SafeComponent;
