import styled from 'styled-components';
import Link from 'next/link'

const Button = props => {
  const {
    anchorTag = false,
    type,
    children,
  } = props
  return (
    <>
      {anchorTag ? (
        <A {...props} type={type} href="">{children}</A>
      ) : (
        <Link href="" passHref>
          <A {...props} type={type}>{children}</A>
        </Link>
      )}
    </>
  );
}

export default Button;

const A = styled.a`
  display:flex;
  justify-content: center;
  align-items:center;
  background:${({ type }) => type === 'primary' ? 'black' : type === 'secondary' ? 'transparent' : 'black'};
  color:${({ type }) => type === 'primary' ? 'white' : type === 'secondary' ? 'black' : 'white'};
  height:3rem;
  width:12rem;
  border-radius:11px;
  border:${({ type }) => type === 'primary' ? 'none' : type === 'secondary' ? '2px solid black' : 'none'};
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`