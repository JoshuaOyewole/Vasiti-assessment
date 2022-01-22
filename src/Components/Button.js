export default function Button(props) {
    const children = props.children
  return <button className="primary_btn">
      {children}
  </button>;
}
