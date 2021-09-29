import styled from 'styled-components';
import Link from 'next/link'

const Button = ({
  anchorTag = false,
  label,
  type
}) => {
  return (
    <>
      {anchorTag ? (
        <A type={type} href="">{label}</A>
      ) : (
        <Link href="" passHref>
          <A type={type}>{label}</A>
        </Link>
      )}
    </>
  );
}

export default Button;

const A = styled.a`
  display:inline-block;
  background:${({ type }) => type === 'primary' ? 'black' : type === 'secondary' ? 'transparent' : 'black'};
  color:${({ type }) => type === 'primary' ? 'white' : type === 'secondary' ? 'black' : 'white'};
  padding:0.8rem 3rem;
  border-radius:11px;
  border:${({ type }) => type === 'primary' ? 'none' : type === 'secondary' ? '2px solid black' : 'none'};
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.1rem;
`